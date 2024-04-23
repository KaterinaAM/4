const button = document.getElementById('More');

button.addEventListener('click', function() {
    button.classList.add('More');

   
    setTimeout(function() {
        button.classList.remove('More');
    }, 500);
});

