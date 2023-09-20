const express= require('express')
const router= express.Router();
const {getAllTasks, getTask, createTask,updateTask, deleteTask} = require('../controllers/tasks');

const app= express()

router.route('/').get(getAllTasks).get(getTask).post(createTask)



router.route('/:id').get(getTask).patch(createTask).delete(deleteTask)




module.exports = router


