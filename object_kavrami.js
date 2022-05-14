let emre = {
    adi:'Emre',
    soyad:'Altun',
    dogumYili:1988,
    yasiHesapla:function () {
        this.yas=2020- this.dogumYili;
    }
};

console.log(emre.dogumYili);
console.log(emre['dogumYili']);

emre.yasiHesapla();
console.log(emre.yas);

let ayse= new Object();
ayse.dogumYili=1990;