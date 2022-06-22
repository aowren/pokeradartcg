import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';
import pokemonApi from './routes/pokemonApi.js';
import cardDetailsApi from './routes/cardDetailsAPI.js';
import setSearchAPI from './routes/setSearchAPI.js';

import { errorHandler } from './middleware/errorMiddleware.js';

import dotenv from 'dotenv';
dotenv.config()

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = process.env.POKERADAR_DB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
})

//app.use('/cardDetailsApi', cardDetailsApi)
//app.use('/setSearchAPI', setSearchAPI);
app.use('/pokemonApi', pokemonApi);
app.use('/users', usersRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

export default app;