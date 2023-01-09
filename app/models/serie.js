const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Serie extends Model {}

Serie.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
},
  description: {
    type: DataTypes.STRING
},
author: {
  type: DataTypes.STRING
},
}, {
  sequelize,
  tableName: "serie"
});


module.exports = Serie;
