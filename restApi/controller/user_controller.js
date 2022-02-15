const User = require('../model/user_model');
const { getPostData } = require('../utils');

async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (e) {
        console.log(e);
    }
}

async function findById(req, res, id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end('Kullanıcı Yok');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }
    } catch (e) {
        console.log(e);
    }
}

async function createUser(req, res) {
    try {
        const body = await getPostData(req);
        const { isim } = JSON.parse(body);
        const user = {
            isim
        }
        const newUser = await User.createUser(user);
        console.log('here');
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
    } catch (e) {
        console.log(e);
    }
}

async function updateUser(req, res,id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end('Kullanıcı Yok');
        } else {
            const body = await getPostData(req);
            const { isim } = JSON.parse(body);
            const newUser = {
                isim:isim || user.isim
            }
            const updateUser = await User.updateUser(id,newUser);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updateUser));
        }
    } catch (e) {
        console.log(e);
    }
}
async function deleteUser(req, res,id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end('Kullanıcı Yok');
        } else {
            await User.deleteUser(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({message:`User Id = ${id} deleted`}));
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getUsers,
    findById,
    createUser,
    updateUser,
    deleteUser
}