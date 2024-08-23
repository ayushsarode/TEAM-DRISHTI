const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/userRoute');

const { checkForAuthenticationCookie } = require('./middleware/authentication');
const cookieParser = require('cookie-parser');

const app = express();
app.use(checkForAuthenticationCookie("token"));
app.use(cookieParser());

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);





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
