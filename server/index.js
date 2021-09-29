const express = require('express')
const app = express()
const massive = require("massive");
const resultCtrl = require('./resultsController')
require("dotenv").config();
const usersCtrl = require('./usersController')
const session = require('express-session')

const {PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;



app.use(express.json());
app.use(
  session({
      resave: false,
      saveUninitialized: true,
      secret: SESSION_SECRET,
      cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
)
app.use(express.static(`${__dirname}../client/build`)) //serving our build folder
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get('/results/:user_id', resultCtrl.getResultsById)
app.post('/results/add', resultCtrl.addResultsById)
app.put('/results/edit/:id', resultCtrl.editResultsById)
app.delete('/results/:id', resultCtrl.deleteResultsById)
//app.put to update desired bodyfat on users table 

//Log in authentication
app.post('/users/register', usersCtrl.addUser)
app.get('/users/:id', usersCtrl.getUserById)
//app.put for gender after clicking on male or female buttons on homepage component 
app.put('/users/gender', usersCtrl.updateGender)
//app.post for log in
app.post('/users/login', usersCtrl.getLogIn)
//app.get for session
// app.get('/users/session', usersCtrl.getSession)
//app.delete for session



massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  }).then((db) => {
    app.set("db", db);
    console.log("db ready!");

    app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`));
  });



