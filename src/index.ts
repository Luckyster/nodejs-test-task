import { config } from 'dotenv';
config();

import express from 'express';
import mongoose from 'mongoose';
import init from './modules';

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || '';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('uploads'));

init(app);

mongoose.connect(
  DB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  function (err) {
    if (err) return console.log(err);
    app.listen(PORT, () => console.log(`Server is starting on ${PORT} port`));
  }
);
