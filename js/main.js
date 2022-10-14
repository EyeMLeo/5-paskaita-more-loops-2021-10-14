'use strict'
console.log('main.js');


// 20. sudauginti skaiciu nuo kintamojo min iki kintamojo max

// min 5. max 10

// sudauginti ir aspausdinti skaiciu daugybos rezultata

// let min=5;
// let max=10;
// let suma=0;

// for(let i=min;i<=max;i++){
// if(i===min){
// suma=min
// console.log(`if loopas, jame suma=min ${suma}=${min}`);

// } else {
//     console.log(`Else loopas, jame suma=suma*i ${suma*i}=${suma}*${i}`);
//     suma=suma*i;
// }

// }



// 23. atspausdinti skaicius stringe nuo 44 iki 66 atskirtus "|| " zenklu





// let sentence;
// for (let i=44;i<=66;i++){
// if (i===66) {
//     sentence=`${sentence+i}`
// }else if (i===44) {

//     sentence=`${i}||`

// }else{
//     sentence=`${sentence+i}||`
// }
// }
// console.log(sentence);



// [09:55] Marius Kuzminskas
// // 21. Sudeti skaicius nuo 17 iki 33. atspausdinti suma ir kiek buvo ciklu
//  like 10

// [09:56] Marius Kuzminskas
// // 22. sudauginti skaicius nuo -4 iki 7 ir rezultata atspausdinti padalinta is 3.
//  like 6






// let cars = ["Saab", "Volvo", "BMW", "VW", "Audi"];
// console.log(cars);

// let x=10;
// let asd=55;

// let fake =asd;

// console.log(asd);
// console.log(fake);



// for(let i=0;i=<5; i++){
// let fake

// }



// // [09:55] Marius Kuzminskas
// // // 21. Sudeti skaicius nuo 17 iki 33. atspausdinti suma ir kiek buvo ciklu
// //  like 10

// let nuo=17
// let iki=33
// let sum =0;
// for(let i=nuo;i<=iki;i++){
// sum +=i;
// console.log(sum);
// }









// [09:56] Marius Kuzminskas
// // 22. sudauginti skaicius nuo -4 iki 7 ir rezultata atspausdinti padalinta is 3.
//  like 8
// let nuo=-4;
// let iki=7;
// let result=1;

// for(let i=nuo;i<=iki;i++){
// if (i===0) {
//     continue;
    
// }else{
// result *=i;
// console.log(result);
// }

// }
// console.log(result/3);






// [09:57] Marius Kuzminskas
// // 23. atspausdinti skaicius stringe nuo 44 iki 66 atskirtus "|| " zenklu
//  like 11



//  [12:06] Marius Kuzminskas
// // 24. Suskaiciuoti kie yra skaiciau 3 kartotiniu nuo 12 iki 57
// //  like 9
// let a=0
// for (let i=12;i<=57;i++){
// if (i%3===0) {
//     a++
// }

// }
// console.log(a)


// [12:08] Marius Kuzminskas
// // 25. suskaiciuoti koks butu vidurkis skaiciu nuo 45 iki 87
//  like 8

// let min=45;
// let max=87;
// let a=0;
// let sum=0;
// for(let i=min;i<=max;i++){
// a++
// sum +=i;
// console.log(sum);

// }
// console.log(sum/a);








// [12:08] Marius Kuzminskas
// // 26. sugeneruoti 3 random skaicius nuo 1 iki 10 ir pranesti:// a: ar buvo skaicius didesnis uz 7?// b: ar buvo skaicius mazesnis uz 3?
//  like 5

let num1=(1+(Math.random()*9)).toFixed(0);
let num2=(1+(Math.random()*9)).toFixed(0);
let num3=(1+(Math.random()*9)).toFixed(0);
console.log(num1);
console.log(num2);
console.log(num3);

if(num1>7||num2>7||num3>7){
    console.log('turime skaiciu dydesni uz 7');
} else if(num1<3||num2<3||num3<3){
    console.log('turime skaiciu mazesniu uz 3');
} else {
    console.log('skaiciai tarp 3 ir 7');  
}
