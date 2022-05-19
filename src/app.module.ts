import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { RepoModule } from './repo/repo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PassportModule.register({session: true}), RepoModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
