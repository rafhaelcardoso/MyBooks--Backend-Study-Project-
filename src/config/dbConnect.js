import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rafhaelcs:rafhael123@booksdb.ppxxp.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;