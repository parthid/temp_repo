const call_print = require("./utils");
const os = require('os');
const path = require('path');
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');
const http = require('http');
// console.log(os.userInfo());
// console.log(os.freemem());
// console.log(os.uptime());
// call_print.call_print();
// print();
// console.log(__dirname);
// console.log(__filename);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS);
// console.log(path.sep);

// const filePath = path.join('\\NODE JS', '\\test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// 

// const first = readFileSync('test.txt','utf8');
// const second = readFileSync('test1.txt','utf8');
// console.log(first,second);
// writeFileSync('result-sync-test.txt',`HI hi Hi !!!!!!!!!`,{flag:'a'});

// readFile('test.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     console.log(first);
//     readFile('test1.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         console.log(second);
//         writeFile('result-async-test.txt', `${first} ${second}`, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         });
//     })
// })


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("WELCOME TO HOME PAGE :D");
//     }
//     // res.write('WELCOME TO HOME PAGE');
//     // res.end();
//     else if (req.url === '/about') {
//         res.end("WELCOME TO ABOUT PAGE");
//     }
//     else {
//         res.end(`
//         <h1>Opps!</h1>
//         <p>We can't find the page your looking for</p>
//         <a href="/">BACK HOME</a>
//     `)
//     }
// });

// server.listen(4300);

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("HELLO PEOPLE!!! :DP");