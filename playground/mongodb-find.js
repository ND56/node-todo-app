const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server.`, err)
  }

  console.log(`Connected to MongoDB server`)
  const db = client.db('TodoApp')

  // ************************ GET ALL / INDEX QUERY ************************
  // ***********************************************************************
  db.collection('Todos').find().toArray().then((docs) => {
    console.log(`*** All To-Dos ***`)
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log(`Unable to fetch todos`, err)
  })

  // ************************ GET BY PROPERTY / SELECT QUERY ***************
  // ***********************************************************************
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log(`*** Only Non-Completed To-Dos ***`)
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log(`Unable to fetch todos`, err)
  })

  db.collection('Users').find({ name: 'Nick' }).toArray().then((docs) => {
    console.log(`*** Users named "Nick" ***`)
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log(`Unable to fetch users`, err)
  })

  // ************************ GET BY ID / SELECT QUERY *********************
  // ***********************************************************************
  db.collection('Todos').find({
    _id: new ObjectID('5b104051935e14f66be45d6a')
  }).toArray().then((docs) => {
    console.log(`*** Search by ObjectID ***`)
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log(`Unable to fetch todos`, err)
  })

  // ************* ANOTHER CURSOR METHOD: PRINTING DOC COUNT ***************
  // ***********************************************************************
  db.collection('Todos').find().count().then((count) => {
    console.log(`*** Counting Docs ***`)
    console.log(`To-Dos: ${count}`)
  }, (err) => {
    console.log(`Unable to fetch todos`, err)
  })

  client.close()
})
