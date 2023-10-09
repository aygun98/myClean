 const muraciyyetbtn= document.querySelector('.muraciyyet-btn')
 const tesdiqBox= document.querySelector('.tesdiq')
 const tesdiqCross= document.querySelector('.tesdiq-cross')


//  window.addEventListener('load', ()=>{
//    tesdiqBox.classList.remove('aktivbox')
//  })
 muraciyyetbtn.addEventListener('click', (e)=>{
   //  e.preventdefault()
    tesdiqBox.classList.add('aktivbox')
    alert('salam')
 })
 
 tesdiqCross.addEventListener('click', ()=>{
    tesdiqBox.classList.remove('aktivbox')
 })