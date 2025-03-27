const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});
// Seleciona os elementos de input e select
const inputBusca = document.getElementById("input-busca");
const selectFiltro = document.getElementById("select-filtro");
const listaPokemon = document.querySelectorAll(".cartao-pokemon");

// Função para filtrar por nome ou número
inputBusca.addEventListener("input", () => {
    const termoBusca = inputBusca.value.toLowerCase();
    listaPokemon.forEach(pokemon => {
        const nome = pokemon.querySelector(".informacoes span:first-child").textContent.toLowerCase();
        const numero = pokemon.querySelector(".informacoes span:last-child").textContent.replace("#", "");
        
        if (nome.includes(termoBusca) || numero.includes(termoBusca)) {
            pokemon.style.display = "block";
        } else {
            pokemon.style.display = "none";
        }
    });
});

// Função para filtrar por tipo
selectFiltro.addEventListener("change", () => {
    const tipoSelecionado = selectFiltro.value;
    listaPokemon.forEach(pokemon => {
        const tipos = Array.from(pokemon.querySelectorAll(".tipo"));
        const temTipo = tipos.some(tipo => tipo.textContent.toLowerCase() === tipoSelecionado.toLowerCase());
        
        if (tipoSelecionado === "todos" || temTipo) {
            pokemon.style.display = "block";
        } else {
            pokemon.style.display = "none";
        }
    });
});

