// core dep
const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const AuthRouter = require('./router/authRouter')
const LinkRouter = require('./router/linkRoutes')
const RedirectRoutes = require('./router/redirectRoutes')
// Constants
const app = express()
const PORT = config.get('port') || 5000
const mongoURI = config.get('mongoURI')

// middleware
app.use(express.json({ extended: true }))
app.use('/api/auth', AuthRouter)
app.use('/api/link', LinkRouter)
app.use('/t', RedirectRoutes)

if(process.env.NODE_ENV === 'production'){
   app.use('/', express.static(path.join(__dirname,'client','build')))

   app.get('*', (req, res) =>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   })
}

// startBackEnd
async function start(){
   try {
      await mongoose.connect(mongoURI,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      app.listen(PORT,() => console.log(`server has been started on port ${PORT}...`))
   } catch(e){
      console.log('Server Error',e.message)
      process.exit(1)
   }
}
start()
