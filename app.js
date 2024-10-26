
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRouter = require("./routes/api");
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust the origin to match your React app's URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

app.use('/api/contacts',apiRouter)


// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


