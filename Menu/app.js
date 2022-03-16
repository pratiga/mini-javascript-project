const menu =[{
    id: 1,
    title: "diner double",
    category:"breakfast",
    price:15.99,
    img:"images/bc1.jpg",
    desc:`Firstly, observing the lifecycle of silkworm, it begins with an egg laid on a mulberry leaf. Ten days later, the egg is developed into larva on this stage larva produced silk thread around its body contributing approximately six weeks. `,
},
    {
    id: 2,
    title: "diner double",
    category:"lunch",
    price:14.98,
    img:"images/features/happy.jpg",
    desc: 'it takes around eight days for the thread to form a cocoon Finally, mouth appears out of the cocoon which is accounted for sixteen days.',
    },
    {
        id: 3,
        title: "test diffrent items",
        category:"snake",
        price:65.98,
        img:"images/bc3.jpg",
        desc: 'it takes around eight days for the thread to form a cocoon Finally, mouth appears out of the cocoon which is accounted for sixteen days.',
        },
    
];
const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');
// load items

window.addEventListener("DOMContentLoaded",() => {
    displayMenuItem(menu);
});

    
    // displayMenu = displayMenu.join("");


// filter items 
window.addEventListener("DOMContentLoaded",function (e) {
    filterBtns.forEach(function (btn){
        btn.addEventListener("click",function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if(menuItem.category == category) {
                    return menuItem;
                }
                
            });
            if(category=="all"){
                displayMenuItem(menu);
            } else {
                displayMenuItem(menuCategory);
            }
        });
    });

})




function displayMenuItem(menuItems) {
    let displayMenu = menuItems.map(function (item) {
       return` <article class="menu-item"> 
       <img src= ${item.img} alt=${item.title} class="photo">
       <div class="item-info">
           
           <header>
               <h4>${item.title}</h4>
               <h4 class="price">${item.price}</h4>
           </header>
           <p class="item-text">${item.desc}</p>
       </div>

    </article>`;
   });
   sectionCenter.innerHTML=displayMenu;
}