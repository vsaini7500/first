// import sequelize 
const { Sequelize } =require("sequelize");
// import connection 
const db =require("../config/database.js");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('products', {
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
},{
  // Freeze Table Name
//   freezeTableName: true
});

db.sync({force:false})
 

module.exports=Product