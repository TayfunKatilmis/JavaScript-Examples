let isimler =["emre","hüseyin", "yılmaz"];
console.log(isimler.toString());
console.log(isimler.join("_"));


let diziElemaniSayisi= isimler.push("ali");
console.log(isimler+" eklenen elaman: "+diziElemaniSayisi);
let dizidenCikarilanEleman=isimler.pop();
let dizidenCikarilanElemann=isimler.pop();
console.log(isimler+ "çıkarılan eleman:"+dizidenCikarilanEleman);
console.log(isimler+ "çıkarılan eleman:"+dizidenCikarilanElemann);


// dizinin ilk elemanını çıkarır
isimler.shift();
console.log(isimler.toString());

// dizinin en başına eleman ekler
isimler.unshift("yeni eleman");
console.log(isimler.toString());

delete isimler[1];
console.log(isimler.toString()+" "+isimler[1]);

let sayilar= [1,2,3,4,5,6,7,8];
let silinenler = sayilar.splice(0,0,0,-1,-2);
console.log(sayilar.toString());
console.log(silinenler);



let tekSayilar=[1,3,5];
let ciftSayilar=[2,4,8];

let sayilarim=tekSayilar.concat(ciftSayilar);
console.log(sayilarim.toString());


let yeniDizi=sayilarim.slice(0,3);
console.log(yeniDizi.toString()+"   "+ sayilarim.toString());





