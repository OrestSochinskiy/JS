// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let array = [1,2,3,4,5]
// console.log(array)
// let array2 = ["orest","vasya","ostap",'oksana','roman']
// console.log(array2)
// let array3 = ["orest",2,true,false,'roman']
// console.log(array3)





// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];

// arr[0] = "first";
// arr[1] = 2;
// arr[10] = 'last';

// console.log(arr)




// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.



// for (let i = 0 ; i < 10 ; i++) {
//     document.write('<div>' + "HELLO" + '</div>')
// }
// for (let i = 0 ; i < 10 ; i++) {
//     document.write('<div>' + "HELLO " + i + '</div>')
// }
// let i = 0;
// while (i < 20) {
//     document.write('<h1> HEY WHATS UP </h1>')
//     i++
// }
// let i = 0;
// while (i < 20) {
//     document.write('<h1> HEY WHATS UP ' + i + '</h1>')
//     i++
// }




// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1,2,3,4,5,6,7,8,9,10];

// for(let temp of arr) {
//     console.log(temp)
// }

// let arr2 = ['vasya','ostap','orest','oleg','ruslan','bodya','okasana','roma','max','marta'];

// for(let temp of arr2) {
//     console.log(temp)
// }

// let arr3 = ['vasya',true,'orest',329,'ruslan',false,'okasana',942,'max','marta'];
// for (let i = 0 ; i < arr3.length ; i++){
//     console.log(arr3[i])
// }


// let arr = ['vasya',true,'orest',329,'ruslan',false,'okasana',942,'max','marta'];

// for(let temp of arr) {
//     if (typeof(temp) == typeof(true)) {
//         console.log(temp);
//     }
// }
// for(let temp of arr) {
//     if (typeof(temp) == typeof(1)) {
//         console.log(temp);
//     }
// }
// for(let temp of arr) {
//     if (typeof(temp) == typeof('true')) {
//         console.log(temp);
//     }
// }



// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// for (let i = 0 ; i < 10 ; i++) {
//     console.log(i);
//     document.write("step-" + i + ",")
// }
// for (let i = 0 ; i < 100 ; i++) {
//     console.log(i);
//     document.write('<h1>' + "step-" + i + "</h1>")
// }
// for (let i = 0 ; i < 100 ; i += 2) {
//     console.log(i);
//     document.write('<h1>' + "step-" + i + "</h1>")
// }

// for (let i = 0 ; i < 100 ; i ++) {

//     if (i % 2 == 0){
//         console.log(i);
//     document.write('<h1>' + "step-" + i + "</h1>")
//     }
// }
// for (let i = 0 ; i < 100 ; i ++) {

//     if (i % 2 == 1){
//         console.log(i);
//     document.write('<h1>' + "step-" + i + "</h1>")
//     }
// }



// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
// // let usersWithId = [
// //     {id: 1, name: 'vasya', age: 31, status: false},
// //     {id: 2, name: 'petya', age: 30, status: true},
// //     {id: 3, name: 'kolya', age: 29, status: true},
// //     {id: 4, name: 'olya', age: 28, status: false}
// // ];

// // let citiesWithId = [
// //     {user_id: 3, country: 'USA', city: 'Portland'},
// //     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// //     {user_id: 2, country: 'Poland', city: 'Krakow'},
// //     {user_id: 4, country: 'USA', city: 'Miami'}
// // ];

// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// // Записати цей об'єкт в новий масив
// // Example:
// // let usersWithCities = [
// //     {
// //         id: 1, // <===
// //         name: 'vasya',
// //         age: 31,
// //         status: false,
// //         address: {
// //             user_id: 1, // <===
// //             country: 'Ukraine',
// //             city: 'Ternopil'
// //         }
// //     },
// //     // TO BE CONTINUED .....
// // ]


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let usersWithCities = [] ;


for (const user of usersWithId ){
    for (const city of citiesWithId ){
        if (user.id === city.user_id){
            user.address = city;
            
        }
    }
}
for (const temp of usersWithId) {
    delete temp.address.user_id
    delete temp.id
}

    
for ( let i of usersWithId ){
    console.log(i)
}
