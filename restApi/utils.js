const fs = require('fs');

function writeFile(fileName,data){
    fs.writeFileSync(fileName,JSON.stringify(data),'utf-8',(err)=>{
        if(err){
            console.log(err);
        }
    });
}

function getPostData(req,res){
    return new Promise((resolve,reject)=>{
        try{
            console.log('burada');
            let body = '';
            req.on('data',(chunk)=>{
                console.log(chunk.toString());
                body+=chunk.toString();
                console.log(body);
            });
            req.on('end',()=>{
                resolve(body);
            });
        }catch(e){
            console.log(e);
        }
    })
}

module.exports = {
    writeFile,
    getPostData
}