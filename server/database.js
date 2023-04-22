// const mongoose = require('mongoose');
import mongoose from "mongoose";

function DbConnect () {
    const DB_URL = process.env.MONGO_URL;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

export default DbConnect;