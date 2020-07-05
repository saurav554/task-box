const express = require ('express') // npm install express
const app= express ()
const configureDB = require('./config/database')
const router = require('./config/routes')
const port=3050 
app.use (express.json())

app.use(function(req,res,next){  //application middleware use // #login prospectus#
    console.log(`${req.ip}-${req.method}-${new Date()}-${req.url}-${JSON.stringify(req.body)}`)
    next()
})
app.use('/', router)
configureDB()
            
app.listen (port,()=>{
    console.log ('listening on port', port)

})
    