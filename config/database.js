const {Sequelize}=require('sequelize');


const db=new  Sequelize('grinHits',"vikas","vikas",{
    host:'localhost',
    dialect:"mysql",
    logging: true,
   
});


 module.exports=db
