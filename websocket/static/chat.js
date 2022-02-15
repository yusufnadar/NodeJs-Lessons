var socket = io.connect('http://localhost:3000/');

var mesaj = document.querySelector('#message');
var baslik = document.querySelector('#handle');
var btn = document.querySelector('#send');
var output = document.querySelector('#output');
var feedback = document.querySelector('#feedback');


btn.addEventListener('click',(e)=>{
    socket.emit('chat',{
        mesaj:mesaj.value,
        baslik:baslik.value
    });
    mesaj.value = '';
});

mesaj.addEventListener('keypress',function(){
    socket.emit('yaziyor',baslik.value);
});

socket.on('chat2',function(data){
    output.innerHTML += `<p><strong>${data.baslik}: </strong>${data.mesaj}</p>`
    feedback.innerHTML = '';
}); 

socket.on('yaziyor',function(data){
feedback.innerHTML = `<p><em>${data} yazıyorr</em></p>`;
});