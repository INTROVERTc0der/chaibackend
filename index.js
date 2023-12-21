require('dotenv').config()
const express = require('express')
//import express from "express"  // 1 and 2 line are doing same things in different way 
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('welcome to twitter')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
//if we add a new .get or we can se new request function or new url route then we have to restart and again execute the "npm run start" 
//to solve this problem we use node mon

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})