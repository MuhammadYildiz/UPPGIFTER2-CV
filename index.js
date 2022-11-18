
// Change body mode
let mode = document.querySelector('.mode-btn');

mode.addEventListener('click',changeMode);
function changeMode(){
    let dark = document.querySelector('.main');
    dark.classList.toggle('dark-mode');
}




