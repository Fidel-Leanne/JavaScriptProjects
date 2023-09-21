// const { readFile, writeFile } = require('fs');
// const http = require('http');
// const util= require('util')

// const readFilePromise= util.promisify(readFile)
// const writeFilePromise= util.promisify(writeFile)

// // Create a new file
// const filename = './content/first.txt';
// // writeFile(filename, 'hello its fidel', err => {
// //     if (err) {
// //         console.error('Error writing to file:', err);
// //         return;
// //     }
// //     console.log(`File ${filename} has been created!`);
// // });

// // const getText = (path) => {
// //     return new Promise((resolve, reject) => {
// //         readFile(path, 'utf-8', (err, data) => {
// //             if (err) {
// //                 reject(err);
// //             } else {
// //                 resolve(data);
// //             }
// //         });
// //     });
// // };


// // getText('./content/first.txt')
// // .then ((result)=>console.log(result))
// // .catch((err)=>console.log(err))

// const server = http.createServer(async (req, res) => {
//     console.log('request event');
//     try {
//        const first= await readFilePromise('./content/first.txt','utf-8' )
//        const second=await readFilePromise('./content/second.txt','utf-8')

//        console.log(first)
//        res.end(`${first} ${second}`)
        
//     } catch (err) {
//         res.end('Error reading file.');
//     }
// });

// const port = 5000;
// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`);
// });
