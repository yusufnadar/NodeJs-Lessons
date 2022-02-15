const users = require('../data/user.json');
const {v4:uuidv4} = require('uuid');
const files = require('../utils');

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(users);
    });
}

function findById(id){
    const user = users.find((user) => user.id === id);
    return user;
}

function createUser(user){
    const a = {id:uuidv4(),isim:user.isim};
    users.push(a);
    files.writeFile('./data/user.json',users);
    return a;
}

function updateUser(id,user){
    const index = users.findIndex((item)=>item.id === id);
    users[index] = {id,'isim':user.isim};
    files.writeFile('./data/user.json',users);
    return users;
}

function deleteUser(id){
    return new Promise((resolve,reject)=>{
        const newUsers = users.filter((item)=>item.id !==id);
        files.writeFile('./data/user.json',newUsers);
        resolve();
    })
}

module.exports ={
    findAll,
    findById,
    createUser,
    updateUser,
    deleteUser
}