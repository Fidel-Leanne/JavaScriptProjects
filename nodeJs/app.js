const {readFile, writeFile}= require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{

    if(err){
        console.log("Error", err)  // Error: ENOENT: no such file or directory, open './content/first.txt'
        return 
    }
  console.log(result)  
    
})
writeFile('')