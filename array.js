let arabaMarkalari= ["Mercedes", "Audi", "BMW"]
console.log(arabaMarkalari);
console.log(arabaMarkalari[2]);

arabaMarkalari[3]="Honda";
arabaMarkalari[4]="Opel";


arabaMarkalari[88]="Tofaş";
console.log("araba dizisi: "+arabaMarkalari.toString());


for (let oankiDiziElemani of arabaMarkalari){
    console.log(oankiDiziElemani);
}

let yeniDizi=[1,"tayfun", true];
console.log(yeniDizi);