const mongoose = require('mongoose');
const connectDB = async() =>{
    try{
        const conn =await mongoose.connect("mongodb://127.0.0.1:27017",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`mongodb connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(`error:${err.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;