// var ile tanımladığımız şeyi tekrar tanımlayabiliriz ve her yerde kullanabiliriz
// let ile tanımladığımız şeyi bir daha tanımlayamaz ve sınıf içinde kullanabiliriz
// const ile tanımladığımız şeyi bir daha tanımlayamaz hatta değiştiremez ve sınıf içinde kullanabiliriz
// const name = 'yusuf'; console.log(name.slice(1,3)); == ekrana 'us' yazdırıyor 
// console.log(name.substr(1,3)); = 1.indexten başlayıp devamındaki 2 karakteri alıyor == 'usu'
// name.replace('y','Y'); == gördüğü ilk küçük y yi büyük y yapıyor
//dizi = [1]; dizi.concat([10,20]); == iki diziyi birleştiriyor ve == [1,10,20] oluyor
//dizi.push('10'); == diziye yeni bir eleman ekler
//dizi.splice(2,2) == 2.indexten başla ve 2 tane eleman sil
// dizi.pop() == dizideki son elemanı çıkartır
// dizi.shift() == dizideki ilk elemanı çıkartır
// dizi.unshift('yusuf') == dizinin başına eleman ekler
// name.includes('y') == true döner
// let sayi = 4; let sonuc = sayi==30; console.log(sonuc); == if kontrolü oluyor ve true ya da false dönüyor
// let degisken = '10' Number(degisken) == türü artık integer oldu
// let degisken = 10; String(degisken) == türü artık string oldu
// log(typeof degisken) == degiskenin tipini yazdırıyor
/* declaration == bu kısım çalışır önce tanımlansa bile
sayiYaz();
function sayiYaz(){
    console.log(30);
}
expression == bu kısım çalışmaz önce tanımlandığı için
yaziYaz();
const yaziYaz = function(){
    console.log('ses');
} */
/*
foksiyonu isteğe bağlı girdiğimiz zaman {} bunları kullanıyoruz 
const fonk = function({sayi:sayi}){
    console.log('sayı bu ' +sayi );
}
fonk({sayi:5}) */

// const alanhesapla = function(){return 10;}
// console.log(alanhesapla); fonksiyonu döndürür
// console.log(alanhesapla()); fonksiyonun return kısmını döndürür
// var alanhesapla = (f,g)=>f*g; eğer başına function yazmayacaksak sonrasına => ifadesi kullanırız
// alanhesapla();
// var alanhesapla = f=>f*2 tek bir parametre geliyorsa parantez kullanmayabiliriz

// var dizi = [1,2,3];
// dizi.forEach((item,index)=>{console.log(item,index);})

// const aa = document.querySelector('.classErisim');
// const bb = document.querySelector('#idErisim');

// aa.innerHTML = '<b>selam</b>' html koduna erişir ve html kodunu algılar
// bb.innerText = '<b>selam</b>' sadece yazıyı alır ve html kodunu algılamaz
// console.log(aa); elementin kendisini verir

/* var ul = document.querySelector('.insanlar');
var dizi = ['ali','faruk'];
dizi.forEach((item)=>{
    ul.innerHTML += `<li>${item}</li>`;
    //diziye eleman ekleme
}) */

/* let ogrenci = {
    isim:'yusuf',
    yas:30,
    bisiYap:function(){
        console.log('bişi yapiliyor');
    },
    bisiYap2(){
        console.log('bişi yapiliyor2 '+this.yas);
    }
};
// this nesne içerisindeki verilere erişmemizi sağlıyor
console.log(ogrenci);
console.log(ogrenci.isim);
console.log(ogrenci['yas']);
ogrenci.bisiYap();
ogrenci.bisiYap2(); */

