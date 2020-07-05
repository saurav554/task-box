const mongoose = require('mongoose')
const { schema } = require('./user')
  const Schema= mongoose.Schema
  //id, title, completed, createAT, dueDate

   const taskSchema = new mongoose.Schema({
       title: {
       type: String,
       minlength: [3, 'title should more than 3 characters'],
       required: true
   },
     
      description:{
          type:String,
      },

   completed:{
       type: Boolean,
       default: false 
   },

   dueDate:{
       type: Date,
       // custom validations
       validate: {
           validator: function(value){
               return value>= new Date()
           },
           message: function(){
               return 'due date cannot be less than today'
           }
       }

   },
   createdAt:{
       type: Date,
       default: Date.now
   },
   user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
}
})

// taskSchema.pre('validate', function(next){
//     console.log('pre validation function called')
//     next()
// })

//   taskSchema.pre('save', function(next){
//       console.log('pre save function called')
//       next()
//   })

const Task= mongoose.model ('Task', taskSchema)

 module.exports = Task