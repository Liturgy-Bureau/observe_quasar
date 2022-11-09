const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require("mongodb");

conn = new MongoClient("mongodb+srv://litworker:litworker369@clusterobs.gf9vf.mongodb.net/?retryWrites=true&w=majority");
db = conn.members;




app.get('/auth', (req, res) => {
  res.send('Auth Server')
})

app.listen(port, () => {
  console.log(`Auth Server listening on port ${port}`)
})
