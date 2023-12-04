document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        } else {
            alert('Dados enviados!');
            window.location.href = "dados.html";
            event.preventDefault();
        }
    });
});