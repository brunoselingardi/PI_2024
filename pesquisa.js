// Função para filtrar jogos
function filterGames() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const gameContainers = document.querySelectorAll(".game-container");

    let hasResults = false; // Para verificar se há jogos visíveis

    gameContainers.forEach(container => {
        const gameTitle = container.querySelector(".game-title").textContent.toLowerCase();

        if (gameTitle.includes(searchInput)) {
            container.style.display = ""; // Mostra o jogo
            hasResults = true;
        } else {
            container.style.display = "none"; // Esconde o jogo
        }
    });

    // Exibe mensagem caso nenhum jogo corresponda
    if (!hasResults) {
        document.getElementById("no-results").style.display = "block";
    } else {
        document.getElementById("no-results").style.display = "none";
    }
}

// Adiciona eventos ao campo de pesquisa e ao botão
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const searchBtn = document.getElementById("search-btn");

    // Filtra ao digitar
    searchBar.addEventListener("input", filterGames);

    // Filtra ao clicar no botão
    searchBtn.addEventListener("click", filterGames);
});

// Adiciona elemento de mensagem "Nenhum resultado encontrado"
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const noResults = document.createElement("div");
    noResults.id = "no-results";
    noResults.textContent = "Nenhum jogo encontrado.";
    noResults.style.display = "none"; // Esconde por padrão
    noResults.style.color = "red";
    noResults.style.textAlign = "center";
    noResults.style.marginTop = "20px";
    main.appendChild(noResults);
});
