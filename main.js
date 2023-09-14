const tituloPrincipal = document.createElement("h1") // Cria um elemento h1
tituloPrincipal.innerHTML = "Bem vindo ao JS" // Adiciona texto no elemento h1
tituloPrincipal.classList.add("tituloPrincipal") // Adiciona a classe tituloPrincipal ao p

const titulo2 = document.createElement("h2") // Cria um elemento h2
titulo2.innerHTML = "Criando elementos de forma dinâmica" // Adiciona texto no elemento h2
titulo2.classList.add("tituloSec") // Adiciona a classe "tituloSec" ao p

const paragrafo = document.createElement("p") // Cria um elemento p
paragrafo.innerHTML = "Esse é um exemplo clássico de geração de HTML com Javascript" // Adiciona texto no elemento p
paragrafo.classList.add("texto") // Adiciona a classe "texto" ao p

// Seleciona a div principal e adiciona os elementos como filhos da div principal;
let divPrincipal = document.getElementById("principal")
divPrincipal.appendChild(tituloPrincipal)
divPrincipal.appendChild(titulo2)
divPrincipal.appendChild(paragrafo)