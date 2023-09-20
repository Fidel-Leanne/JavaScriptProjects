const port= 3000
const express= require('express')
const app= express()
const tasks= require('./routes/tasks')

//MIDDLEWARE
app.use(express.json())


app.get('/hello',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/v1/tasks', tasks)

app.listen(port,()=>{
    
    console.log(`Server is running on port ${port}`)
})

