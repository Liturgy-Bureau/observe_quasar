const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is not set.");
  process.exit(1);
}

conn = new MongoClient(process.env.MONGODB_URI);
db = conn.members;




app.get('/auth', (req, res) => {
  res.send('Auth Server')
})

app.listen(port, () => {
  console.log(`Auth Server listening on port ${port}`)
})
