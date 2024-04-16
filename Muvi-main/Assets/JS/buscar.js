// Função assíncrona para buscar os gêneros dos filmes na API do TMDb
async function fetchGenres() {
    // Chave de API do TMDb
    const apiKey = '3e7c136fdafbdffed510fb7d49ec111a';
    // URL da API para buscar os gêneros dos filmes
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`;

    // Faz uma requisição GET para a URL especificada
    const response = await fetch(url);
    // Converte a resposta em formato JSON
    const data = await response.json();
    // Retorna os gêneros dos filmes obtidos da resposta da API
    return data.genres;
}

// Função assíncrona para buscar os filmes e exibi-los
async function searchMovies() {
    // Chave de API do TMDb
    const apiKey = '3e7c136fdafbdffed510fb7d49ec111a';
    // Obtém o valor digitado pelo usuário no campo de busca
    const query = document.getElementById('searchInput').value;
    // URL da API para buscar os filmes com base na consulta do usuário
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    // Faz uma requisição GET para a URL especificada
    const response = await fetch(url);
    // Converte a resposta em formato JSON
    const data = await response.json();

    // Seleciona o elemento HTML onde os resultados serão exibidos
    const resultsDiv = document.getElementById('results');
    // Limpa quaisquer resultados anteriores
    resultsDiv.innerHTML = '';

    // Verifica se há resultados de filmes na resposta da API
    if (data.results && data.results.length > 0) {
        // Obtém a lista de filmes da resposta da API
        const movies = data.results;

        // Busca os gêneros dos filmes
        const genres = await fetchGenres();

        // Itera sobre cada filme obtido da API
        movies.forEach(movie => {
            // Obtém o título do filme
            const movieTitle = movie.title;
            // Obtém o caminho do pôster do filme (se disponível)
            const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'Sem imagem disponível';
            // Obtém os gêneros do filme e os formata como uma string separada por vírgulas
            const movieGenres = movie.genre_ids.map(genreId => {
                const genre = genres.find(genre => genre.id === genreId);
                return genre ? genre.name : 'Desconhecido';
            }).join(', ');

            // Cria um elemento HTML para exibir as informações do filme
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <h2>${movieTitle}</h2>
                <p>Gênero: ${movieGenres}</p>
                <img src="${moviePoster}" alt="${movieTitle}">
                <div class="actions">
                    <button onclick="onclick="adicionarALista('${movie.id}', '${movie.title}')"">Adicionar à lista</button>
                    <button onclick="favoritar()">Favoritar</button>
                </div>
            `;
            // Adiciona o elemento do filme ao elemento de resultados
            resultsDiv.appendChild(movieElement);
        });
    } else {
        // Se não houver resultados de filmes, exibe uma mensagem indicando isso
        resultsDiv.innerHTML = '<p>Nenhum resultado encontrado</p>';
    }
}

// Função para adicionar um filme à lista de filmes favoritos
function adicionarALista(movieId, movieTitle) {
    // Obtém a lista de filmes favoritos do localStorage (se existir)
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verifica se o filme já está na lista de favoritos
    const filmeJaAdicionado = favoritos.some(favorito => favorito.id === movieId);

    // Se o filme não estiver na lista de favoritos, adiciona-o
    if (!filmeJaAdicionado) {
        favoritos.push({ id: movieId, title: movieTitle });
        // Salva a lista de favoritos no localStorage
        localStorage.setItem('favoritos', JSON.stringify(favoritos));

        // Exibe uma mensagem de confirmação
        alert('Filme adicionado à lista de favoritos!');
    } else {
        // Se o filme já estiver na lista de favoritos, exibe uma mensagem de erro
        alert('Este filme já está na lista de favoritos!');
    }
}

