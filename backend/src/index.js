const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
mongoose.set('useCreateIndex', true);

const app = express();

mongoose.connect('mongodb+srv://OMNISTACK:omnistack132@cluster0-yvari.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
