//    a) отримує текст з параграфа з id "content"
let elementContent = document.getElementById('content');
console.log(elementContent);
console.log(elementContent.innerText)
//    b) отримує текст з блоку з id "rules"
let elementRules = document.getElementById('rules');
console.log(elementRules)
console.log(elementRules.innerText)
//    c) замініть текст параграфа з id 'content' на будь-який інший
elementContent.innerText = "TEXTY.org.ua («Тексти»)  — українське незалежне суспільно-політичне та аналітичне інтернет-видання, що поєднує класичну журналістику та журналістику даних. Створене у Києві у 2010 році журналістами Анатолієм Бондаренком та Романом Кульчинським. Видання вважається засновником напрямку журналістики даних в Україні[2][3].";
//    d) замініть текст параграфа з id 'rules' на будь-який інший
elementRules.innerText = "Інтернет-видання «Тексти.org.ua» розпочало працювати в червні 2010 року. Перед цим сайт мав назву ZaUa.org. Після припинення фінансування інвестором редакція змінила назву й почала незалежне існування.";
//    e) змініть кожному елементу колір фону на червоний
let body = document.body.children
console.log(body)
for (const elem of body) {
    elem.style.backgroundColor = 'red'
}
//   f) змініть кожному елементу колір тексту на синій
let bodyText = document.body.children;
console.log(bodyText)
for (const elem of bodyText) {
    elem.style.color = 'blue'
}
//   g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.getElementById('rules');
console.log('rules')
//   h) отримати всі елементи з класом fc_rules
//   i) поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules');
for (const elem of fc_rules) {
    elem.style.backgroundColor = " yellow"
    elem.style.color = "red"
    console.log(elem)
}
// //                                           ДЗ ВІКТОР
// // - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// // - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// let idText = document.createElement('p');
// let btn = document.createElement('button')
// idText.innerText = "AWhhvsndmvpsvna[vano[vdna[vda[vbnwe[cns[ofcnew[ovущгєfhds";
// idText.style.backgroundColor = 'orange'
// btn.style.backgroundColor = 'orange'
// btn.style.height = "40px"
// btn.style.width = "60px"
// btn.style.borderRadius = "40px"
// btn.innerText = "HIDE TEXT"
// document.body.appendChild(idText);
// document.body.appendChild(btn);
// idText.id = 'text'
// btn.onclick = () => {
//     idText.style.display = "none";
//     btn.style.display = "none";
// }

// //- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача



// //- Створіть меню, яке розгортається/згортається при клику
// let h1Menu = document.getElementById('h1Menu')
// let menu = document.querySelectorAll('div.menu p ')
// console.log(menu)
// console.log(h1Menu)
// h1Menu.onclick = () => {
//     for (const elem of menu) {
//         elem.style.display = 'block'  
//     }
// }