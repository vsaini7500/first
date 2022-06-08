
const express = require('express')

// const cors=require('cors')

const db=require("./config/database.js");

const Router =require("./routes/routes.js");

const app = express();

app.use(express.json());
// use cors
// app.use(cors());
 
// Testing database connection 
try {
     db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
 
// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));