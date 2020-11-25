const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const genresRoutes = require('./routes/genres.routes');
const gamesRoutes = require('./routes/games.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

/* API ENDPOINTS */
app.use('/api', genresRoutes);
app.use('/api', gamesRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({post: 'Not found'});
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
const dbURI = process.env.NODE_ENV === 'production' ? `mongodb+srv://${process.env.LOGIN_DB}:${process.env.PASSWORD_DB}@cluster0.dorur.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority` : 'mongodb://localhost:27017/onlineShop';

mongoose.connect( dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
