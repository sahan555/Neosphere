const connectDB = require('./config/db');
const express = require('express');
const app = express();
const port = 3000;

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');

app.use(express.json());
connectDB();
app.use(userRoute);
app.use(productRoute);

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})
