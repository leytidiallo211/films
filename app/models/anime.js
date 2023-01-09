const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Anime extends Model {}

Anime.init({
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
  tableName: "anime"
});


module.exports = Anime;
