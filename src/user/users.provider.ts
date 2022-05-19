import User from './user.model';

export const UsersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];