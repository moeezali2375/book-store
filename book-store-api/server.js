import express from "express"
import dotenv from "dotenv"
dotenv.config();
import connectDB from "./connectDB.js";
import User from "./model/userModel.js";
import Genre from "./model/genreModel.js";
import Author from "./model/authorModel.js";
import Book from "./model/bookModel.js";
import Review from "./model/reviewModel.js";
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
	try {
		const { data } = req.body;
		console.log(data);
		await Review.insertMany(data);
		res.send("Data inserted");

	} catch (error) {
		console.log(error.message);
		res.send("Error")
	}
})

app.get("/book",async(req,res)=>{
	const books=await Book.find();
	res.status(200).json({books:books});
})
app.listen(4000, () => {
	console.log("Server Started on Port:4000");
	connectDB();
})
