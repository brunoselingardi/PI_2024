// Animação de entrada
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        header.style.transition = '0.5s';
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 200);
});

// Modo claro/escuro
const toggleTheme = document.createElement('button');
toggleTheme.textContent = "Dark Mode";
toggleTheme.style.position = "fixed";
toggleTheme.style.bottom = "20px";
toggleTheme.style.right = "20px";
toggleTheme.style.padding = "10px";
toggleTheme.style.borderRadius = "5px";
toggleTheme.style.backgroundColor = "#7a6ad5";
toggleTheme.style.color = "#fff";
document.body.appendChild(toggleTheme);

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Adicionar estilos para o modo escuro
const style = document.createElement("style");
style.textContent = `
.dark {
    background: #121212;
    color: #f8f8ff;
}
.dark header {
    background: #1f1f1f;
}
.dark .pesquisa-form button {
    background: #6a5acd;
}
`;
document.head.appendChild(style);