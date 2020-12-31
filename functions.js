const hidebox = document.querySelector('#hidebox');
var IgnorarElemento = document.getElementById('hidebox');

document.addEventListener('click', function(event) {
    var isClickInsideElement = IgnorarElemento.contains(event.target);
    if (!isClickInsideElement) {
        hidebox.checked = false;
        console.log("FUERA");
        //Do something click is outside specified element
    }
});