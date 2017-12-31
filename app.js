const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


const moviesRouter = require('./routes/movies-routes');
app.use('/movies', moviesRouter)