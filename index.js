//1.mencari keliling persegi panjang//
//memasukkan nilai panjang dan lebar//
//menghitung rumus//
//2p+2L//
//menampilkan hasil//

//memasukkan nilai panjang, lebar//

let panjang = 150;
let lebar = 40;

//menghitung rumus//
let hasil = 2 * panjang + 2 * lebar;

//menampilkan hasil//
console.log("keliling persegi panjang adalah " + hasil)

//2. luas lingkaran//

//tentukan phi dan  r//
let phi = 3.14;
let r = 100

let hasill = phi * r;

console.log('hasilnya adalah ' + hasill)

//menentukan keliling persegi//
//luas persegi adalah 64//
//keliling persegi ?//

let Lp = 64;

let s = Math.sqrt(Lp)

let hasilNya = 4 * s;

console.log('hasilnya adalah ' +hasilNya)

//syarat membuat ktp//
//input//
let umur = 18;

//logika//

if(umur >= 17){
    result = "Membuat KTP";
} else {
    result ="belum bisa membuat KTP "
}

//output//
console.log(result)

//soal//

let pabp = 86;

let math = 82; 

let dpk = 77;

let rata2 = (pabp + math + dpk) / 3;

if(rata2 >= 80 && rata2 <=100) {
grade = "A"
} else if(rata2 >= 75 && rata2<=80) {
    grade = "B"
}else

if(rata2 >=65 && rata2 <=75) {
    grade = "c"
}else if(rata2 >=45 && rata2 <=65) {
    grade ="d"
} else

if(rata2 >=0 && rata2 <=45) {
    grade = "e"
} else{
    grade ="k"
}
    
console.log(rata2)
console.log(grade)