import express from 'express';
import getRoute from './routes.js';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(cors());
app.use(express.json());


// app.get('/',(req,res)=> {
//     res.send("default route in get method");
// })   

app.use('/api', getRoute);

app.listen(process.env.PORT,()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
})