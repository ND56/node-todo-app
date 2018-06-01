const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server.`, err)
  }

  console.log(`Connected to MongoDB server`)
  const db = client.db('TodoApp')

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b1147aba5eb8a80610ed420')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((doc) => {
    console.log(doc)
  })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b10482b71846dda29ba84da')
  }, {
    $set: { name: 'Claire', location: 'Malden' },
    $inc: { age: 43 }
  }, {
    returnOriginal: false
  }).then(doc => console.log(doc))

  client.close()
})
