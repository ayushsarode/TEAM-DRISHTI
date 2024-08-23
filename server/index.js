const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/userRoute');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);






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
