import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String
	},
	price: {
		type: Number,
	},
	rating: {
		type: Number,
	},
	genreId: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Genre",
	},
	authorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Author",
	}
})

export default mongoose.model("Book",bookSchema);
