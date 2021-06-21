const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const port = process.env.PORT || 1590

app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pj5oa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const servicesCollection = client.db(process.env.DB_NAME).collection("services");

  app.get('/services', (req, res) => { 
    servicesCollection.find()
    .toArray((err, items) => {
      // console.log(items)
      res.send(items)
    })
  })
  
  app.post('/addServices', (req, res) => {
    const newService = req.body;
    servicesCollection.insertOne(newService)
    .then(result => {
        console.log(result.insertedCount);
        res.send(result.insertedCount > 0);
    })
})
//   client.close();
});

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })