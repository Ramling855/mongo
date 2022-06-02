const express = require('express');
const app = express();
app.set('view engine', 'hbs');
// app.set("views");
app.get('/', (req, res) => {
  res.render('form');
});

app.listen(4000, () => console.log('server connected'));
