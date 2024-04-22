var imagens = [
    'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2016/11/anima1.jpg?fit=2764%2C1555&ssl=1', // Animais Fantásticos e onde habitam
    'https://s2.glbimg.com/dQ31Q7y15mkz7U9yWBssI3VmBvA=/top/e.glbimg.com/og/ed/f/original/2019/08/15/little-women-sony-pictures-1565716806.jpg', // Adoráveis Mulheres
    'https://w.forfun.com/fetch/e3/e39c3cf76ce1d4bd0297c8485c8f22a5.jpeg?w=1470&r=0.5625', // Wall-E
    'https://cdn.discordapp.com/attachments/1232003834335985694/1232005139661852762/8210f4f49223eff31e5893161799b170.png?ex=6627e1b2&is=66269032&hm=78af69a31445241014a7634a7c4b55531dc5c5432522943985cd1706200ef249&', // Coraline
    'https://wallpapers.com/images/featured/spirited-away-glulkohud4k8bubt.jpg', // A Viagem de Chihiro
    'https://w.forfun.com/fetch/5b/5bda7f7dacec8077a2bd6e6cdf4de249.jpeg', // Jogos Vorazes
    'https://br.web.img3.acsta.net/pictures/17/09/18/17/07/5522821.jpg', // Com amor Van Gogh
    'https://i0.wp.com/www.cinematorio.com.br/wp-content/uploads/2019/05/sombrasdavida01.jpg?fit=1280%2C853&ssl=1', // Sombras da Vida
    'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2022/08/30/cidade_de_deus_buscape-1jeyt4sdcawxc.jpg', //  Cidade de Deus
    'https://m.media-amazon.com/images/M/MV5BNzFjOWQwZTYtN2U5Mi00ZjU0LTgxOTYtNzY5NjAxNWViOTRiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg' // A Voz Suprema do Blues
]
var indiceAtual = 0
var divBackground = document.getElementById("gifMain")

// Função para pré-carregar as imagens
function preCarregarImagens() {
    for (var i = 0; i < imagens.length; i++) {
        var img = new Image()
        img.src = imagens[i]
    }
}
// Função para alterar o background do id gifMain: utilizados em index e login
function alterarBackground() {
    divBackground.style.backgroundImage = "url('" + imagens[indiceAtual] + "')"
    indiceAtual = (indiceAtual + 1) % imagens.length
}

// Pré-carregar as imagens antes de iniciar a transição
preCarregarImagens()

// Alterar background automaticamente a cada 5 segundos
setInterval(alterarBackground, 4000)

// Definir a primeira imagem
alterarBackground()