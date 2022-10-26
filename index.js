const express = require("express");
const app = express();
const path = require('path');
const { Pool } = require("pg");

const bodyParser = require('body-parser');
require('dotenv').config()

const taskController = require('./controller/controller')



app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname + '/public')))

console.log((path.join(__dirname + '/public')))




app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
        res.render('index')
    // res.send(`<h1>API Works !!!</h1>`)
});

app.listen(3000, () => {
  console.log("Serveur démarré au port 3000!");
});


