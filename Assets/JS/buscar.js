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
                    <button onclick="adicionarALista()"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg></button>
                    <button onclick="favoritar()"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></button>
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

async function adicionarALista() {


}
