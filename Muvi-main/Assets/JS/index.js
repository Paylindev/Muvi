document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "https://images6.alphacoders.com/118/thumb-1920-1188254.jpg",
        "https://mrwallpaper.com/images/hd/fleabag-church-poster-8eevbyciljbddeza.jpg",
        "https://r4.wallpaperflare.com/wallpaper/631/58/426/coraline-cartoon-wallpaper-f263af6443cd513536ddc49028a2b05d.jpg", 
        "https://wallpapers.com/images/featured/spirited-away-glulkohud4k8bubt.jpg",
        "https://w.forfun.com/fetch/5b/5bda7f7dacec8077a2bd6e6cdf4de249.jpeg",
        "https://images5.alphacoders.com/606/606284.jpg",
        "https://sobresagas.com.br/wp-content/uploads/2022/08/advogada-ena.jpeg"
        
    ]; // Lista de URLs das imagens
    
    var imageSection = document.getElementById("gifMain");
    var currentIndex = 0;
    imageSection.style.backgroundImage = "url(" + images[0] + ")";
    
    function changeBackground() {
        
        currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem
        imageSection.style.backgroundImage = "url(" + images[currentIndex] + ")"; // Define a nova imagem de fundo
        imageElement.style.opacity = 0;

        setTimeout( function () {
            // imageElement.src = images[currentIndex]; // Define a nova imagem
            imageElement.style.opacity = 1; // Define a opacidade como 1 para completar a transição
        }, 500); // Tempo de espera para garantir que a transição ocorra depois de alterar a imagem
    }

    // Chama a função changeBackground a cada 5 segundos
    setInterval(changeBackground, 3500);
});