import express from 'express';
import router from './routes/routes'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const uri = process.env.DATABASE_CONN_URL;

mongoose.connect(uri as string);

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))



app.use('/gptgame', router)

app.listen(1001, () => {
    console.log("Room server started")
})