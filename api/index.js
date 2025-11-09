const server = require('express');

const app = express()

app.use((req,res,next)=>{ // logger
    console.log(`client request >> ${req.url} , ${req.method}`)
    next()
})

app.get('/',(req,res)=>{
  res.redirect('http://google.com')
})

module.exports =  app;