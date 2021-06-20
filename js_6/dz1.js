// // 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// //    Вставити цей блок на сторінку
// //2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// // Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
//   }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
//   }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
//   }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
//   }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
//   }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
//   }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
//   }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
//   }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
//   }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
//   }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
//   }];
// let main = document.getElementById('main')
// for (const user of users) {
//     const userDiv = document.createElement("div")
//     userDiv.id ='userDiv'
//     userDiv.style.backgroundColor = 'red'
//     userDiv.style.width = '800px'
//     userDiv.style.height = '100px'
//     userDiv.style.margin = '5px'
    
//     main.appendChild(userDiv)
//         userDiv.innerHTML = `Name : ${user.name} -----age : ${user.age} --------status : ${user.status}--------address : 
//         ${user.address.city}-${user.address.country}-${user.address.street}-${user.address.houseNumber}`
// }

// for(const user of users){
//     const userAddress = document.createElement('div')
//     const userDiv = document.getElementById('userDiv')
//     userAddress.style.backgroundColor = 'yellow'
//     userAddress.style.width = '600px'
//     userAddress.style.height = '100px'
//     userAddress.style.margin = '5px'
    
//     document.body.appendChild(userAddress)
//     userAddress.innerHTML = `city : ${user.address.city} + country : ${user.address.country} + street : ${user.address.street} + houseNumber : ${user.address.houseNumber}`

// }
// 3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
let main = document.getElementById('main')
let h1Rules = document.createElement('h1')
h1Rules.innerText = 'Правила бойцовского клуба';
main.append(h1Rules)
for (const rule in rules) {
    let divRule = document.createElement('div')
    divRule.classList.add('rules')
    divRule.classList.add(`rule${rule}`)
    let h2Rules = document.createElement('h2')
    h2Rules.innerText = `${rules[rule].title}`
    divRule.append(h2Rules)
    let pRules = document.createElement('p')
    pRules.innerText = `${rules[rule].body}`
    divRule.append(pRules)
    main.append(divRule)
}