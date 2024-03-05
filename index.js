require('dotenv').config();
//Import the environment variable
const express = require('express');

// Create an instance of the express app
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send((201).json({message:"🚀🚀🚀🚀🚀"}))
})

//Import PORT from environment variable
const PORT = process.env.PORT;
//listen to the server 
app.listen(PORT, () => {
    console.log(`Server is live and running on PORT ${PORT}`)
})