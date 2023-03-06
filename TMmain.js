//const ul = document.querySelector('.items');
//ul.firstElementChild.textContent = "Hello";

function myfunc(event){
event.preventDefault();
var name = document.getElementById('name').value;
localStorage.setItem('fullname', name);
var email = document.getElementById('email').value;
localStorage.setItem('emailid', email);

console.log(localStorage.getItem('fullname', name));
console.log(localStorage.getItem('emailid', email));
}

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("click");
//     document.getElementById('my-form').style.background = '#ccc';
//     //document.querySelector('body').classList.add('bg-dark');
//   });
  
//   btn.addEventListener('mouseover', e => {
//     e.preventDefault();
//     //console.log("mouseover");
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('btn:hover');
//   });

//   btn.addEventListener('mouseout', e => {
//     e.preventDefault();
//     //console.log("mouseout");
//     document.getElementById('my-form').style.background = '#ddd';
//   });

//   localStorage.setItem('name', 'Prince');
//   console.log(localStorage.getItem('name'));
//   localStorage.removeItem('name');

//   sessionStorage.setItem('name', 'Singha');
//   console.log(sessionStorage.getItem('name'));
//   sessionStorage.removeItem('name');

//   document.cookie = 'name=Ujjwal; expires=' + new Date(2025, 7, 6).toUTCString();
//   document.cookie = 'lastname=Dutt; expires=' + new Date(2025, 7, 6).toUTCString();
//   console.log(document.cookie);