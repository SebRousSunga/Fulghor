import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import musicRoutes from './routes/routing.js'



dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(cors({
    origin: process.env.FRONT_URL,
    methods: "GET,POST",
    credentials: true,
 })
);

//app.options("*",cors());

app.use("/",musicRoutes);


export default app;



