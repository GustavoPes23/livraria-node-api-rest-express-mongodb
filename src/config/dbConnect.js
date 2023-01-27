import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gustavo:dDCyMY0mwvFFXUde@cluster0.o2dwn5s.mongodb.net/livraria-alura-node");

let db = mongoose.connection;

export default db;