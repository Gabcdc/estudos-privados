var bnt = window.document.querySelector('#show-or-hide');
var container = document.querySelector('.container');
function clicar(){
    if(container.style.display === 'block') {
    container.style.display = 'none';
} else {
    container.style.display = 'block' ;
}
}