// Math.PI; pi sayısını gösterir
// Math.round(4.5); en yakın sayıya yuvarlar
// Math.floor(4.5); aşağıdaki sayıya yuvarlar
// Math.floor(4.5); yukarıdaki sayıya yuvarlar
// Math.trunc(4.5); noktadan sonraki değeri yok sayar
// Math.pow(3,2); 3 ün karesini alıyor
// Math.sqrt(64) karekökünü alır
// Math.min(1,2,3) min değeri bulur
// Math.max(1,2,3) max değeri bulur
// var random = Math.random() random sayı oluşturur
// Math.round((random*100)+10); 10 ile 110 arasında random sayı oluşturur

// Primitive tipler stack alanında tutulur örnek olarak => number, string, boolean, null, undefined
// Reference tipler heap alanında tutulur örnek olarak => object, array, function, date
/* let deger1={name:'yusuf'};
let deger2 = deger1;
deger1.name = 'aa';
console.log(deger2.name); deger1 deki değişiklikten deger2 de etkilenir */

//nesnelere erişme
/* const ad = document.querySelector('.ad');
// . koyarak classa erişim sağlıyoruz

const yas2 = document.querySelector('#yas');
// # koyarak idye erişim sağlıyoruz

const kurslar = document.querySelectorAll('.nesne');
kurslar.forEach(function(kurs){console.log(kurs);});
// queryselectorall ile birden fazla aynı türdekileri çağırabiliriz ve foreach dönebiliriz

const yas = document.getElementById('yas');
console.log(yas);
// sadece id girebiliyoruz getelementbyid ile

const pler = document.getElementsByTagName('p');
console.log(pler[0]);
// birden fazla tag name'i p olanı çağırabiliriz ama foreach kullanılmıyor

const nesne = document.getElementsByClassName('nesne');
console.log(nesne[0]);
// birden fazla class name'i nesne olanı çağırabiliriz ama foreach kullanılmıyor */

//nesneleri değiştirme

/* const ad = document.querySelector('.ad');
ad.innerText = 'yusuf';
// innerText ile içerisindeki yazıya erişip değiştirebiliyoruz

const content = document.querySelector('.content');
content.innerHTML = 'Üyelik Tarihi <b>30 Haziran</b>';
// innerHTML diyince içerisindeki yazıya erişiyoruz ve html kodunu algılıyor

let kurslar = ['Java','Kotlin'];
const ul = document.querySelector('#liste');
kurslar.forEach(element => ul.innerHTML += `<li>${element}</li>`);
// listeye eleman ekleyeceğimiz zaman böyle ekliyoruz */

// attribute kısmı

/* const nesne = document.querySelector('.nesne');
// Attribute elementteki id,class,style olarak geçiyor 
nesne.setAttribute('class','kullanici'); // burada classın adını değiştirdik

const kursTitle = document.querySelector('.kurslar');
kursTitle.setAttribute('style','color:blue');
// tek bir değerin rengini değiştirdik

const listem = document.querySelectorAll('li');
listem.forEach(function(item){item.setAttribute('style','color:purple');});
// liste içerisinde bulunan değerlerin rengini değiştirdik */

//style özelliği ile css erişimi
/* const content = document.querySelector('.content');
content.style.border = '2px solid #eeeeee';

const baslik = document.querySelector('.nesne');
baslik.style.marginLeft = '100px';
baslik.style.fontSize = '40px';

const list = document.querySelectorAll('li');
list.forEach(function (item) {
    let rast1 = Math.round(Math.random() * 255);
    let rast2 = Math.round(Math.random() * 255);
    let rast3 = Math.round(Math.random() * 255);
    item.style.color = `rgb(${rast1},${rast2},${rast3})`;
}); */

/* const baslik = document.querySelector('h1');

 baslik.classList.add('app');
 //classa ekleme yapıyor

 baslik.classList.remove('app');
 //classdan çıkarma yapıyor

 baslik.classList.toggle('deneme');
 //classda varsa çıkarıyor yoksa ekliyor */

/* const list = document.querySelectorAll('li');

list.forEach(function (item) {
    if(item.textContent.includes('udemy')) item.classList.add('udemy');
    else item.classList.add('youtube');
}); */
// textContent kullandığımız zaman içerisinde display none olan veriler de gözükür


































