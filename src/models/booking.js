'use strict';
const {
  Model
} = require('sequelize');
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
  };
  User.init({
    
    statusId: DataTypes.STRING,
    doctorId: DataTypes.STRING,
    pateintId: DataTypes.STRING,
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    

  }, {
    sequelize,
    modelName: 'Booking',
  });
  return User;
};