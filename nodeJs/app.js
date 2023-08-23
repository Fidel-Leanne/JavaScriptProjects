const {readFile, writeFile}= require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{

    if(err){
        console.log("Error", err)  // Error: ENOENT: no such file or directory, open './content/first.txt'
        return 
    }
  console.log(result)  
    
})


writeFile("./content/second.txt",
"Hello World! its fidel", "utf-8" ,(err,result )=>{
  if (err){
    console.log("error", err)
  }
  console.log(result)
  } );


readFile('./content/second.txt', 
    'utf8',(err, result)=>{
      if(err ){
        console.log("No content")
        return
        }
          console.log(`Content is ${result}`)
          
    } )



