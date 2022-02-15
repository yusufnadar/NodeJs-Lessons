const http = require('http');
const users = require('./controller/user_controller');
const server = http.createServer((req, res) => {

    /* res.setHeader('Content-Type','text/html');
    res.write('Selam');
    res.end(); */

    //res.writeHead(200,{'Content-Type':'text/html'});

    /*  res.writeHead(200,{'Content-Type':'application/json'});
     res.end(JSON.stringify(kullanicilar)); */
     var deger = req.url;
    if (req.url === '/api/users' && req.method === 'GET') {
        users.getUsers(req,res);
    }else if(req.url.match(/\/api|user\/([0,9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        users.findById(req,res,id);
    } else if(req.url='/api/user' && req.method === 'POST'){
        users.createUser(req,res);
    } else if(deger.match(/\/api|user\/([0,9]+)/) && req.method === 'PUT'){
        const id = deger.split('/')[3];
        users.updateUser(req,res,id);
    }else if(deger.match(/\/api|user\/([0,9]+)/) && req.method === 'DELETE'){
        const id = deger.split('/')[3];
        users.deleteUser(req,res,id);
    }
    else{
        res.end('işlem başarısız');
    }
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`server ${port} ile çalışıyor`));