const bars = document.querySelector('.nav-bars-btn')
const back = document.querySelector('.fa-chevron-btn')
const overLay = document.querySelector('.overlay-menu')

// console.log(overLay);

bars.addEventListener('click', ()=>{
    overLay.classList.add('active')
    
})
back.addEventListener('click', ()=>{
    overLay.classList.remove('active')
})