 const muraciyyetbtn= document.querySelector('.muraciyyet-btn')
 const tesdiqBox= document.querySelector('.tesdiq')
 const tesdiqCross= document.querySelector('.tesdiq-cross')


 muraciyyetbtn.addEventListener('click',(e)=>{
    e.preventdefault()
    tesdiqBox.classList.add('aktivbox')
 })
 tesdiqCross.addEventListener('click',()=>{
    tesdiqBox.classList.remove('aktivbox')
 })