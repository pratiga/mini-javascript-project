const header = document.getElementById('header')
const title = document.getElementById('title')
const profile_img = document.getElementById('profile_img')
const Name = document.getElementById('name')
const date = document.getElementById('date')
const excerpt = document.getElementById('excerpt')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,2500)

function getData(){
    header.innerHTML = '<img src="images/laptop2.jpg" alt=""/>'
    title.innerHTML = 'lorem this is the texst iof the paragraph'
    excerpt.innerHTML = 'lorem ipsumm dolor sit amet consectetur adipisicing elait . dolore, perferendis'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>'
    Name.innerHTML = ' jhone Doe'
    date.innerHTML='oct 08,2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs-text.forEach(bg => bg.classList.remove('animated-bg_text'))


}