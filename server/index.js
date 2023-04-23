import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
const app = express();
// const DbConnect = require('./database');
import DbConnect from './database.js'
import morgan from 'morgan';
// import { default: helmet } from 'helmet';
// const router = require('./routes');
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 3001;

app.use(express.json());
// app.use(helmet());
app.use(morgan('common'));
app.use(cookieParser());

const corsOptions = {
    credentials: true,
    origin: [ 'http://127.0.0.1:5173/' ],
};
app.use(cors(corsOptions));

DbConnect();
app.use("/api/auth", authRouter);

app.get('/', (req, res) => {
    res.send(`server is running on ${ PORT }!`);
});


app.listen(PORT, () => {
    console.log(`server is running on ${ PORT }`);
});