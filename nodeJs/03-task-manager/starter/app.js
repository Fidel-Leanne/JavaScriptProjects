const express= require('express')
const app = express()
const tasks= require('./routes/tasks')
const port= 5000


//middleware
app.use(express.json()) // to parse the body of a request as json, it is used for POST and PUT requests


app.get('/hello', (req, res)=>{
    res.send("Hello World")
})

app.use('/api/v1/tasks', tasks)



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})