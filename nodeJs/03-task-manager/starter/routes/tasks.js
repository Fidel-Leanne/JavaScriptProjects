const express= require('express')
const router= express.Router();

const app= express()

router.route('/').get((req,res)=>{
   res.send('Welcome') 
})


module.exports = router


