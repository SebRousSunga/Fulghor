import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'



dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "https://localhost:3000",
    methods: "GET,POST",
    credentials: true,
 })
);




export default app;



