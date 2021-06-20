// //1) створити функцію яка приймає масив та виводить його

// function Output (arr) {
// for(const item of arr) {
//         console.log(item);
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];

// Output(arr);

// //2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function Output(arr) {
    for (let i = 0; i < N; i++) {
        console.log(arr[i]);
    }
}

function rand_arr(arr) {

    for (let i = 0; i < N; i++) {
        arr[i] = Math.floor(Math.random() * 100) + 1;
    }
    return arr;
}
const N = 10;
// let arr_rand = new Array (N)
// let arr2 = rand_arr(arr_rand) ;
// Output(arr2);

// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// //4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function min (a,b,c) {
//     if  (a < b && a < c ) {
//         return a;
//     }
//     else if  (b < a && b < c ) {
//         return b ;
//     }
//     else {
//         return c ;
//     }
// }
// function max (a,b,c) {
//     if  (a > b && a > c ) {
//         return a;
//     }
//     else if  (b > a && b > c ) {
//         return b ;
//     }
//     else {
//         return c ;
//     }
// }

// let result_min = min(4,1,6);
// let result_max = max(4,1,6);

// console.log(result_min);
// console.log(result_max);


// // 5) створити функцію яка повертає найбільше число з масиву
// // 6) створити функцію яка повертає найменьше число з масиву


// function f_result_max (arr) {
//     let max = 0;
//     for (let i = 0 ; i < N ; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// function f_result_min (arr) { 
//     let min = 9999999;
//     for (let i = 0 ; i < N ; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }


// let arr_min = new Array (10);
// let arr_max = new Array (10);

// rand_arr(arr_max);
// Output(arr_max)
// let result_max = f_result_max(arr_max);
// console.log("RESULT " + result_max)
// console.log("--------------------------------------------------")
// rand_arr(arr_min);
// Output(arr_min)
// let result_min = f_result_min(arr_min);
// console.log("RESULT " + result_min)



// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// //8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function suma_arr (arr) {
//     let suma = 0;
//     for (let i = 0 ; i < N ; i++) {
//         suma += arr[i];
//     }
//     return suma;
// }

// function aver_sum (suma) {
//     let aver_res = 0; 
//     aver_res = suma / N ;
//     return aver_res;
// }

// let arr_sum = [N];
// rand_arr(arr_sum);
// Output(arr_sum);
// let result_sum = suma_arr(arr_sum);
// console.log(result_sum)

// let result_ave = aver_sum(result_sum);
// console.log(`AVERAGE :  ${result_ave}`)




// // 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// function func_key(arr_read , arr_sort) {

//     for (let key of arr_read) {
//         arr_sort += Object.keys(key) + ",";
//     }
    
//     return arr_sort;
    
// }

// let arr_not_sort = [                                     ////Каряво написано але ніби працює 
//     {
//     name: 'Dima',
//     age: 13
// }, {
//     model: 'Camry'
// } ,
// {
//     year: 2003 ,
//     company: "Nike" ,
// } ,
// {
//     car: "mers"
// }
// ];
// let arr_sort = new Array();

// let result = func_key(arr_not_sort , arr_sort)

// result = result.split(",")
// result.pop();
// console.log(result)





////11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


// function plus(arr1,arr2,arr_res) {

//     for (let i = 0 ; i < arr1.length ; i++){
//         for (let j = 0 ; j < arr2.length ; j++){
//             if (i == j){
//                 arr_res.push(arr1[i] + arr2[j])
//             }
//         }
//     }
//     return arr_res;
// }


// let arr_1  = [2,4,9,1,5];
// let arr_2  = [7,3,6,8,2];
// let arrRes = new Array()

// let result = plus (arr_1 , arr_2 , arrRes);
// console.log(result)







////  -------------------------------------------------------------------

//// ЗАЙВІ ПРОБІЛИ


// function delete_space(str, N) {

//     for ( let i = 0 ; i < N; i++){
//         if (str[i] == str[i+1] && str[i] == " "){
//             delete str[i];
//             console.log(str[i])
//         }
//     }
//     return(str)
// }
function delete_space(str) {
    str = str.trim();
    while (str.includes('  '))  {
        str = str.replace("  " , " ");
    }
    return str
}

let space = "     Harry       Poter    ";
let Len = space.length;
let res = delete_space(space);

console.log(res)