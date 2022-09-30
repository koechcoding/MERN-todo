const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

const connectDB = async()=>{
    try{
        await mangoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB is connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.export = connectDB