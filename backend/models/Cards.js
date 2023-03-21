import mongoose from "mongoose";

const CardsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	}
});

export default mongoose.model('Cards', CardsSchema);