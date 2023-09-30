const html = document.querySelector('html');
const buttons = document.querySelectorAll('a')

html.addEventListener('click', (event) => {
    event.preventDefault()
  
    if(event.target.tagName == 'A') {
        if (event.target.textContent == 'Alugar') {
            console.log('aa')
            event.target.textContent = 'Devolver'
            event.target.classList.add('dashboard__item__button--return')
        } else {
            event.target.textContent = 'Alugar'
            event.target.classList.remove('dashboard__item__button--return')
            
        }
    }

    // console.log(buttons)
})