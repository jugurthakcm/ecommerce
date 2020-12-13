require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

mongoose
  .connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Connected to ${PORT}`));
