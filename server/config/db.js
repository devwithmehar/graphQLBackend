 const mongoose = require('mongoose');
 const { MongoClient, ServerApiVersion } = require('mongodb');
 require('dotenv').config();



const connectDB = async () => {
    try{
      mongoose.connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(`MongoDB is connected`.cyan.underline.bold),
      );
    }
    catch(e){
      console.log("DB is not connected");
    }
};

module.exports = connectDB;

