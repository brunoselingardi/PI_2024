
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar"); 
    const searchBtn = document.getElementById("search-btn"); 
    const gameContainers = document.querySelectorAll(".game-container"); 

    // Pesquisa.
    const searchGames = () => {
        const searchText = searchBar.value.toLowerCase().trim(); 
        
        gameContainers.forEach((container) => {
            const gameTitle = container.querySelector(".game-title").textContent.toLowerCase(); 
            
            // Exibe ou oculta os jogos.
            if (gameTitle.includes(searchText)) {
                container.style.display = "block"; 
            } else {
                container.style.display = "none";o
            }
        });
    };

    //Evento ao botão de pesquisa.
    searchBtn.addEventListener("click", searchGames);

    //Enter na barra.
    searchBar.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            searchGames();
        }
    });
});
