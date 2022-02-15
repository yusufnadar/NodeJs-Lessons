const http = require('http');
const fs = require('fs');

const _ = require('lodash');

//console.log(_.random(0,50));

/* const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.write('merhabaaaa');
    let path = './index.html';
 
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err); 
        }else{
            res.write(data); 
        } 
        res.end();
    });

});

server.listen(3000,'127.0.0.1',()=>{
    console.log('3000 çalışıyor');
}); */





/* npm init -y ile package.json geliyor
npm i -library ile node_modules geliyor
npm i -g library ile de node_modulese gerek olmadan paket genel olarak algılanıyor */