import { Model, DataTypes } from 'sequelize';
const sequelize = require('../config/database');

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    profileUrl: {
      type: DataTypes.STRING,
      unique: true,
    },
    accessToken: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

export default User;