const path = require("path");
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const db = require('./config/db');
const route = require('./routes');
const app = express();
const port = 3001;
db.connect();
//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.use(morgan('combined'));

//template engine
app.engine('.hbs', engine({extname: '.hbs'}) );
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});