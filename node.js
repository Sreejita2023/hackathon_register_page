const worker=document.querySelector('.worker')
const customer=document.querySelector('.customer')
const work_exp=document.querySelector('.work_exp')

worker.addEventListener('click',function(){
    worker.classList.add('active')
    work_exp.classList.remove('active')
    customer.classList.remove('active')
})
customer.addEventListener('click',function(){
    customer.classList.add('active')
    worker.classList.remove('active')
    work_exp.classList.add('active')
})
