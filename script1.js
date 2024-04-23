const button = document.getElementById('btn');

button.addEventListener('click', function() {
    button.classList.add('btn');

   
    setTimeout(function() {
        button.classList.remove('btn');
    }, 500);
});