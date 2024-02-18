import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import products  from './routes/products.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', products);
const CONNECTION_URL = `mongodb+srv://samarkaddour:samarkaddour@cluster0.zra5rcv.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

