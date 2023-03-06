//const ul = document.querySelector('.items');
//ul.firstElementChild.textContent = "Hello";

function myfunc(event){
event.preventDefault();
// var name = document.getElementById('name').value;
// localStorage.setItem('fullname', name);
// var email = document.getElementById('email').value;
// localStorage.setItem('emailid', email);

// console.log(localStorage.getItem('fullname', name));
// console.log(localStorage.getItem('emailid', email));
const name = event.target.name.value;
const email = event.target.email.value;
const number = event.target.number.value;

const myObj = {
    name, email, number
};
const myObj_serialized = JSON.stringify(myObj);
localStorage.setItem(myObj.email, myObj_serialized);
//console.log(myObj_serialized);
const myObj_deserialized = JSON.parse((localStorage.getItem('myObj')));
//console.log(myObj_deserialized);

showUserOnScreen(myObj);

}
function showUserOnScreen(myObj)
{
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = myObj.name+' - '+myObj.email+' - '+myObj.number;
    parentElem.appendChild(childElem);

    //const itemList = document.getElementById('users');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

//Add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
editBtn.className = 'btn btn-danger btn-sm float-right edit'

//Append Text node
deleteBtn.appendChild(document.createTextNode('Delete'));
editBtn.appendChild(document.createTextNode('Edit'));

childElem.appendChild(deleteBtn);
childElem.appendChild(editBtn);

parentElem.appendChild(childElem);

deleteBtn.onclick = () => {
    localStorage.removeItem(myObj.email);
    parentElem.removeChild(childElem);
}

editBtn.onclick = () => {
    localStorage.removeItem(myObj.email);
    parentElem.removeChild(childElem);
    document.getElementById('name').value = myObj.name;
    document.getElementById('email').value = myObj.email;
    document.getElementById('number').value = myObj.number;
}

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