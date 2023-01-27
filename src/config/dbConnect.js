import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO_URL);

let db = mongoose.connection;

export default db;