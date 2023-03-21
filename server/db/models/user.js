'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // the functions which will be used
    static async comparePassword(plainPassword, hashedPassword) {
      return await bcrypt.compare(plainPassword, hashedPassword);
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      activated: DataTypes.BOOLEAN,
      verifyEmailSent: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    }
  );

  return User;
};
