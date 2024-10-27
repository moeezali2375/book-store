import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
	rating:{
		type:Number
	},
	comment:{
		type:String,
	},
	bookId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Book"
	},
	userId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User"
	}
})

export default mongoose.model("Review",reviewSchema);
