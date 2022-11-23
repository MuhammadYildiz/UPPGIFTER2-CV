
// Change body mode
let mode = document.querySelector('.mode-btn');
let dark = document.querySelector('.main');

mode.addEventListener('click',changeMode);
function changeMode(){
    
    dark.classList.toggle('dark-mode');    
}

