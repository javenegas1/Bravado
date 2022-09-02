const express = require('express');
const methodOverride = require('method-override');
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
// const bootstrap = require('bootstrap')
require('./db.connection')
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')
app.use('/public', express.static('public'));

const quotes = [
    {quote:`Be yourself; everyone else is already taken.`, speaker: `Oscar Wilde`},
    {quote:`Be the change that you wish to see in the world.`, speaker: `Mahatma Gandhi`},
    {quote:`There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`, speaker: `Albert Einstein`},
    {quote:`I have not failed. I've just found 10,000 ways that won't work.`, speaker: `Thomas Edison`},
    {quote:`There is no greater agony than bearing an untold story inside you.`, speaker: `Maya Angelou`},
    ];

//create session
app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGO_KEY }),
        // 'secret' key for signing cookies
        secret: "secretly stealing cookies",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 1
        },
    })
);

//passes user information
app.use(function (req, res, next) {
    res.locals.user = req.session.thisUser;
    //console.log(res.locals.user)
    next();
  });

//for users with account setup
const userController = require('./controllers/user_controller')
app.use('/bravado', userController)

//controller setup for CRUD
const mainController = require('./controllers/main_controller')
app.use('/bravado', mainController)

app.get('/bravado', (req, res) =>{
    res.render('index.ejs', {quotes: quotes})
    console.log(req.session.thisUser)
})

app.get('/', (req, res) => {
    res.redirect('/bravado')
})

// app.listen(4000, () => {
//   console.log(`listening on port: 4000`)
// });

app.listen(process.env.PORT || 4000);