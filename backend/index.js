const express = require('express');
const cors = require('express');
const expressOasGenerator = require('express-oas-generator');
const { dbConnection } = require('./db/db');
require('dotenv').config();
//routes
const Role = require('./routes/role');

const app = express();
expressOasGenerator.init(app, {});

app.use(express.json());
app.use(cors());

app.use('/role', Role);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

dbConnection();