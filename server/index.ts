const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');



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

app.options("*",cors());

const PORT = 5000;


app.listen(5000, () => {
    console.log("Server is listening on port 5000!");
});

