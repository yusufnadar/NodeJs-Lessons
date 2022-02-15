const fs = require('fs');

// klasörü okuma
fs.readFile('./files/test.txt',(err,data)=> {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

// klasörün oluşturma ve içine yazı yazma
fs.writeFile('./files/test.txt','bilgiler',()=>{
    console.log('dosya oluşturuldu');
});

// dosya oluşturma
fs.mkdir('./files2',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('dosya oluştu');
    }
});


// dosya silme
fs.rmdir('./files2',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('dosya silindi');
    }
});

// klasör silme
fs.unlink('./files/test.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('klasör başarıyla silindi');
    }
})

// dosya ya da klasör var mı kontrolü
console.log(!fs.existsSync('./files2'));