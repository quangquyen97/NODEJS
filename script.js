// import { title, getTitle } from "./index.js";

const {title, getTitle} = require ('./index')


getTitle();



// ES module
// commonjs module

// __dirname: trả về đường dẫn hiện tại của file đang chạy
//? process.cwd()
//? process: đối tượng lưu trữ những giá trị của môi trường node 
console.log(process.cwd())



//! FIle systems

const fs = require('fs');

// tạo file 
fs.writeFile('text.txt', 'Hello Nodejs', () => { 
console.log('đã tạo file')
 })

//  fs.writeFileSync
// đọc file
fs.readFile(`text.txt`,`utf8`,(err,data) => { 
        console.log(data)
 })


// xem quyền file

fs.access(`text.txt`,fs.constants.W_OK,(err) => { 
    //err => true, 
    if(err){
        console.log('file not write')

    }else{
        fs.writeFile('text.txt', 'Hello', () => { 
            console.log('đã ghi đè file')
             })
            
    }
 })