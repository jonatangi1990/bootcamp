// Recuperar el header
//const header = document.getElementsByTagName('header');
//const miHeader = header[0];

//Quiero capturar el ul dentro del header
//const uls = miHeader.getElementsByTagName('ul');
//const miUl = uls[0];

//Capturar los lis dentro del ul
//const lis = miUl.getElementsByTagName('li');
//lis[1].innerText = 'texto modificado muy tedioso'

//querySelector -> Recuperar elementos a partir de selectores css
const li = document.querySelector('header ul li:nth-child(2)');
li.style.backgroundColor = 'red';

//querySelectorAll -> recupera todos los elementos que coincidan con el selector CSS
const lis = document.querySelectorAll('footer li');
lis[1].style.color = 'dodgerblue';
for(let li of lis){
    li.style.border = '2px dotted green';
}
