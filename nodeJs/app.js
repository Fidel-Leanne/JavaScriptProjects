const { readFile, writeFile } = require('fs');
const http = require('http');

// Create a new file
const filename = './content/first.txt';
writeFile(filename, 'hello its fidel', err => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log(`File ${filename} has been created!`);
});

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const server = http.createServer(async (req, res) => {
    console.log('request event');
    try {
        const text = await getText('./content/second.txt');
        res.end(text);
    } catch (err) {
        res.end('Error reading file.');
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
