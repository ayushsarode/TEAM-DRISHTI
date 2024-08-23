const express = require('express');
const mongoose = require('mongoose');




const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect("mongodb://localhost:27017/studynest").then(() => {
    console.log("Connected to MongoDB succesfully")
}).catch((err) => {
    console.log(err);
})

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server is running at http://localhost:8001`))
