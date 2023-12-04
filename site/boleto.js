function shareWhatsApp() {
    // Adapte o número de telefone conforme necessário
    var phoneNumber = "1234567890";
    
    // Construa a URL do WhatsApp
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=Confira%20o%20boleto%20bancário%3A%20[INSIRA%20O%20CÓDIGO%20DE%20BARRAS%20AQUI]";
    
    // Abra a URL no WhatsApp
    window.open(whatsappURL);
}

function printBoleto() {
    // Oculta os elementos que não devem ser impressos
    var elementsToHide = document.querySelectorAll('.buttons, .print-button');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }

    // Exibe o botão de impressão
    var printButton = document.querySelector('.print-button');
    printButton.style.display = 'block';

    // Imprime a página
    window.print();

    // Restaura a exibição dos elementos ocultos após a impressão
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'block';
    }

    // Oculta novamente o botão de impressão
    printButton.style.display = 'none';
}