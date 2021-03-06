const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server.`, err)
  }

  console.log(`Connected to MongoDB server`)
  const db = client.db('TodoApp')

  db.collection('Todos').insertOne({
    text: 'Yet another thing I need to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log(`Unable to insert todo`, err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.collection('Users').insertOne({
    name: 'Kayla',
    age: 28,
    location: 'Medford, MA'
  }, (err, result) => {
    if (err) {
      return console.log(`Unable to insert user`, err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
    console.log(result.ops[0]._id.getTimestamp())
  })

  client.close()
})
