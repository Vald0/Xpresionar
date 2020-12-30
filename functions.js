const h_js = document.querySelector('.h-js');
const ham = document.querySelector('.ham');
const hamburguesa = document.querySelector('.hamburguesa');
var menu = 0;

hamburguesa.addEventListener('click', () => {
    if (menu == 1) {
        ham.classList.remove('h_js');
        menu = 0;
    } else {
        ham.classList.add('h_js');
        menu = 1;
    }

})