// //                                           ДЗ ВІКТОР
// // - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// // - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// let idText = document.createElement('p');
// let btn = document.createElement('button')
// idText.innerText = "HELLLOOOOOOO WWWOOOOOOORRRRRRLLLLLDDD";
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


// ////- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// ////При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити ////про це користувача

// let elem1 = document.getElementById('elem1')
// let butt = document.getElementById('butt');
// butt.onclick = () => {
//     inputValue = document.getElementById('elem1').value;
//     console.log(inputValue)
//     if (inputValue < 18) {
//         alert("GO TO SCHOOL")
//     }
// }
// //- Створіть меню, яке розгортається/згортається при клику
// let menu = document.getElementsByClassName('menu')
// let h1Menu = document.getElementById('title')
// let item = document.getElementById('item')
// h1Menu.onclick = () => {
//     if (item.style.display == 'block'){
//         item.style.display = 'none'
//     }
//     else {
//         item.style.display = 'block'
//     }
// }
// //- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вивести список коментарів в документ, кожний в своєму блоці.
// // Додайте кожному коментарю по кнопці для згортання його body.

// let listUsers = [{
//         title: 'lorem',
//         body: 'EOmmfeofnmsfkmas;ld,samfsda'
//     },
//     {
//         title: 'lorem2',
//         body: 'mvdskofmmsdofms;ld,samfsda'                      //КНОПКА TITLE ХОВАЄ BODY
//     },
//     {
//         title: 'lorem3',
//         body: 'fnsomaodsm;ld,samfsda'
//     }
// ]
// let divMain = document.createElement('div')
// document.body.appendChild(divMain)

// function Output(list) {
//     for (const user of list) {
//         let divTitle = document.createElement('div')
//         let divBody = document.createElement('div')
//         divTitle.classList.add('title')
//         divBody.classList.add('body')
//         divTitle.innerText = `${user.title}`;
//         divBody.innerText = `${user.body}`;
//         divMain.appendChild(divTitle)
//         divMain.appendChild(divBody)

//     }
// }
// Output(listUsers)
// let title = document.getElementsByClassName('title')
// let body = document.getElementsByClassName('body')

// for (const i in listUsers) {
//     title[i].style.display = 'block'
//     title[i].onclick = () => {
//         body[i].style.display = 'none';
//     }
// }

// //- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let f1 = document.forms.formInfo
// let f2 = document.forms.formInfo2
// let btnSave = document.getElementById('btnSave')
// let nameInput1 = f1.name
// let nameInput2 = f2.name
// let surnameInput1 = f1.surname
// let surnameInput2 = f2.surname

// btnSave.onclick = () => {
//     console.log(`${nameInput1.value}-${surnameInput1.value} :: ${nameInput2.value}-${surnameInput2.value}`)
// }

// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// let table = document.getElementById('table')

// function Tablutca(n, m, elem) {
//     for (let i = 0; i < n; i++) {
//         let row = document.createElement('tr')
//         row.id = `row${i}`
//         row.innerText = `${elem}`;
//         table.append(row)
//         for (let j = 1; j < m; j++) {
//             let col = document.createElement('td')
//             col.innerText = `${elem}`;
//             row.append(col)
//         }
//     }
// }
// Tablutca(3, 3, '*')

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

let arrImg = [
 '  https://www.imgonline.com.ua/examples/random-pixels-big.png',
  'https://static.remove.bg/remove-bg-web/be42432786d2dc42d0039483719089bd51ea6299/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png',
'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg','https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
]

let img = document.createElement('img')
let carusel = document.getElementById('carusel')
let btnLeft = document.getElementById('leftBtn')
let btnRight= document.getElementById('rightBtn')
img.style.width = '200px'
img.style.height = '200px'
img.src = arrImg[0]
carusel.append(img);
let i = 0 ;
btnLeft.onclick = () => {
    if (i <= arrImg.length - 1){
        if(i == 0){
        img.src = arrImg[arrImg.length -1]
        i = arrImg.length -1;
        console.log(i)

        }
        else{
            img.src = arrImg[i-1]
            i -= 1;
            console.log(i)
        }
    }
}
btnRight.onclick = () => {
    if (i <= arrImg.length - 1){
        if(arrImg.length - 1 == i){
        img.src = arrImg[0]
        i = 0;
        console.log(i)

        }
        else{
            img.src = arrImg[i+1]
            i += 1;
            console.log(i)
        }
    }
}
