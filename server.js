const express = require('express');
const methodOverride = require('method-override');
const app = express();

//require('./db.connection')
//app.use(express.static('public'))
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')

//controller setup

app.get('/bravado', (req, res) =>{
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    res.redirect('/bravado')
})

app.listen(4000, () => {
  console.log(`listening on port: 4000`)
});