const express = require('express');

require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(201).send(user))
    .catch(err => res.status(400).send(err));
});

app.get('/users', (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch(err => res.status(500).send(err));
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send("User didn't found");
      }

      res.send(user);
    })
    .catch(err => res.status(500).send(err));
});

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => res.status(201).send(task))
    .catch(err => res.status(400).send(err));
});

app.get('/tasks', (req, res) => {
  Task.find()
    .then((tasks) => {
      res.send(tasks);
    })
    .catch(err => res.status(500).send(err));
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;

  Task.findById(id)
    .then((task) => {
      if (!task) {
        res.status(404).send('Task not found');
      }

      res.send(task);
    })
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => console.log(`Server is up on port ${port}`));
