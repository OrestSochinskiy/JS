// //1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //створити пустий масив, наповнити його 10 об'єктами User
// function User(id , name , surname, email , phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;


// }
// let users = []

// for (let i = 0 ; i < 10 ; i++){
//     let user = new User(i + 1,"Orest" , 'Sochinskiy' , "soch@gmail.com" , 3280310);
//     users.push(user)

// }
// console.log(users)


////----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;

//     }
// }

// let clients = [];

// for (let i = 0; i < 10; i++) {
//     let client = new Client(i + 1, "Orest", 'Sochinskiy', "soch@gmail.com", 3280310, ["bread", 'milk', 'eggs', 'sugar'])
//     clients.push(client);
// }

// console.log(clients)


////----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


////3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//// -- info () - яка виводить всю інформацію про автомобіль
//// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//// -- changeYear (newValue) - змінює рік випуску на значення newValue
//// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, brand, year, max_speed, engine) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine = engine;

//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }

//     this.info = function () {
//         console.log("aiodnainfisafeihqpjeqadjow[kiadnc[dssid'ncsoihvdsI")
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driverInfo) {
//         this.driver = driverInfo;
//     }
// }


// let mers = new Car("AMG GT", "Mersedes", "2020", '310', '4,4');
// console.log(mers);
// mers.drive();
// mers.info();
// mers.increaseMaxSpeed('440');

// console.log(mers);
// let roma = {
//     name: "Roma",
//     age : 23,
//     experince : 3
// };
// mers.addDriver(roma)
// console.log(mers);

////----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, brand, year, max_speed, engine) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine = engine;
//     }

//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     }
//     info() {
//         console.log("This car very norm aparat")
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.max_speed = newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }

// let bmw = new Car('M8', 'BMW', '2020', '325', '4.4');
// let orest_driver = {
//     name: "Orest",
//     age : '18'   ,
//     experince:'2',
// }
// console.log(bmw);
// bmw.drive()
// bmw.info()
// bmw.increaseMaxSpeed('543')
// bmw.changeYear('2021')
// bmw.addDriver(orest_driver)
// console.log(bmw);

////----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // 5 Взяти масив з завдання 1.
// // - Відфільтрувати , залишивши тільки об'єкти з парними id
// // - Відсортувати його по id. по зростанню
// // - Відсортувати його по id. по спаданню

// function User(id , name , surname, email , phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = []

// for (let i = 0 ; i < 10 ; i++){
// let user = new User(i + 1,"Orest " + (i +1) , 'Sochinskiy ' + (i+1) , `soch${i}@gmail.com` , 3421 * i );
// users.push(user)
// }
// console.log(users)


// let filter = users.filter(function (user) {
//     return user.id % 2 == 0 ;    
// })
// console.log(filter)

// let filterUp = users.sort(function(user1,user2){
//     return user1.id - user2.id; 
// })
// let filterDown = users.sort(function(user1,user2){
//     return user2.id - user1.id; 
// })
// console.log(filterUp)
// console.log(filterDown)


////----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
} 

let clients = [
    
    new Client (1,'Orest' , 'Sochinskiy','soch@gmail.com','09743203',['bread','cola']),
    new Client (2,'Oksana' , 'Sochinskiy','soch@gmail.com','09743203',['bread','cola','cola','cola','cola','cola','cola','cola']),
    new Client (3,'Roma' , 'Sochinskiy','soch@gmail.com','09743203',['bread','cola','cola','cola']),
    new Client (4,'Bogdan' , 'Sochinskiy','soch@gmail.com','09743203',['bread','cola','cola','cola','cola'])

]
clients.sort(function (client1, client2) {
    return client2.order.length - client1.order.length
});


console.log(clients)

