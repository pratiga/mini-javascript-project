// local reviews data 
const reviews = [
    {
        id: 1,
        name:'susan smith',
        job: 'web developer',
        img: "images/profile2.jpg",
        text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
    },
    {
        id: 2,
        name:'anna johnson',
        job: 'web designer',
        img: "images/profile3.jpg",
        text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
    },
    {
        id: 3,
        name:'supriya johnson',
        job: 'software designer',
        img: "images/profile4.jpg",
        text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
    }

]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
setTimeout(getIteam,25000)
function getIteam(person){
    items=reviews[person];
    img.src = items.img;
    author.textContent=items.name
    job.textContent = items.job
    info.textContent = items.text
}
window.addEventListener("DOMContentLoaded", function(){
    getIteam(currentItem);
})
nextBtn.addEventListener('click',()=>{
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    getIteam(currentItem);
});
prevBtn.addEventListener('click',()=>{
    currentItem--;
    if (currentItem < 0){
       currentItem = reviews.length - 1
        
    }
    getIteam(currentItem);
});




