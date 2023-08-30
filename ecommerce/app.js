const connectDB = require('./config/db');
const express = require('express');
const userRoute = require('./routes/userRoute');
const port = 3000;
const app = express();

app.use(express.json());
connectDB();
app.use(userRoute);

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})
