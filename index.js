const express = require('express');
const path=require('path')
const app = express();
app.set('view engine', 'hbs');
app.set("./views");
app.get('/', (req, res) => {
  res.render(path.resolve('form'));
});

app.listen(4000, () => console.log('server connected'));
