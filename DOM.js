//EXAMINE THE DOCUMENT OBJECTS
//console.dir(document);
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//We can change the title name from here only, for eg. now the title of the page is Item Lister, but we can change it to 123 and test
//document.title = 123;
//console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

//we can change by this way, but this is not the right code
//document.all[10].textContent = "Hello";
console.log(document.forms);
console.log(document.links); 
*/
// console.log(document.images);

//GET ELEMENT BY ID
console.log(document.getElementById("header-title"));

/* var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headerTitle); */
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
/* headerTitle.innerHTML = "<h3>Hello</h3>";
header.style.borderBottom = "solid 3px #000"; */

//GET ELEMENTS BY CLASS NAME
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[3]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";

//Gives Error
//items.style.backgroundColor = "#f4f4f4";

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = "bold";
// } 

//GET ELEMENTS BY TAG NAME --> pretty much the same as getelementsbyclassname
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[3]);
// li[1].textContent = "Hello";
// li[1].style.fontWeight = "bold";
// li[2].style.backgroundColor = "green";

// //Gives Error
// //items.style.backgroundColor = "#f4f4f4";

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// for(let i=0;i < li.length; i++)
// {
//     li[i].style.fontWeight = "bold";
//     li[i].style.backgroundColor = "lightblue";
// }


// //QUERY SELECTOR --> It works pretty much like JQuery. The only difference is it works only for one item.
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// //This input querySelector grabs only the first input by default
// var input = document.querySelector("input");
// input.value = "Hello!";

// var input = document.querySelector('input[type="submit"]');
// input.value = "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<even.length;i++)
// {
//     even[i].style.backgroundColor = '#ccc';
// }

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'lightgreen';
}

