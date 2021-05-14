const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const cors = require('cors');
const mongoose = require('mongoose');
const restaurants = require('./routes/restaurants');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurants', restaurants);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

//MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log('DB is connected!!'))
  .catch((err) => console.log(err));

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
