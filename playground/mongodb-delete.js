const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server.`, err)
  }

  console.log(`Connected to MongoDB server`)
  const db = client.db('TodoApp')

  // deleteMany
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result)
    // printed a ton of info, including a result object that indicated how many
    // were deleted: result: { n: 3, ok: 1 }
  })

  // deleteOne - works the same, except deletes the first item it sees matching
  // and then it stops
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result)
    // result: { n: 1, ok: 1 }
  })

  // findOneAndDelete - lets you delete and also return individual object so you
  // can tell the user which one you deleted
  db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    console.log(doc)
  })

  // challenge: use deleteMany to target a cple at the same time
  // use findOneAndDelete; delete it by ID
  db.collection('Users').deleteMany({location: 'Medford, MA'}).then((result) => {
    console.log(result)
  })

  // delete by ID
  // 5b114984a5eb8a80610ed552
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b114984a5eb8a80610ed552')
  }).then((doc) => {
    console.log(doc)
  })

  // client.close()
})
