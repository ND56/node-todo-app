// ******************** CONFIGURE MONGOOSE ****************************
// ********************************************************************
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp')

// ******************** NOW CREATE A MODEL ****************************
// ********************************************************************
const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

// ******************** ADDING A DOCUMENT *****************************
// ********************************************************************
const newTodo = new Todo({
  text: 'Feed Sora',
  completed: false,
  completedAt: 0
})

newTodo.save().then((doc) => {
  console.log(`Saved Todo`, doc)
}, (err) => {
  console.log(`Unable to save Todo`, err)
})
