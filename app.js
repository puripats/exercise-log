const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const user = require('./routes/user.route');
const exercise = require('./routes/exercise.route');


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/exercise-log', {useNewUrlParser: true,useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(bodyParser.json());
app.use('/api/exercise', user);
app.use('/api/exercise', exercise);


app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))