import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CardsModel from "./models/Cards.js";

//App
const app = express();
const port = process.env.PORT || 4444;
const url = 'mongodb://localhost:27017/tinder';

app.use(express.json());
app.use(cors());

//DB
mongoose.connect(url)
	.then(() => console.log("DB OK"))
	.catch((err) => console.log("DB error", err));

//API endpoints
app.get('/cards', async (req, res) => {
	try {
		const cardsUser = await CardsModel.find();
		console.log(cardsUser)
		res.json(cardsUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось получить карточки пользователей'
		});
	}
})

//Listener
app.listen(port, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log("Server OK");
});