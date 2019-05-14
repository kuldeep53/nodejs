// const helper=require('./helpers');
// const total = helper.sum(5,4);
/**
 * instead of using whole object file
 * we can use object destructing
 */
// const {sum}=require('./helpers');
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end('hello world from node js just updated');
// });
// server.listen(3000);
// const total =sum(5,4);
// console.log(total);
/**
 * we can make this happen this whole process using the express
 */
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello i am doing done this using express js');
// });
// app.listen(3000);
/**
 * now get to know about event loop in node js
 * and get to know the working of asynchronous programming
 */
// const fs=require('fs');
// const filename='test.text';
// fs.watch(filename, () => console.log(`file changed`));
// // fs.readFile(filename,(err,data)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log(data.toString());
// // });
/**
 * above code represent the working of async programming
 * and now we are doing this same part using the
 * sync programming
 */
// const data=fs.readFileSync(filename);
// console.log(data.toString());
// console.log('node js async programming');
const express = require('express');
const morgan = require('morgan'); //this is a middleware
const dotenv=require('dotenv');
const mongoose=require('mongoose');

const postRoutes = require('./routes/post');
const app = express();
dotenv.config();
// const port = 3000;
/**
 * now we will fetch this port number using
 */
const port=process.env.PORT||3000;
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true})
    .then(()=>console.log('DATABASE Connection setup done'))

mongoose.connection.on('error',err=>{
   console.log(`Database connection Error: ${err.message}`);
});
// const middleware=(req,res,next)=>{
//   console.log('this is middleware');
//   next();
// };
// app.use(middleware);
app.use(morgan('dev'));
/**
 * here this middleware function run in middle so that
 * sometime we need to run something in middle
 */
app.use('/', postRoutes);
app.listen(port, () => {
    console.log(`this app listening on port number ${port}`);
});