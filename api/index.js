const express = require('express');

// dev time .env
require('dotenv').config()

const app = express()

const url = process.env.REDIRECT_URL

app.use((req,res,next)=>{ // logger
    console.log(`client request >> ${req.url} , ${req.method}`)
    next()
})

app.get('/api',(req,res)=>{
  res.redirect(url)
})


app.listen(8080)
// module.exports =  app;