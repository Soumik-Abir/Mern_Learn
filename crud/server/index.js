import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/route.js';

const app = express();
const PORT = 8000;

dotenv.config();
app.use(cors());


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', Routes);
app.use('/uploads', express.static('uploads'));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);



app.listen(PORT, () => console.log(`Server Listening On Port Number ${PORT}`));