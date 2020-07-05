const mongoose = require ('mongoose') //npm install mongoose
const configureDB = ()=>{
// connect to database
mongoose.connect ('mongodb://localhost:27017/jan-db', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
  })
.then(()=>{
    console.log ('connect to db')
})
  .catch((err)=>{
      console.log('err', err)
  })
}

module.exports = configureDB