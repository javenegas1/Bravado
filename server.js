const express = require('express');
const methodOverride = require('method-override');
const app = express();

require('./db.connection')
//app.use(express.static('public'))
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')
app.use('/public', express.static('public'));
//controller setup
const mainController = require('./controllers/main_controller')
app.use('/bravado', mainController)

app.get('/bravado', (req, res) =>{
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    res.redirect('/bravado')
})

app.listen(4000, () => {
  console.log(`listening on port: 4000`)
});