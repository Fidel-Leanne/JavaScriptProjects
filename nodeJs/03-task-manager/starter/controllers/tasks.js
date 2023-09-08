const getAllTasks=(req,res)=>{
    res.send('all items from the file')
}

const createTasks=(req,res)=>{
    res.json(req.body)
}

const getTask=(req,res)=>{
    res.send('all items from the file')
}
const updateTask=(req,res)=>{
    res.send('all items from the file')
}
const deleteTask=(req,res)=>{
    res.send('all items from the file')
}



module.exports={
    getAllTasks,
    getTask,
    updateTask ,
    createTasks,
    deleteTask
}