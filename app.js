const express = require('express');
const cors = require('cors')
const app = express();
const blogRouter= require('./router/blogRoutes')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(cors())


app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})


app.use('/blogs',blogRouter)


app.listen(5000,()=>{
    console.log('listning on port 5000')
})