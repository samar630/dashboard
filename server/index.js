import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import products  from './routes/products.js';
import categories from './routes/categories.js';
import user from './routes/user.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
import { authJwt } from './helper/jwt.js';
import errorHandler from './helper/error-handler.js';
import  morgan from 'morgan';
const app = express();
dotenv.config();
app.use(authJwt());
app.use(errorHandler);
app.use(morgan('tiny'));
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.options('*', cors())
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

app.get("/",function (req, res) {
  res.sendFile(__dirname + "/public/uploads")
});

app.use('/products', products);
app.use('/categories', categories);
app.use('/user', user);
app.use(express.static('/public/uploads'))
const CONNECTION_URL = `mongodb+srv://samarkaddour:samarkaddour@cluster0.zra5rcv.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
} ).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

