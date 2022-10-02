// console.log(process.argv)
// npm i yargs
const fs = require('fs')
const yargs = require('yargs')
const {hideBin} = require('yargs/helpers');
const {argv} = yargs(hideBin(process.argv));
// console.log(argv.title);

//R: Read


//addUser
//C:Create
const addUser = () => { 
    let {id,hoTen,lopHoc} = argv
    let user ={
        id,
        hoTen,
        lopHoc
    }
    
    let users = JSON.parse(fs.readFileSync('data.json','utf8'));
    users.push(user);


    fs.writeFileSync('data.json', JSON.stringify(users),() => { 
        console.log('thêm thành công')
     })
}


//Edit
//U: Update
const editUser = () => { 
    let {id,hoTen,lopHoc} = argv
    let user ={
        id,
        hoTen,
        lopHoc
    }
    
    let users = JSON.parse(fs.readFileSync('data.json','utf8'));
    users.push(user);
    let userFind = users.find(item=> item.id == id)
    if(userFind){
        userFind.hoTen = hoTen;
        userFind.lopHoc = lopHoc;
    }
    fs.writeFile('data.json', JSON.stringify(users),() => { 
        console.log('cập nhật thành công')
     })
 }

 //Delete
 //D: Delete
const reUser = () => { 
    let {id} = argv
    let user ={
        id
    }
    let users = JSON.parse(fs.readFileSync('data.json','utf8'));
    users.push(user);

    let userNew = users.filter(item=> item.id != id)
    
    fs.writeFile('data.json', JSON.stringify(userNew),() => { 
        console.log('Xóa thành công')
     })
 }

 yargs.command({
    command: 'add-user',
    handler:addUser,
}).command({
    command: 'edit-user',
    handler:editUser
}).command({
    command: 'del-user',
    handler:reUser
}).parse();


