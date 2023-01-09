const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Film extends Model {}

Film.init({
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
  tableName: "film"
});


module.exports = Film;
