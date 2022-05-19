import { Injectable, UseGuards, Inject } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import User from '../user/user.model';

ConfigModule.forRoot(); 

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User
  ) {}

  @UseGuards(AuthGuard('github'))
  async githubAuth(req): Promise<any> {
    const {user} = req;
    if(!user) {
      return {message: 'No User from Github'};
    } else {
      await this.usersRepository.findOrCreate({
        where: { username: user.username },
        defaults: {
          profileUrl: user.profileUrl,
          accessToken: user.accessToken,
        }
      });
      return {
        message: 'User found from Github',
        user: req.user
      };
    }
  }
}