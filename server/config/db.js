 const mongoose = require('mongoose');
 const { MongoClient, ServerApiVersion } = require('mongodb');
 require('dotenv').config();



const connectDB = async () => {
    try{
    const conn = await  mongoose.connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },

      );

      console.log(`MongoDB is connected ${conn.connection.host}`.cyan.underline.bold);
    }
    catch(e){
      console.log("DB is not connected" +  e);
    }
};

module.exports = connectDB;

