import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as session from 'express-session';
import * as passport from 'passport';

ConfigModule.forRoot(); 

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  var SequelizeStore = require("connect-session-sequelize")(session.Store);

  const sequelize = require('./config/database');
  await sequelize.sync();

  const cookieExpiry = 30*24*60*60*1000;
  const sessionStore = new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 60 * 60 * 1000, 
    expiration: cookieExpiry
  });
  app.use(session({
    cookie: {
      maxAge: cookieExpiry
    },
    store: sessionStore,
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  sessionStore.sync();

  const port = process.env.PORT || 4000;
  await app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
  });
};

bootstrap();