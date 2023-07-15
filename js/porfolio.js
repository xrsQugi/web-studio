//! ----------- burger -----------
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

//! ----------- Filter-1 -----------
// const list = document.querySelector('.filter-list');
// const items = document.querySelectorAll('.product');
// const listItems = document.querySelectorAll('.filter-list-item');

// list.addEventListener('click', event => {
// 	const targetId = event.target.dataset.id;
//     const target = event.target;
// 	// console.log(targetId);

//     if(target.classList.contains('filter-list-item')){
//         listItems.forEach(listItem => listItem.classList.remove('filter-item-active'));
//         target.classList.add('filter-item-active');
//     }

//     switch(targetId) {
//         case 'all':
//             getItems("product");
//             break;
//         case 'web-site': case 'application':  case 'design': case 'marketing':
//             getItems(targetId);
//             break;
//     }
// })

// function getItems(className){
//     items.forEach(item => {
//         if(item.classList.contains(className)) {
//             item.style.display='block';
//         } else{
//             item.style.display='none';
//         }
//     })
// }

//! ----------- Filter-2 -----------
const list = document.querySelector('.filter-list');
const items = document.querySelectorAll('.product');
const listItems = document.querySelectorAll('.filter-list-item');

list.addEventListener('click', event => {
    if(event.target.tagName !== "LI"){
        return false;
    }

    const targetId = event.target.dataset.id;

    if(event.target.classList.contains('filter-list-item')){
        listItems.forEach(listItem => listItem.classList.remove('filter-item-active'));
        event.target.classList.add('filter-item-active');
    }

    items.forEach(item => {
        // item.classList.remove('hide');
        item.style.display='flex';
           
        if(!item.classList.contains(targetId) && targetId !== "all"){
            item.style.display='none';
        }
    })
})