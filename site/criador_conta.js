
        // Aqui você pode adicionar o seu código JavaScript para adicionar interatividade à sua página.
        // Esta função gera uma cor aleatória em formato hexadecimal
        function randomColor() {
            let hex = Math.floor(Math.random() * 16777215).toString(16);
            return "#" + hex;
        }

        // Esta função muda a cor do texto do banner a cada segundo
        function changeBannerColor() {
            let bannerText = document.querySelector(".banner-text");
            bannerText.style.color = randomColor();
        }

        // Esta linha chama a função changeBannerColor a cada 1000 milissegundos (1 segundo)
        setInterval(changeBannerColor, 1000);