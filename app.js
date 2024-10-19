
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(blogRoutes);

const port = 8080;


app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})

