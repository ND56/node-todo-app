const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server.`, err)
  }

  console.log(`Connected to MongoDB server`)
  const db = client.db('TodoApp')

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result)
  })

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result)
  })

  db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    console.log(doc)
  })

  db.collection('Users').deleteMany({location: 'Medford, MA'}).then((result) => {
    console.log(result)
  })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b114984a5eb8a80610ed552')
  }).then((doc) => {
    console.log(doc)
  })

  client.close()
})
