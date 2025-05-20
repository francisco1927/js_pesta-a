const target=document.querySelectorAll('[data-target]')
const content=document.querySelectorAll('[data-contet]')

target.forEach(target=>{
target.addEventListener('click',()=>{
    content.forEach(c=>{
        c.classList.remove('active')

    })
        contentt=document.querySelector(target.dataset.target)
        t.classList.add('active')

})
})