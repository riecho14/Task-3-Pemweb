//No 1
let changeText = document.querySelector('#namaku');
changeText.innerText = 'Merubah Teks (NO 1)';

//No 2
let newElement = document.createElement('p');
newElement.innerHTML = 'Membuat Element Baru (NO 2)';
console.log(newElement);
let newClass = document.querySelector('#data');
newClass.appendChild(newElement);

//No 3
function changeBG() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}