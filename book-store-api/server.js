import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./connectDB.js";
import User from "./model/userModel.js";
import Genre from "./model/genreModel.js";
import Author from "./model/authorModel.js";
import Book from "./model/bookModel.js";
import Review from "./model/reviewModel.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    await Review.insertMany(data);
    res.send("Data inserted");
  } catch (error) {
    console.log(error.message);
    res.send("Error");
  }
});

app.get("/book", async (req, res) => {
  const books = await Book.find()
    .populate("genreId")
    .populate("authorId")
    .exec();
  res.status(200).json({ books: books });
});

app.get("/book/:id", async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("genreId")
    .populate("authorId");
  const review = await Review.findOne({ bookId: book._id }).populate("userId");
  res.status(200).json({ book: book, review: review });
});

app.get("/book/:id/author", async (req, res) => {
  const book = await Book.findById(req.params.id);
  const author = await Author.findById(book.authorId);
  res.status(200).json({ author: author });
});

app.get("/genre", async (req, res) => {
  const genre = await Genre.find();
  res.status(200).json({ genres: genre });
});

app.get("/author", async (req, res) => {
  const author = await Author.find();
  res.status(200).json({ authors: author });
});

app.listen(4000, () => {
  console.log("Server Started on Port:4000");
  connectDB();
});
