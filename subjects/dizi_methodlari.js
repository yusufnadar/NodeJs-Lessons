const notlar = [1, 23, 4, 5, 64];
const ogrenciler = ['yusuf', 'fırat', 'buse', 'oykü', 'ali'];
const nesneler = [
    {ad:'yusuf',yas:42},
    {ad:'mert',yas:32},
    {ad:'simge',yas:45},
    {ad:'kerim',yas:10},
];

let yuksekNotlar;
let dusukNotlar;

// değeri döndürür
yuksekNotlar = notlar.filter((not) => {
    return not > 10;
});

// true false döndürür
dusukNotlar = notlar.map((not) => {
    return not > 1;
});

// ilk elemanı ve diğerlerini ayrı ayrı ele alıyor, 0 ilk eleman olarak atadık
var toplam = notlar.reduce((first, others) => {
    // return yaptığımız değer first yerine geçiyor
    first += others;
    return first;
}, 0);

// bu şartta bulduğu ilk elemanı döndürüyor
var deger = notlar.find((item) => {
    return item > 1;
});


/* console.log(ogrenciler.sort());
console.log(ogrenciler.reverse());
console.log(notlar.sort());
console.log(notlar.reverse()); */

// yaşlara göre büyükten küçüğe sıralama
nesneler.sort((ikinci,ilk)=>{
    return ilk.yas > ikinci.yas;
});
console.log(nesneler);

/* console.log(yuksekNotlar);
console.log(dusukNotlar);
console.log(deger); */
//console.log(toplam);