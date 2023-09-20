const express= require('express')

const app = express

const getAllTasks= (req, res) =>{
    res.send('all tasks')
}

const getTask= (req, res) =>{
    res.json({id: req.params})
}

const createTask= (req, res) =>{
    res.json(req.body)
}

const updateTask= (req, res) =>{
    res.send('update task')
}

const deleteTask= (req, res) =>{
    res.send('delete task')
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
    
}