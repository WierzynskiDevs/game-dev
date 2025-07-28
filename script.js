let currentLevel = 1;
let userCommands = [];
let selectedTrack = '';
let currentTrackData = {};

// DADOS DAS TRILHAS
const tracks = {
    javascript: {
        name: "JavaScript",
        icon: "🟨",
        character: "💻",
        levels: [
            // NÍVEL 1 - VARIÁVEIS
            {
                story: "🌟 Bem-vindo ao Reino do JavaScript!\n\nVocê é um desenvolvedor web em treinamento. Sua missão é dominar a linguagem que controla toda a web!\n\nPrimeiro Desafio: Crie sua primeira variável para armazenar o nome do herói. Use 'let' para declarar variáveis em JavaScript!",
                concept: "Variáveis",
                explanation: "VARIÁVEIS são 'caixas' que guardam dados! Em JavaScript, usamos 'let' para criar variáveis que podem mudar de valor, 'const' para valores fixos. É como dar um nome para um valor que queremos usar depois.",
                solution: ['let nomeHeroi = "Aventureiro";', 'console.log(nomeHeroi);'],
                success: "🎉 Perfeito! Você criou sua primeira variável em JavaScript!\n\nVariáveis são fundamentais - elas guardam informações que seu programa pode usar e modificar. O 'let' cria uma variável que pode ser alterada depois!",
                commands: ['let nomeHeroi = "Aventureiro";', 'console.log(nomeHeroi);', 'const PI = 3.14;', 'let idade = 25;', 'var antigo = "evite";']
            },
    
            // NÍVEL 2 - TIPOS DE DADOS
            {
                story: "📊 Excelente! Agora vamos conhecer os tipos de dados.\n\nSegundo Desafio: JavaScript trabalha com diferentes tipos! Crie uma variável com número 'let pontos = 100', uma com texto 'let status = \"ativo\"' e uma booleana 'let vivo = true'.",
                concept: "Tipos de Dados",
                explanation: "TIPOS DE DADOS definem que tipo de informação uma variável guarda! Numbers (números), Strings (texto), Booleans (verdadeiro/falso), Arrays (listas) e Objects (objetos). Cada tipo tem suas características!",
                solution: ['let pontos = 100;', 'let status = "ativo";', 'let vivo = true;', 'console.log(typeof pontos);'],
                success: "🔢 Fantástico! Você dominou os tipos básicos do JavaScript!\n\nEntender tipos de dados é crucial! Numbers para cálculos, Strings para texto, Booleans para lógica. JavaScript é dinâmico e flexível!",
                commands: ['let pontos = 100;', 'let status = "ativo";', 'let vivo = true;', 'console.log(typeof pontos);', 'let lista = [];', 'let objeto = {};']
            },
    
            // NÍVEL 3 - FUNÇÕES BÁSICAS
            {
                story: "💻 Incrível! Agora vamos criar funções.\n\nTerceiro Desafio: O herói precisa de uma função para calcular danos! Crie uma função chamada 'calcularDano' que recebe um parâmetro 'ataque' e retorna o valor multiplicado por 2.",
                concept: "Funções Básicas",
                explanation: "FUNÇÕES são blocos de código reutilizáveis! Você define uma vez e pode usar muitas vezes. Em JavaScript, usamos 'function nome(parâmetros) { código }'. Elas organizam e simplificam o código!",
                solution: ['function calcularDano(ataque) {', 'return ataque * 2;', '}', 'console.log(calcularDano(10));'],
                success: "⚡ Sensacional! Sua função está funcionando perfeitamente!\n\nFunções são o coração do JavaScript! Elas organizam o código, evitam repetição e tornam tudo mais limpo e reutilizável!",
                commands: ['function calcularDano(ataque) {', 'return ataque * 2;', '}', 'console.log(calcularDano(10));', 'let resultado = calcularDano(5);']
            },
    
            // NÍVEL 4 - CONDICIONAIS
            {
                story: "🤔 Perfeito! Vamos tomar decisões inteligentes.\n\nQuarto Desafio: O herói precisa verificar se tem energia suficiente! Use 'if (energia >= 50)' para verificar se energia é maior ou igual a 50, e exiba mensagens diferentes para cada caso.",
                concept: "Condicionais (if/else)",
                explanation: "CONDICIONAIS fazem programas tomarem decisões! 'if' verifica uma condição, 'else' define o que fazer se for falsa, 'else if' adiciona mais opções. É como dar inteligência ao código!",
                solution: ['let energia = 75;', 'if (energia >= 50) {', 'console.log("Energia suficiente!");', '} else {', 'console.log("Energia baixa!");', '}'],
                success: "🧠 Excelente! Seu programa agora toma decisões inteligentes!\n\nCondicionais são fundamentais na programação. Elas permitem que o código se adapte a diferentes situações automaticamente!",
                commands: ['let energia = 75;', 'if (energia >= 50) {', 'console.log("Energia suficiente!");', '} else {', 'console.log("Energia baixa!");', '}', 'else if (energia > 25) {']
            },
    
            // NÍVEL 5 - LOOPS
            {
                story: "🔄 Fantástico! Vamos automatizar tarefas repetitivas.\n\nQuinto Desafio: O herói precisa coletrar 5 moedas! Use um loop 'for' para contar de 1 até 5 e exibir 'Moeda coletada: X' para cada iteração.",
                concept: "Loops (for)",
                explanation: "LOOPS fazem o computador repetir tarefas automaticamente! 'for' é perfeito para repetições com contador, 'while' para condições. Em vez de escrever código repetido, use loops!",
                solution: ['for (let i = 1; i <= 5; i++) {', 'console.log("Moeda coletada: " + i);', '}'],
                success: "🪙 Incrível! Você automatizou a coleta de moedas!\n\nLoops são uma das ferramentas mais poderosas da programação. Eles fazem o computador trabalhar para você, executando tarefas repetitivas sem erros!",
                commands: ['for (let i = 1; i <= 5; i++) {', 'console.log("Moeda coletada: " + i);', '}', 'let contador = 0;', 'while (contador < 3) {']
            },
    
            // NÍVEL 6 - ARRAYS
            {
                story: "📋 Sensacional! Vamos organizar dados em listas.\n\nSexto Desafio: Crie um inventário do herói! Declare 'let inventario = [\"espada\", \"poção\", \"escudo\"]' e use 'inventario.push(\"moeda\")' para adicionar um item.",
                concept: "Arrays (Listas)",
                explanation: "ARRAYS são listas que guardam múltiplos valores! Você pode adicionar (push), remover (pop), acessar por posição [0] e muito mais. É como ter uma caixa organizada com vários compartimentos!",
                solution: ['let inventario = ["espada", "poção", "escudo"];', 'inventario.push("moeda");', 'console.log(inventario);', 'console.log(inventario[0]);'],
                success: "🎒 Perfeito! Você criou e manipulou seu primeiro array!\n\nArrays são essenciais para organizar dados. Agora você pode trabalhar com listas de qualquer tamanho de forma eficiente!",
                commands: ['let inventario = ["espada", "poção", "escudo"];', 'inventario.push("moeda");', 'console.log(inventario);', 'console.log(inventario[0]);', 'inventario.pop();']
            },
    
            // NÍVEL 7 - OBJETOS
            {
                story: "🏛️ Excelente! Vamos criar estruturas de dados complexas.\n\nSétimo Desafio: Crie um objeto para representar o herói! Use 'let heroi = { nome: \"Link\", vida: 100, nivel: 1 }' e acesse uma propriedade com 'heroi.nome'.",
                concept: "Objetos",
                explanation: "OBJETOS agrupam dados relacionados em propriedades! Como uma ficha de personagem: nome, vida, nível. Usamos chaves {} e acessamos com ponto (.) ou colchetes []. É organização avançada de dados!",
                solution: ['let heroi = {', 'nome: "Link",', 'vida: 100,', 'nivel: 1', '};', 'console.log(heroi.nome);'],
                success: "🦸‍♂️ Fantástico! Você criou seu primeiro objeto JavaScript!\n\nObjetos são fundamentais na programação moderna. Eles permitem modelar entidades do mundo real no código!",
                commands: ['let heroi = {', 'nome: "Link",', 'vida: 100,', 'nivel: 1', '};', 'console.log(heroi.nome);', 'heroi.experiencia = 0;']
            },
    
            // NÍVEL 8 - MÉTODOS DE OBJETOS
            {
                story: "⚔️ Incrível! Vamos adicionar comportamentos aos objetos.\n\nOitavo Desafio: Adicione um método ao herói! Crie 'atacar: function() { return this.nome + \" ataca!\"; }' dentro do objeto herói e chame com 'heroi.atacar()'.",
                concept: "Métodos de Objetos",
                explanation: "MÉTODOS são funções dentro de objetos! Eles definem o que o objeto pode fazer. 'this' se refere ao próprio objeto. É como dar superpoderes aos seus objetos!",
                solution: ['let heroi = {', 'nome: "Link",', 'atacar: function() {', 'return this.nome + " ataca!";', '}', '};', 'console.log(heroi.atacar());'],
                success: "⚡ Sensacional! Seu objeto agora tem comportamentos!\n\nMétodos transformam objetos passivos em entidades ativas. Agora seus objetos podem executar ações complexas!",
                commands: ['let heroi = {', 'nome: "Link",', 'atacar: function() {', 'return this.nome + " ataca!";', '}', '};', 'console.log(heroi.atacar());']
            },
    
            // NÍVEL 9 - DOM MANIPULATION
            {
                story: "🌐 Perfeito! Vamos controlar páginas web!\n\nNono Desafio: Manipule o DOM! Use 'let elemento = document.getElementById(\"heroi\")' para selecionar um elemento e 'elemento.textContent = \"Herói Poderoso!\"' para alterar seu texto.",
                concept: "Manipulação do DOM",
                explanation: "DOM (Document Object Model) é como JavaScript vê e modifica páginas web! Você pode selecionar elementos, alterar conteúdo, estilos e estrutura. É a ponte entre JavaScript e HTML!",
                solution: ['let elemento = document.getElementById("heroi");', 'elemento.textContent = "Herói Poderoso!";'],
                success: "🎯 Incrível! Você dominou a manipulação do DOM!\n\nIsso é JavaScript real! Agora você pode fazer páginas web interativas, alterando conteúdo e estilos dinamicamente!",
                commands: ['let elemento = document.getElementById("heroi");', 'elemento.textContent = "Herói Poderoso!";', 'elemento.style.color = "red";', 'document.querySelector(".classe");', 'elemento.classList.add("ativo");']
            },
    
            // NÍVEL 10 - EVENTOS
            {
                story: "👆 Sensacional! Vamos reagir a interações do usuário.\n\nDécimo Desafio: Adicione interatividade! Use 'elemento.addEventListener(\"click\", function() { alert(\"Clicou!\"); })' para responder ao clique do usuário.",
                concept: "Eventos",
                explanation: "EVENTOS fazem páginas responderem ao usuário! Click, hover, scroll, teclado - tudo são eventos. addEventListener 'escuta' eventos e executa código quando eles acontecem!",
                solution: ['let botao = document.getElementById("botao");', 'botao.addEventListener("click", function() {', 'alert("Botão clicado!");', '});'],
                success: "🖱️ Fantástico! Sua página agora responde ao usuário!\n\nEventos são o que fazem a web interativa. Agora você pode criar experiências ricas e responsivas!",
                commands: ['let botao = document.getElementById("botao");', 'botao.addEventListener("click", function() {', 'alert("Botão clicado!");', '});', 'addEventListener("keydown", function(e) {']
            },
    
            // NÍVEL 11 - ARROW FUNCTIONS
            {
                story: "🏹 Excelente! Vamos modernizar nossas funções.\n\nDécimo Primeiro Desafio: Use arrow functions! Converta a função tradicional para arrow function: 'const somar = (a, b) => a + b' e teste com 'console.log(somar(5, 3))'.",
                concept: "Arrow Functions",
                explanation: "ARROW FUNCTIONS são uma forma moderna e concisa de escrever funções! Usam '=>' em vez de 'function'. São mais curtas e têm comportamento especial com 'this'. Sintaxe do JavaScript moderno!",
                solution: ['const somar = (a, b) => a + b;', 'console.log(somar(5, 3));'],
                success: "🎯 Perfeito! Você modernizou suas funções!\n\nArrow functions tornam o código mais limpo e são padrão no JavaScript moderno. Você está evoluindo como desenvolvedor!",
                commands: ['const somar = (a, b) => a + b;', 'console.log(somar(5, 3));', 'const quadrado = x => x * x;', 'const listar = () => console.log("Lista");']
            },
    
            // NÍVEL 12 - MÉTODOS DE ARRAY
            {
                story: "🔧 Incrível! Vamos dominar manipulação avançada de arrays.\n\nDécimo Segundo Desafio: Use métodos modernos! Com o array '[1, 2, 3, 4, 5]', use 'numeros.map(x => x * 2)' para dobrar todos os valores e 'filter(x => x > 6)' para filtrar os maiores que 6.",
                concept: "Métodos de Array",
                explanation: "MÉTODOS DE ARRAY são superpoderes para listas! map() transforma elementos, filter() filtra por condição, reduce() combina elementos. É programação funcional e muito poderosa!",
                solution: ['let numeros = [1, 2, 3, 4, 5];', 'let dobrados = numeros.map(x => x * 2);', 'let filtrados = dobrados.filter(x => x > 6);', 'console.log(filtrados);'],
                success: "🚀 Sensacional! Você dominou métodos modernos de array!\n\nEsses métodos são essenciais no JavaScript moderno. Agora você pode manipular dados de forma elegante e funcional!",
                commands: ['let numeros = [1, 2, 3, 4, 5];', 'let dobrados = numeros.map(x => x * 2);', 'let filtrados = dobrados.filter(x => x > 6);', 'console.log(filtrados);', 'numeros.forEach(x => console.log(x));']
            },
    
            // NÍVEL 13 - DESTRUCTURING
            {
                story: "📦 Fantástico! Vamos desempacotar dados de forma elegante.\n\nDécimo Terceiro Desafio: Use destructuring! Com 'let pessoa = {nome: \"Ana\", idade: 25}', extraia as propriedades usando 'let {nome, idade} = pessoa' e exiba no console.",
                concept: "Destructuring",
                explanation: "DESTRUCTURING extrai valores de objetos e arrays de forma elegante! Em vez de pessoa.nome, você pode usar {nome} = pessoa. É sintaxe moderna que torna o código mais limpo!",
                solution: ['let pessoa = {nome: "Ana", idade: 25};', 'let {nome, idade} = pessoa;', 'console.log(nome, idade);'],
                success: "✨ Perfeito! Você dominou destructuring!\n\nDestructuring é uma das funcionalidades mais elegantes do JavaScript moderno. Código mais limpo e legível!",
                commands: ['let pessoa = {nome: "Ana", idade: 25};', 'let {nome, idade} = pessoa;', 'console.log(nome, idade);', 'let [a, b] = [1, 2];', 'let {nome: nomeCompleto} = pessoa;']
            },
    
            // NÍVEL 14 - TEMPLATE LITERALS
            {
                story: "💬 Excelente! Vamos criar strings dinâmicas modernas.\n\nDécimo Quarto Desafio: Use template literals! Crie uma mensagem dinâmica com 'let nome = \"João\"' e 'let mensagem = `Olá, ${nome}! Você tem ${2 + 3} moedas.`'",
                concept: "Template Literals",
                explanation: "TEMPLATE LITERALS usam crases (`) e ${} para interpolar variáveis! Muito mais poderoso que concatenação com +. Permite múltiplas linhas e expressões complexas!",
                solution: ['let nome = "João";', 'let moedas = 5;', 'let mensagem = `Olá, ${nome}! Você tem ${moedas} moedas.`;', 'console.log(mensagem);'],
                success: "📝 Incrível! Você modernizou a criação de strings!\n\nTemplate literals são muito mais poderosos e legíveis que concatenação tradicional. JavaScript moderno em ação!",
                commands: ['let nome = "João";', 'let moedas = 5;', 'let mensagem = `Olá, ${nome}! Você tem ${moedas} moedas.`;', 'console.log(mensagem);', 'let multiline = `Linha 1\nLinha 2`;']
            },
    
            // NÍVEL 15 - PROMISES
            {
                story: "⏳ Sensacional! Vamos trabalhar com código assíncrono.\n\nDécimo Quinto Desafio: Crie uma Promise! Use 'new Promise((resolve, reject) => { setTimeout(() => resolve(\"Sucesso!\"), 1000); })' e consuma com '.then()'.",
                concept: "Promises",
                explanation: "PROMISES lidam com operações assíncronas! Como pedidos que levam tempo para completar. resolve() para sucesso, reject() para erro, .then() para quando completar. Essencial para APIs!",
                solution: ['let promessa = new Promise((resolve, reject) => {', 'setTimeout(() => resolve("Missão completa!"), 1000);', '});', 'promessa.then(resultado => console.log(resultado));'],
                success: "⚡ Fantástico! Você dominou programação assíncrona!\n\nPromises são fundamentais no JavaScript moderno. Agora você pode lidar com APIs, arquivos e operações que levam tempo!",
                commands: ['let promessa = new Promise((resolve, reject) => {', 'setTimeout(() => resolve("Missão completa!"), 1000);', '});', 'promessa.then(resultado => console.log(resultado));', '.catch(erro => console.log(erro));']
            },
    
            // NÍVEL 16 - ASYNC/AWAIT
            {
                story: "🚀 Perfeito! Vamos simplificar código assíncrono.\n\nDécimo Sexto Desafio: Use async/await! Crie 'async function buscarDados() { let resultado = await promessa; return resultado; }' e chame a função.",
                concept: "Async/Await",
                explanation: "ASYNC/AWAIT simplifica Promises! 'async' marca função assíncrona, 'await' espera Promise resolver. Código assíncrono que parece síncrono - muito mais legível!",
                solution: ['async function buscarDados() {', 'let promessa = new Promise(resolve => setTimeout(() => resolve("Dados!"), 500));', 'let resultado = await promessa;', 'return resultado;', '}', 'buscarDados().then(dados => console.log(dados));'],
                success: "⭐ Sensacional! Você simplificou código assíncrono!\n\nAsync/await é a forma mais moderna e limpa de lidar com operações assíncronas. Código mais legível e maintível!",
                commands: ['async function buscarDados() {', 'let resultado = await promessa;', 'return resultado;', '}', 'buscarDados().then(dados => console.log(dados));', 'try { await operacao(); } catch(e) {}']
            },
    
            // NÍVEL 17 - CLASSES
            {
                story: "🏗️ Incrível! Vamos criar classes para organizar código.\n\nDécimo Sétimo Desafio: Crie uma classe! 'class Heroi { constructor(nome) { this.nome = nome; } falar() { return `${this.nome} fala!`; } }' e instancie com 'new Heroi(\"Link\")'.",
                concept: "Classes",
                explanation: "CLASSES são moldes para criar objetos! constructor() inicializa, métodos definem comportamentos. É programação orientada a objetos - organização avançada de código!",
                solution: ['class Heroi {', 'constructor(nome) {', 'this.nome = nome;', '}', 'falar() {', 'return `${this.nome} fala!`;', '}', '}', 'let heroi = new Heroi("Link");', 'console.log(heroi.falar());'],
                success: "🏛️ Fantástico! Você criou sua primeira classe!\n\nClasses organizam código de forma profissional. Agora você pode criar estruturas complexas e reutilizáveis!",
                commands: ['class Heroi {', 'constructor(nome) {', 'this.nome = nome;', '}', 'falar() {', 'return `${this.nome} fala!`;', '}', '}', 'let heroi = new Heroi("Link");', 'console.log(heroi.falar());']
            },
    
            // NÍVEL 18 - MODULES
            {
                story: "📦 Excelente! Vamos modularizar o código.\n\nDécimo Oitavo Desafio: Use módulos! Crie 'export const saudar = nome => `Olá, ${nome}!`' e depois 'import { saudar } from \"./modulo.js\"' para usar em outro arquivo.",
                concept: "Módulos ES6",
                explanation: "MÓDULOS organizam código em arquivos separados! export expõe funções, import traz de outros arquivos. Código organizado, reutilizável e maintível. Padrão moderno!",
                solution: ['// No arquivo utils.js', 'export const saudar = nome => `Olá, ${nome}!`;', 'export const somar = (a, b) => a + b;', '', '// No arquivo principal', 'import { saudar, somar } from "./utils.js";', 'console.log(saudar("Mundo"));'],
                success: "🎯 Perfeito! Você modularizou seu código!\n\nMódulos são essenciais em projetos grandes. Código organizado, testável e reutilizável. Desenvolvimento profissional!",
                commands: ['export const saudar = nome => `Olá, ${nome}!`;', 'export const somar = (a, b) => a + b;', 'import { saudar } from "./utils.js";', 'export default class Heroi {}', 'import Heroi from "./heroi.js";']
            },
    
            // NÍVEL 19 - FETCH API
            {
                story: "🌐 Sensacional! Vamos conectar com APIs externas.\n\nDécimo Nono Desafio: Use Fetch API! Crie 'fetch(\"https://jsonplaceholder.typicode.com/posts/1\").then(response => response.json()).then(data => console.log(data))' para buscar dados de uma API.",
                concept: "Fetch API",
                explanation: "FETCH API permite comunicação com servidores! Busca dados de APIs, envia informações, trabalha com JSON. É como seu código conversar com o mundo exterior!",
                solution: ['fetch("https://jsonplaceholder.typicode.com/posts/1")', '.then(response => response.json())', '.then(data => {', 'console.log("Título:", data.title);', 'console.log("Conteúdo:", data.body);', '})'], 
                success: "🌍 Incrível! Você conectou seu código com o mundo exterior!\n\nFetch API é essencial para aplicações modernas. Agora você pode trabalhar com dados reais de qualquer lugar do mundo!",
                commands: ['fetch("https://jsonplaceholder.typicode.com/posts/1")', '.then(response => response.json())', '.then(data => console.log(data))', 'console.log("Título:", data.title);', '.catch(error => console.log(error));']
            },
    
            // NÍVEL 20 - PROJETO FINAL AVANÇADO
            {
                story: "🏆 DESAFIO FINAL ÉPICO!\n\nVocê chegou ao último nível! Crie uma aplicação completa que integre tudo: uma classe Gerenciador que use async/await para buscar dados, manipule o DOM, use eventos, template literals e módulos.\n\nMostre que você é um mestre do JavaScript moderno!",
                concept: "Projeto Integrado Full-Stack",
                explanation: "PROJETO FINAL integra todos os conceitos avançados! Classes, async/await, DOM manipulation, eventos, fetch API, template literals - tudo trabalhando em harmonia. É o teste definitivo do seu domínio JavaScript!",
                solution: ['class AppManager {', 'constructor() {', 'this.dados = [];', 'this.initEvents();', '}', '', 'async fetchData() {', 'try {', 'const response = await fetch("https://jsonplaceholder.typicode.com/users");', 'this.dados = await response.json();', 'this.renderData();', '} catch (error) {', 'console.error("Erro:", error);', '}', '}', '', 'renderData() {', 'const container = document.getElementById("container");', 'container.innerHTML = this.dados.map(user => ', '`<div class="user-card">${user.name} - ${user.email}</div>`', ').join("");', '}', '', 'initEvents() {', 'document.getElementById("loadBtn").addEventListener("click", () => this.fetchData());', '}', '}', '', 'const app = new AppManager();'],
                success: "🎉🏆 PARABÉNS, MESTRE DO JAVASCRIPT! 🏆🎉\n\nVocê completou todos os 20 níveis e se tornou um verdadeiro especialista em JavaScript! Dominou desde variáveis básicas até aplicações full-stack complexas.\n\nAgora você pode criar:\n• Aplicações web interativas\n• APIs e integrações\n• Código modular e maintível\n• Interfaces dinâmicas\n• Programação assíncrona avançada\n\nSeu conhecimento em JavaScript é agora de nível SÊNIOR! 🚀⭐✨",
                commands: ['class AppManager {', 'constructor() {', 'this.dados = [];', '}', 'async fetchData() {', 'const response = await fetch(url);', 'this.dados = await response.json();', '}', 'renderData() {', 'container.innerHTML = template;', '}', 'initEvents() {', 'btn.addEventListener("click", handler);', '}', '}', 'const app = new AppManager();']
            }
        ]
    },
    logic: {
        name: "Lógica de Programação",
        icon: "🧠",
        character: "🤖",
        levels: [
            // NÍVEL 1 - COMANDOS BÁSICOS
            {
                story: "🧠 Bem-vindo ao Reino da Lógica!\n\nVocê é um jovem programador aprendendo a pensar como um computador. Sua missão é dominar os fundamentos do pensamento computacional!\n\nPrimeiro Desafio: O robô precisa se mover para frente. Use o comando básico 'mover()' para fazer ele dar um passo!",
                concept: "Comandos Básicos",
                explanation: "ALGORITMOS começam com comandos simples! Cada instrução faz o computador executar uma ação específica. É como dar direções muito precisas para alguém que segue exatamente o que você fala.",
                solution: ['mover()'],
                success: "🎯 Perfeito! Você executou seu primeiro comando!\n\nProgramação é sobre dar instruções claras e precisas. Cada comando tem um propósito específico e o computador os executa na ordem exata!",
                commands: ['mover()', 'pular()', 'pegar()', 'esperar()', 'virar_direita()']
            },
    
            // NÍVEL 2 - SEQUÊNCIA DE COMANDOS
            {
                story: "🎯 Excelente! Agora vamos criar uma sequência de ações.\n\nSegundo Desafio: O robô precisa pegar uma moeda que está à frente! Execute a sequência: mover para frente, depois pegar a moeda. Use 'mover()' seguido de 'pegar()'.",
                concept: "Sequência de Comandos",
                explanation: "SEQUÊNCIA é a ordem dos comandos! O computador executa um comando por vez, na ordem exata que você escreve. Como uma receita: primeiro faça isso, depois aquilo.",
                solution: ['mover()', 'pegar()'],
                success: "🪙 Fantástico! Você criou sua primeira sequência lógica!\n\nSequência é um dos pilares da programação. A ordem dos comandos é fundamental - mude a ordem e o resultado muda!",
                commands: ['mover()', 'pegar()', 'pular()', 'virar_direita()', 'virar_esquerda()']
            },
    
            // NÍVEL 3 - REPETIÇÃO SIMPLES
            {
                story: "🔄 Incrível! Agora vamos automatizar tarefas repetitivas.\n\nTerceiro Desafio: Há 3 moedas em linha reta. Em vez de escrever 'mover(), pegar()' três vezes, use 'repetir(3)' para executar os comandos 3 vezes automaticamente!",
                concept: "Repetição (Loops)",
                explanation: "REPETIÇÃO evita escrever o mesmo código várias vezes! 'repetir(X)' executa os comandos dentro dele X vezes. É automação pura - deixe o computador fazer o trabalho pesado!",
                solution: ['repetir(3)', 'mover()', 'pegar()', 'fim_repetir'],
                success: "⚡ Sensacional! Você automatizou uma tarefa repetitiva!\n\nLoops são uma das ferramentas mais poderosas da programação. Eles fazem o computador trabalhar para você, executando tarefas repetitivas sem erros!",
                commands: ['repetir(3)', 'mover()', 'pegar()', 'fim_repetir', 'virar_direita()']
            },
    
            // NÍVEL 4 - CONDIÇÕES SIMPLES
            {
                story: "🤔 Perfeito! Vamos tomar decisões inteligentes.\n\nQuarto Desafio: Há uma parede à frente! O robô precisa verificar se pode andar. Use 'se(caminho_livre)' para verificar se o caminho está livre antes de mover.",
                concept: "Condições (If)",
                explanation: "CONDIÇÕES fazem programas 'pensarem'! 'SE' uma condição for verdadeira, ENTÃO execute os comandos. É como dar ao computador a capacidade de analisar situações!",
                solution: ['se(caminho_livre)', 'mover()', 'fim_se'],
                success: "🧩 Excelente! Seu programa tomou uma decisão inteligente!\n\nCondições são o que fazem programas parecerem 'inteligentes'. Eles analisam situações e escolhem a melhor ação!",
                commands: ['se(caminho_livre)', 'mover()', 'fim_se', 'se(tem_moeda)', 'pegar()']
            },
    
            // NÍVEL 5 - IF/ELSE
            {
                story: "⚖️ Fantástico! Vamos criar alternativas.\n\nQuinto Desafio: Há duas portas - uma à direita e outra à esquerda. Se a porta direita estiver aberta, vá por ela. Senão, vá pela esquerda. Use 'se...senao'!",
                concept: "Condições com Alternativa (If/Else)",
                explanation: "IF/ELSE oferece duas opções! 'SE isso for verdade, ENTÃO faça aquilo, SENÃO faça outra coisa'. É como ter um plano A e um plano B sempre prontos!",
                solution: ['se(porta_direita_aberta)', 'virar_direita()', 'mover()', 'senao', 'virar_esquerda()', 'mover()', 'fim_se'],
                success: "🚪 Incrível! Seu programa sempre tem uma solução!\n\nIf/Else garante que seu programa sempre saiba o que fazer, independente da situação. Planejamento inteligente!",
                commands: ['se(porta_direita_aberta)', 'virar_direita()', 'mover()', 'senao', 'virar_esquerda()', 'fim_se']
            },
    
            // NÍVEL 6 - LOOPS COM CONDIÇÕES
            {
                story: "🔍 Sensacional! Vamos combinar repetição com decisões.\n\nSexto Desafio: Colete todas as moedas em um corredor! Use 'enquanto(tem_moeda)' para repetir 'pegar()' e 'mover()' até não haver mais moedas.",
                concept: "Loops Condicionais (While)",
                explanation: "WHILE repete ENQUANTO uma condição for verdadeira! Diferente do 'repetir(X)', aqui não sabemos quantas vezes vai repetir - depende da condição. É repetição inteligente!",
                solution: ['enquanto(tem_moeda)', 'pegar()', 'mover()', 'fim_enquanto'],
                success: "🎰 Perfeito! Você criou um loop adaptativo!\n\nWhile loops se adaptam à situação. Eles param automaticamente quando a condição muda. Automação verdadeiramente inteligente!",
                commands: ['enquanto(tem_moeda)', 'pegar()', 'mover()', 'fim_enquanto', 'enquanto(caminho_livre)']
            },
    
            // NÍVEL 7 - VARIÁVEIS
            {
                story: "📊 Excelente! Vamos começar a contar e memorizar.\n\nSétimo Desafio: O robô precisa contar quantas moedas coletou! Crie uma variável 'moedas = 0', depois use 'moedas = moedas + 1' cada vez que pegar uma moeda.",
                concept: "Variáveis e Contadores",
                explanation: "VARIÁVEIS são a 'memória' do programa! Elas guardam informações que podem mudar. Um contador é uma variável que aumenta de valor - como um placar que vai subindo!",
                solution: ['moedas = 0', 'repetir(3)', 'pegar()', 'moedas = moedas + 1', 'mover()', 'fim_repetir', 'mostrar(moedas)'],
                success: "🧮 Fantástico! Seu programa agora tem memória!\n\nVariáveis transformam programas simples em sistemas inteligentes. Agora você pode contar, calcular e lembrar informações!",
                commands: ['moedas = 0', 'moedas = moedas + 1', 'mostrar(moedas)', 'repetir(3)', 'pegar()', 'mover()']
            },
    
            // NÍVEL 8 - FUNÇÕES BÁSICAS
            {
                story: "🔧 Incrível! Vamos organizar código em blocos reutilizáveis.\n\nOitavo Desafio: Crie uma função para coletar moeda! Defina 'funcao coletarMoeda()' que executa 'mover()' e 'pegar()', depois use 'coletarMoeda()' três vezes.",
                concept: "Funções Básicas",
                explanation: "FUNÇÕES são blocos de código reutilizáveis! Como criar sua própria ferramenta personalizada. Defina uma vez, use quantas vezes quiser. Organização e reutilização!",
                solution: ['funcao coletarMoeda()', 'mover()', 'pegar()', 'fim_funcao', 'repetir(3)', 'coletarMoeda()', 'fim_repetir'],
                success: "⚙️ Sensacional! Você criou sua primeira ferramenta personalizada!\n\nFunções organizam código e evitam repetição. Agora você pode criar soluções modulares e elegantes!",
                commands: ['funcao coletarMoeda()', 'mover()', 'pegar()', 'fim_funcao', 'coletarMoeda()', 'repetir(3)']
            },
    
            // NÍVEL 9 - PARÂMETROS
            {
                story: "📝 Perfeito! Vamos tornar funções mais flexíveis.\n\nNono Desafio: Crie uma função que recebe parâmetros! Defina 'funcao moverX(passos)' que usa 'repetir(passos)' para mover uma quantidade variável de passos.",
                concept: "Funções com Parâmetros",
                explanation: "PARÂMETROS tornam funções flexíveis! Como variáveis que mudam cada vez que você chama a função. Uma função, múltiplas possibilidades. É customização inteligente!",
                solution: ['funcao moverX(passos)', 'repetir(passos)', 'mover()', 'fim_repetir', 'fim_funcao', 'moverX(5)', 'moverX(2)'],
                success: "🎛️ Incrível! Suas funções agora são personalizáveis!\n\nParâmetros transformam funções rígidas em ferramentas flexíveis. Uma função pode resolver múltiplos problemas similares!",
                commands: ['funcao moverX(passos)', 'repetir(passos)', 'mover()', 'fim_funcao', 'moverX(5)', 'moverX(2)']
            },
    
            // NÍVEL 10 - LÓGICA BOOLEANA
            {
                story: "🔍 Fantástico! Vamos trabalhar com lógica verdadeiro/falso.\n\nDécimo Desafio: Use operadores lógicos! Se 'tem_chave E porta_fechada', então use a chave. Use 'se(tem_chave E porta_fechada)' para combinar condições.",
                concept: "Lógica Booleana (AND/OR)",
                explanation: "LÓGICA BOOLEANA combina condições! 'E' (AND) - ambas devem ser verdade, 'OU' (OR) - pelo menos uma deve ser verdade. Como o cérebro humano analisa situações complexas!",
                solution: ['se(tem_chave E porta_fechada)', 'usar_chave()', 'abrir_porta()', 'fim_se', 'mover()'],
                success: "🧠 Extraordinário! Você dominou lógica complexa!\n\nLógica booleana permite análises sofisticadas. Agora seus programas podem tomar decisões baseadas em múltiplas condições!",
                commands: ['se(tem_chave E porta_fechada)', 'usar_chave()', 'se(tem_moeda OU tem_gema)', 'abrir_porta()', 'fim_se']
            },
    
            // NÍVEL 11 - CONDIÇÕES ANINHADAS
            {
                story: "🏗️ Excelente! Vamos criar decisões dentro de decisões.\n\nDécimo Primeiro Desafio: Navegue por um labirinto! Se o caminho da frente estiver livre, mova. Senão, se a direita estiver livre, vire à direita. Senão, vire à esquerda.",
                concept: "Condições Aninhadas (Nested If)",
                explanation: "CONDIÇÕES ANINHADAS são decisões dentro de decisões! Como um fluxograma complexo - se isso, então verifique aquilo, se não, verifique outra coisa. Lógica em camadas!",
                solution: ['se(frente_livre)', 'mover()', 'senao', 'se(direita_livre)', 'virar_direita()', 'mover()', 'senao', 'virar_esquerda()', 'mover()', 'fim_se', 'fim_se'],
                success: "🎯 Sensacional! Você criou um sistema de decisão em camadas!\n\nCondições aninhadas permitem lógica sofisticada. Seus programas agora podem navegar situações complexas!",
                commands: ['se(frente_livre)', 'mover()', 'senao', 'se(direita_livre)', 'virar_direita()', 'virar_esquerda()', 'fim_se']
            },
    
            // NÍVEL 12 - ARRAYS/LISTAS
            {
                story: "📋 Incrível! Vamos organizar múltiplos dados.\n\nDécimo Segundo Desafio: Crie um inventário! Use 'inventario = [\"chave\", \"moeda\", \"gema\"]' para criar uma lista, depois use 'adicionar(inventario, \"poção\")' para adicionar um item.",
                concept: "Listas/Arrays",
                explanation: "LISTAS guardam múltiplos valores organizados! Como uma mochila digital com compartimentos numerados. Você pode adicionar, remover e acessar itens por posição!",
                solution: ['inventario = ["chave", "moeda", "gema"]', 'adicionar(inventario, "poção")', 'mostrar(inventario)', 'mostrar(inventario[0])'],
                success: "🎒 Perfeito! Você organizou dados em uma coleção!\n\nListas são fundamentais para gerenciar múltiplos dados. Agora você pode trabalhar com coleções de informações!",
                commands: ['inventario = ["chave", "moeda"]', 'adicionar(inventario, "poção")', 'mostrar(inventario)', 'mostrar(inventario[0])', 'remover(inventario, 0)']
            },
    
            // NÍVEL 13 - LOOPS COM ARRAYS
            {
                story: "🔄 Fantástico! Vamos processar listas automaticamente.\n\nDécimo Terceiro Desafio: Examine cada item do inventário! Use 'para cada item em inventario' para percorrer a lista e mostrar cada item individualmente.",
                concept: "Iteração em Listas",
                explanation: "ITERAÇÃO percorre cada elemento de uma lista automaticamente! Como examinar cada gaveta de uma cômoda. 'Para cada' é perfeito para processar coleções completas!",
                solution: ['inventario = ["espada", "escudo", "poção"]', 'para cada item em inventario', 'mostrar(item)', 'fim_para'],
                success: "🔍 Incrível! Você automatizou o processamento de listas!\n\nIteração é essencial para trabalhar com coleções. Agora você pode processar qualquer quantidade de dados automaticamente!",
                commands: ['inventario = ["espada", "escudo", "poção"]', 'para cada item em inventario', 'mostrar(item)', 'fim_para', 'contar(inventario)']
            },
    
            // NÍVEL 14 - BUSCA EM LISTAS
            {
                story: "🔍 Sensacional! Vamos procurar itens específicos.\n\nDécimo Quarto Desafio: Verifique se você tem uma chave! Use 'se(contem(inventario, \"chave\"))' para verificar se um item específico está na lista antes de usá-lo.",
                concept: "Busca e Verificação",
                explanation: "BUSCA encontra elementos específicos em listas! Como procurar um livro específico numa biblioteca. Verificar antes de usar evita erros e torna programas mais robustos!",
                solution: ['inventario = ["moeda", "chave", "gema"]', 'se(contem(inventario, "chave"))', 'mostrar("Tenho chave!")', 'usar_chave()', 'senao', 'mostrar("Preciso encontrar chave")', 'fim_se'],
                success: "🗝️ Perfeito! Seu programa agora faz verificações inteligentes!\n\nBusca em listas é fundamental para programas robustos. Sempre verifique antes de usar - prevenção de erros!",
                commands: ['inventario = ["moeda", "chave", "gema"]', 'se(contem(inventario, "chave"))', 'mostrar("Tenho chave!")', 'usar_chave()', 'senao', 'fim_se']
            },
    
            // NÍVEL 15 - ALGORITMOS DE ORDENAÇÃO
            {
                story: "📊 Excelente! Vamos organizar dados em ordem.\n\nDécimo Quinto Desafio: Ordene uma lista de números! Use 'ordenar(numeros)' para organizar a lista '[5, 2, 8, 1, 9]' em ordem crescente.",
                concept: "Ordenação",
                explanation: "ORDENAÇÃO organiza dados em sequência lógica! Como organizar cartas por valor ou livros por ordem alfabética. Dados organizados são mais fáceis de processar e encontrar!",
                solution: ['numeros = [5, 2, 8, 1, 9]', 'mostrar("Antes:", numeros)', 'ordenar(numeros)', 'mostrar("Depois:", numeros)'],
                success: "📈 Fantástico! Você organizou dados perfeitamente!\n\nOrdenação é um algoritmo fundamental. Dados organizados permitem buscas mais rápidas e análises mais eficientes!",
                commands: ['numeros = [5, 2, 8, 1, 9]', 'mostrar("Antes:", numeros)', 'ordenar(numeros)', 'mostrar("Depois:", numeros)', 'reverter(numeros)']
            },
    
            // NÍVEL 16 - RECURSÃO BÁSICA
            {
                story: "🌀 Incrível! Vamos criar funções que chamam a si mesmas.\n\nDécimo Sexto Desafio: Conte regressivamente! Crie uma função 'contagem(n)' que mostra o número e chama 'contagem(n-1)' até chegar a zero.",
                concept: "Recursão",
                explanation: "RECURSÃO é quando uma função chama a si mesma! Como ecos que vão diminuindo ou bonecas russas dentro de bonecas. Poderosa para problemas que se dividem em versões menores!",
                solution: ['funcao contagem(n)', 'se(n > 0)', 'mostrar(n)', 'contagem(n - 1)', 'senao', 'mostrar("Fim!")', 'fim_se', 'fim_funcao', 'contagem(5)'],
                success: "🌀 Sensacional! Você dominou o conceito de recursão!\n\nRecursão é um conceito avançado e poderoso. Permite resolver problemas complexos dividindo-os em versões menores!",
                commands: ['funcao contagem(n)', 'se(n > 0)', 'mostrar(n)', 'contagem(n - 1)', 'senao', 'mostrar("Fim!")', 'fim_funcao', 'contagem(5)']
            },
    
            // NÍVEL 17 - ESTRUTURAS CONDICIONAIS COMPLEXAS
            {
                story: "🎯 Perfeito! Vamos criar sistemas de decisão avançados.\n\nDécimo Sétimo Desafio: Sistema de classificação! Use 'escolha(pontos)' com múltiplas opções: 'caso >= 90: \"Excelente\"', 'caso >= 70: \"Bom\"', 'caso padrão: \"Regular\"'.",
                concept: "Switch/Case",
                explanation: "SWITCH/CASE é uma forma elegante de lidar com múltiplas opções! Em vez de muitos if/else, você usa 'escolha' com vários 'caso'. Como um menu de opções organizadas!",
                solution: ['pontos = 85', 'escolha(pontos)', 'caso >= 90:', 'mostrar("Excelente!")', 'caso >= 70:', 'mostrar("Bom!")', 'caso >= 50:', 'mostrar("Regular")', 'caso padrão:', 'mostrar("Precisa melhorar")', 'fim_escolha'],
                success: "🏆 Incrível! Você criou um sistema de classificação elegante!\n\nSwitch/case torna código com múltiplas condições mais limpo e legível. Organização é fundamental!",
                commands: ['pontos = 85', 'escolha(pontos)', 'caso >= 90:', 'mostrar("Excelente!")', 'caso >= 70:', 'caso padrão:', 'fim_escolha']
            },
    
            // NÍVEL 18 - ALGORITMOS DE BUSCA
            {
                story: "🔍 Fantástico! Vamos implementar busca eficiente.\n\nDécimo Oitavo Desafio: Busca binária! Em uma lista ordenada '[1,3,5,7,9,11,13]', implemente busca que divide a lista pela metade a cada tentativa para encontrar o número 7.",
                concept: "Busca Binária",
                explanation: "BUSCA BINÁRIA é super eficiente em listas ordenadas! Em vez de verificar item por item, você divide pela metade e elimina metade das opções a cada tentativa. Como jogar 'maior ou menor'!",
                solution: ['lista = [1,3,5,7,9,11,13]', 'alvo = 7', 'inicio = 0', 'fim = tamanho(lista) - 1', 'enquanto(inicio <= fim)', 'meio = (inicio + fim) / 2', 'se(lista[meio] == alvo)', 'mostrar("Encontrado na posição:", meio)', 'parar', 'senao_se(lista[meio] < alvo)', 'inicio = meio + 1', 'senao', 'fim = meio - 1', 'fim_se', 'fim_enquanto'],
                success: "🎯 Extraordinário! Você implementou um algoritmo de busca eficiente!\n\nBusca binária é muito mais rápida que busca linear. Em 1 milhão de itens, encontra em no máximo 20 tentativas!",
                commands: ['lista = [1,3,5,7,9,11,13]', 'alvo = 7', 'inicio = 0', 'fim = tamanho(lista) - 1', 'meio = (inicio + fim) / 2', 'se(lista[meio] == alvo)', 'parar', 'senao_se(lista[meio] < alvo)']
            },
    
            // NÍVEL 19 - ESTRUTURAS DE DADOS AVANÇADAS
            {
                story: "🏗️ Sensacional! Vamos trabalhar com estruturas de dados complexas.\n\nDécimo Nono Desafio: Crie um sistema de filas! Implemente 'fila = nova_fila()', 'enfilar(fila, \"cliente1\")', 'desenfilar(fila)' para simular uma fila de atendimento.",
                concept: "Filas e Pilhas",
                explanation: "FILAS e PILHAS são estruturas especiais! Fila é 'primeiro a entrar, primeiro a sair' (como fila do banco). Pilha é 'último a entrar, primeiro a sair' (como pilha de pratos). Cada uma tem seu uso ideal!",
                solution: ['fila = nova_fila()', 'enfilar(fila, "cliente1")', 'enfilar(fila, "cliente2")', 'enfilar(fila, "cliente3")', 'mostrar("Atendendo:", desenfilar(fila))', 'mostrar("Próximo:", frente(fila))', 'mostrar("Tamanho da fila:", tamanho(fila))'],
                success: "🎪 Incrível! Você dominou estruturas de dados avançadas!\n\nFilas e pilhas são fundamentais em programação. Sistemas operacionais, navegadores e jogos usam essas estruturas constantemente!",
                commands: ['fila = nova_fila()', 'enfilar(fila, "cliente1")', 'desenfilar(fila)', 'pilha = nova_pilha()', 'empilhar(pilha, "item")', 'desempilhar(pilha)', 'frente(fila)']
            },
    
            // NÍVEL 20 - PROJETO FINAL ALGORÍTMICO
            {
                story: "🏆 DESAFIO FINAL ÉPICO!\n\nVocê chegou ao último nível! Crie um sistema completo de gerenciamento de tarefas que integre tudo: use listas para armazenar tarefas, funções para organizar código, loops para processar, condições para validar, e algoritmos de ordenação para priorizar.\n\nMostre que você é um mestre da lógica computacional!",
                concept: "Sistema Algorítmico Completo",
                explanation: "PROJETO FINAL integra todos os conceitos de lógica! Listas, funções, loops, condições, busca, ordenação, filas - tudo trabalhando em harmonia. É o teste definitivo do seu pensamento computacional!",
                solution: ['// Sistema de Gerenciamento de Tarefas', 'tarefas = []', 'fila_prioridade = nova_fila()', '', 'funcao adicionarTarefa(nome, prioridade)', 'nova_tarefa = {nome: nome, prioridade: prioridade, concluida: falso}', 'adicionar(tarefas, nova_tarefa)', 'se(prioridade >= 8)', 'enfilar(fila_prioridade, nova_tarefa)', 'fim_se', 'fim_funcao', '', 'funcao processarTarefas()', 'ordenar_por(tarefas, "prioridade")', 'para cada tarefa em tarefas', 'se(NÃO tarefa.concluida)', 'mostrar("Executando:", tarefa.nome)', 'tarefa.concluida = verdadeiro', 'fim_se', 'fim_para', 'fim_funcao', '', 'funcao relatório()', 'concluidas = 0', 'para cada tarefa em tarefas', 'se(tarefa.concluida)', 'concluidas = concluidas + 1', 'fim_se', 'fim_para', 'mostrar("Tarefas concluídas:", concluidas, "de", tamanho(tarefas))', 'fim_funcao', '', '// Execução do sistema', 'adicionarTarefa("Estudar algoritmos", 9)', 'adicionarTarefa("Fazer compras", 5)', 'adicionarTarefa("Exercitar-se", 7)', 'processarTarefas()', 'relatório()'],
                success: "🎉🏆 PARABÉNS, MESTRE DA LÓGICA! 🏆🎉\n\nVocê completou todos os 20 níveis e se tornou um verdadeiro especialista em Lógica de Programação! Dominou desde comandos básicos até algoritmos complexos.\n\nAgora você pode:\n• Resolver problemas complexos sistematicamente\n• Criar algoritmos eficientes\n• Estruturar dados de forma inteligente\n• Implementar busca e ordenação\n• Usar recursão e estruturas avançadas\n• Pensar como um computador!\n\nSeu pensamento computacional é agora de nível EXPERT! 🧠🚀✨",
                commands: ['tarefas = []', 'funcao adicionarTarefa(nome, prioridade)', 'nova_tarefa = {nome: nome, prioridade: prioridade}', 'adicionar(tarefas, nova_tarefa)', 'fim_funcao', 'funcao processarTarefas()', 'ordenar_por(tarefas, "prioridade")', 'para cada tarefa em tarefas', 'mostrar("Executando:", tarefa.nome)', 'fim_para', 'funcao relatório()', 'concluidas = 0', 'se(tarefa.concluida)', 'concluidas = concluidas + 1', 'adicionarTarefa("Estudar", 9)', 'processarTarefas()']
            }
        ]
    },
    css: {
        name: "CSS & Design",
        icon: "🎨",
        character: "🎨",
        levels: [
            // NÍVEL 1 - FUNDAMENTOS
            {
                story: "🎨 Bem-vindo ao Reino do Design!\n\nVocê é um designer web aprendendo a criar experiências visuais incríveis! Sua missão é dominar CSS, a linguagem que deixa a web bonita.\n\nPrimeiro Desafio: O herói precisa de estilo! Use um seletor CSS para dar cor vermelha ao texto do elemento 'heroi'.",
                concept: "Seletores Básicos",
                explanation: "SELETORES são como você escolhe elementos HTML para estilizar! Eles são a ponte entre seu CSS e os elementos da página. # para IDs, . para classes, e o nome da tag para elementos.",
                solution: ['#heroi {', 'color: red;', '}'],
                success: "🌈 Perfeito! Você deu vida ao seu primeiro elemento!\n\nSeletores são fundamentais no CSS. Eles permitem escolher exatamente quais elementos você quer estilizar na página!",
                commands: ['#heroi {', '}', 'color: red;', '.classe {', 'background: blue;', 'h1 {']
            },
            
            // NÍVEL 2 - CORES E FUNDOS
            {
                story: "🌟 Excelente! Agora vamos trabalhar com cores avançadas.\n\nSegundo Desafio: Crie um fundo gradiente vibrante! Use 'background: linear-gradient()' para criar um gradiente do azul para o roxo no container principal.",
                concept: "Cores e Gradientes",
                explanation: "GRADIENTES criam transições suaves entre cores! linear-gradient() cria gradientes lineares, e você pode especificar direção e múltiplas cores. É como pintar com degradês digitais!",
                solution: ['.container {', 'background: linear-gradient(45deg, blue, purple);', '}'],
                success: "🎨 Sensacional! Você criou um fundo com gradiente profissional!\n\nGradientes são fundamentais no design moderno. Eles adicionam profundidade e elegância aos layouts!",
                commands: ['.container {', '}', 'background: linear-gradient(45deg, blue, purple);', 'background: radial-gradient(circle, red, yellow);', 'color: #ff6b6b;']
            },
    
            // NÍVEL 3 - TIPOGRAFIA
            {
                story: "📝 Incrível! Agora vamos dar personalidade ao texto.\n\nTerceiro Desafio: Estilize o título principal! Use 'font-family', 'font-size: 2em' e 'font-weight: bold' para criar um título impactante.",
                concept: "Tipografia",
                explanation: "TIPOGRAFIA é a arte de estilizar texto! font-family define a fonte, font-size o tamanho, font-weight o peso. A tipografia transmite personalidade e hierarquia visual!",
                solution: ['h1 {', 'font-family: Arial, sans-serif;', 'font-size: 2em;', 'font-weight: bold;', '}'],
                success: "✍️ Fantástico! Seu texto agora tem personalidade própria!\n\nTipografia bem trabalhada faz toda a diferença na comunicação visual. Você dominou os fundamentos!",
                commands: ['h1 {', '}', 'font-family: Arial, sans-serif;', 'font-size: 2em;', 'font-weight: bold;', 'text-align: center;']
            },
    
            // NÍVEL 4 - BOX MODEL
            {
                story: "📦 Perfeito! Agora vamos entender o espaçamento.\n\nQuarto Desafio: Crie um cartão bem espaçado! Use 'padding: 20px' para espaço interno, 'margin: 10px' para espaço externo e 'border: 2px solid black' para uma borda.",
                concept: "Box Model",
                explanation: "BOX MODEL é como CSS vê cada elemento! Margin (espaço externo), Border (borda), Padding (espaço interno) e Content (conteúdo). É fundamental para layouts organizados!",
                solution: ['.card {', 'padding: 20px;', 'margin: 10px;', 'border: 2px solid black;', '}'],
                success: "📏 Excelente! Você dominou o espaçamento de elementos!\n\nO Box Model é a base de todo layout CSS. Agora você pode controlar precisamente o espaço dos seus elementos!",
                commands: ['.card {', '}', 'padding: 20px;', 'margin: 10px;', 'border: 2px solid black;', 'border-radius: 10px;']
            },
    
            // NÍVEL 5 - FLEXBOX BÁSICO
            {
                story: "🏗️ Incrível! Agora vamos organizar o layout.\n\nQuinto Desafio: Crie um container flexível! Use 'display: flex' para organizar elementos lado a lado e 'justify-content: center' para centralizá-los horizontalmente.",
                concept: "Flexbox - Básico",
                explanation: "FLEXBOX é um sistema de layout poderoso! display: flex transforma o container em flexível, justify-content alinha horizontalmente. É como ter superpoderes para organizar elementos!",
                solution: ['.container {', 'display: flex;', 'justify-content: center;', '}'],
                success: "📐 Sensacional! Você criou um layout flexível e moderno!\n\nFlexbox revolucionou como fazemos layouts na web. Agora seus elementos se organizam de forma inteligente!",
                commands: ['.container {', '}', 'display: flex;', 'justify-content: center;', 'align-items: center;', 'flex-direction: column;']
            },
    
            // NÍVEL 6 - FLEXBOX AVANÇADO
            {
                story: "🎯 Fantástico! Vamos aprofundar no Flexbox.\n\nSexto Desafio: Crie um layout responsivo! Use 'flex-wrap: wrap' para quebrar linhas automaticamente e 'gap: 20px' para espaçamento uniforme entre os itens.",
                concept: "Flexbox - Avançado",
                explanation: "FLEXBOX AVANÇADO permite layouts responsivos! flex-wrap permite quebra de linha, gap cria espaçamento uniforme, flex-grow controla crescimento. É design responsivo inteligente!",
                solution: ['.container {', 'display: flex;', 'flex-wrap: wrap;', 'gap: 20px;', '}'],
                success: "🚀 Incrível! Seu layout agora é totalmente responsivo!\n\nVocê dominou Flexbox avançado! Seus layouts se adaptam automaticamente a diferentes tamanhos de tela!",
                commands: ['.container {', '}', 'display: flex;', 'flex-wrap: wrap;', 'gap: 20px;', 'align-content: center;']
            },
    
            // NÍVEL 7 - POSICIONAMENTO
            {
                story: "📍 Excelente! Agora vamos posicionar elementos precisamente.\n\nSétimo Desafio: Crie um elemento flutuante! Use 'position: absolute', 'top: 50px' e 'right: 20px' para posicionar um botão no canto superior direito.",
                concept: "Posicionamento",
                explanation: "POSICIONAMENTO controla onde elementos aparecem! absolute remove do fluxo normal, relative posiciona relativamente, fixed fica fixo na tela. É controle total sobre a localização!",
                solution: ['.botao {', 'position: absolute;', 'top: 50px;', 'right: 20px;', '}'],
                success: "🎯 Perfeito! Você posicionou o elemento exatamente onde queria!\n\nPosicionamento CSS dá controle total sobre a localização dos elementos. Essencial para layouts complexos!",
                commands: ['.botao {', '}', 'position: absolute;', 'top: 50px;', 'right: 20px;', 'z-index: 10;']
            },
    
            // NÍVEL 8 - TRANSFORMAÇÕES
            {
                story: "🔄 Sensacional! Vamos adicionar transformações dinâmicas.\n\nOitavo Desafio: Faça o herói girar! Use 'transform: rotate(45deg)' para rotacionar o elemento e 'transform-origin: center' para definir o ponto de rotação.",
                concept: "Transformações 2D",
                explanation: "TRANSFORMAÇÕES modificam elementos sem afetar o layout! rotate() gira, scale() redimensiona, translate() move. É como manipular objetos no espaço digital!",
                solution: ['.heroi {', 'transform: rotate(45deg);', 'transform-origin: center;', '}'],
                success: "🌀 Incrível! Você criou uma transformação suave e profissional!\n\nTransformações CSS permitem efeitos visuais impressionantes sem JavaScript. Seu elemento ganhou vida!",
                commands: ['.heroi {', '}', 'transform: rotate(45deg);', 'transform: scale(1.2);', 'transform-origin: center;']
            },
    
            // NÍVEL 9 - ANIMAÇÕES BÁSICAS
            {
                story: "✨ Fantástico! Agora vamos criar movimento.\n\nNono Desafio: Crie uma animação pulsante! Use '@keyframes pulsar' com 'transform: scale(1)' no 0% e 'transform: scale(1.1)' no 50%, depois aplique com 'animation: pulsar 2s infinite'.",
                concept: "Animações Básicas",
                explanation: "ANIMAÇÕES CSS criam movimento fluido! @keyframes define os passos da animação, animation aplica ela ao elemento. É como dar vida aos seus designs sem JavaScript!",
                solution: ['@keyframes pulsar {', '0% { transform: scale(1); }', '50% { transform: scale(1.1); }', '100% { transform: scale(1); }', '}', '.heroi { animation: pulsar 2s infinite; }'],
                success: "🎭 Sensacional! Você criou uma animação suave e cativante!\n\nAnimações CSS são o que fazem sites modernos se destacarem. Você agora pode criar experiências visuais envolventes!",
                commands: ['@keyframes pulsar {', '0% { transform: scale(1); }', '50% { transform: scale(1.1); }', '100% { transform: scale(1); }', '}', '.heroi { animation: pulsar 2s infinite; }']
            },
    
            // NÍVEL 10 - HOVER EFFECTS
            {
                story: "👆 Incrível! Vamos criar interatividade com hover.\n\nDécimo Desafio: Crie um efeito hover elegante! Use ':hover' para mudar a cor de fundo para azul e adicione 'transition: all 0.3s ease' para suavizar a mudança.",
                concept: "Efeitos Hover",
                explanation: "HOVER EFFECTS respondem à interação do usuário! :hover ativa quando o mouse passa sobre o elemento, transition suaviza mudanças. É interatividade visual pura!",
                solution: ['.botao {', 'background: gray;', 'transition: all 0.3s ease;', '}', '.botao:hover {', 'background: blue;', '}'],
                success: "🖱️ Perfeito! Seu elemento agora responde ao mouse de forma elegante!\n\nEfeitos hover são essenciais para boa experiência do usuário. Você criou interatividade visual profissional!",
                commands: ['.botao {', '}', 'background: gray;', 'transition: all 0.3s ease;', '.botao:hover {', 'background: blue;']
            },
    
            // NÍVEL 11 - CSS GRID BÁSICO
            {
                story: "📱 Fantástico! Vamos dominar o Grid Layout.\n\nDécimo Primeiro Desafio: Crie uma grade de 3 colunas! Use 'display: grid', 'grid-template-columns: repeat(3, 1fr)' e 'gap: 15px' para criar um layout em grade uniforme.",
                concept: "CSS Grid - Básico",
                explanation: "CSS GRID é o sistema de layout 2D mais poderoso! Permite criar grades complexas com linhas e colunas. 1fr significa 'uma fração', dividindo o espaço igualmente!",
                solution: ['.grid {', 'display: grid;', 'grid-template-columns: repeat(3, 1fr);', 'gap: 15px;', '}'],
                success: "🏗️ Sensacional! Você criou um layout em grade perfeito!\n\nCSS Grid é o futuro dos layouts web. Agora você pode criar estruturas complexas com facilidade!",
                commands: ['.grid {', '}', 'display: grid;', 'grid-template-columns: repeat(3, 1fr);', 'gap: 15px;', 'grid-template-rows: auto;']
            },
    
            // NÍVEL 12 - CSS GRID AVANÇADO
            {
                story: "🎯 Excelente! Vamos criar layouts complexos com Grid.\n\nDécimo Segundo Desafio: Crie um layout de blog! Use 'grid-template-areas' para definir áreas nomeadas: 'header header' na primeira linha e 'sidebar content' na segunda.",
                concept: "CSS Grid - Avançado",
                explanation: "GRID AREAS permitem layouts nomeados e intuitivos! Você desenha o layout com strings e depois atribui elementos às áreas. É como desenhar com código!",
                solution: ['.layout {', 'display: grid;', 'grid-template-areas:', '"header header"', '"sidebar content";', '}'],
                success: "🏛️ Incrível! Você criou um layout complexo com áreas nomeadas!\n\nGrid Areas são uma das funcionalidades mais elegantes do CSS. Layouts complexos agora são intuitivos!",
                commands: ['.layout {', '}', 'display: grid;', 'grid-template-areas:', '"header header"', '"sidebar content";']
            },
    
            // NÍVEL 13 - RESPONSIVIDADE
            {
                story: "📱 Fantástico! Vamos fazer designs responsivos.\n\nDécimo Terceiro Desafio: Crie um breakpoint mobile! Use '@media (max-width: 768px)' para aplicar 'flex-direction: column' em telas menores que 768px.",
                concept: "Media Queries",
                explanation: "MEDIA QUERIES adaptam designs a diferentes dispositivos! Você pode aplicar estilos específicos baseados no tamanho da tela, orientação, resolução. É design para todos!",
                solution: ['@media (max-width: 768px) {', '.container {', 'flex-direction: column;', '}', '}'],
                success: "📱 Perfeito! Seu design agora se adapta a diferentes telas!\n\nResponsividade é essencial hoje em dia. Você garantiu que seu design funciona em qualquer dispositivo!",
                commands: ['@media (max-width: 768px) {', '.container {', '}', 'flex-direction: column;', 'font-size: 14px;']
            },
    
            // NÍVEL 14 - PSEUDO-ELEMENTOS
            {
                story: "✨ Excelente! Vamos criar elementos decorativos.\n\nDécimo Quarto Desafio: Adicione um elemento decorativo! Use '::before' para criar um elemento decorativo, defina 'content: \"★\"' e 'position: absolute' para posicioná-lo.",
                concept: "Pseudo-elementos",
                explanation: "PSEUDO-ELEMENTOS criam elementos virtuais! ::before e ::after adicionam conteúdo decorativo sem HTML extra. É como magia CSS para detalhes visuais!",
                solution: ['.titulo::before {', 'content: \"★\";', 'position: absolute;', 'left: -20px;', '}'],
                success: "⭐ Sensacional! Você adicionou elementos decorativos com CSS puro!\n\nPseudo-elementos são uma ferramenta poderosa para detalhes visuais sem poluir o HTML!",
                commands: ['.titulo::before {', '}', 'content: \"★\";', 'position: absolute;', 'left: -20px;', 'color: gold;']
            },
    
            // NÍVEL 15 - VARIÁVEIS CSS
            {
                story: "🎨 Incrível! Vamos organizar com variáveis CSS.\n\nDécimo Quinto Desafio: Crie um sistema de cores! Use ':root' para definir '--cor-primaria: #3498db' e depois use 'color: var(--cor-primaria)' em um elemento.",
                concept: "Variáveis CSS",
                explanation: "VARIÁVEIS CSS (Custom Properties) permitem reutilizar valores! Defina uma vez e use em vários lugares. Mudanças ficam centralizadas e manutenção fica muito mais fácil!",
                solution: [':root {', '--cor-primaria: #3498db;', '}', '.texto {', 'color: var(--cor-primaria);', '}'],
                success: "🔧 Fantástico! Você criou um sistema de variáveis reutilizáveis!\n\nVariáveis CSS tornam seus estilos mais organizados e fáceis de manter. É programação aplicada ao design!",
                commands: [':root {', '}', '--cor-primaria: #3498db;', '.texto {', 'color: var(--cor-primaria);', '--tamanho: 16px;']
            },
    
            // NÍVEL 16 - FILTROS CSS
            {
                story: "🌈 Perfeito! Vamos aplicar filtros visuais.\n\nDécimo Sexto Desafio: Adicione efeitos especiais! Use 'filter: blur(2px)' para desfocar um elemento e 'filter: brightness(1.2)' para deixá-lo mais brilhante no hover.",
                concept: "Filtros CSS",
                explanation: "FILTROS CSS aplicam efeitos visuais como no Photoshop! blur(), brightness(), contrast(), grayscale() e muitos outros. É edição de imagem direto no CSS!",
                solution: ['.imagem {', 'filter: blur(2px);', '}', '.imagem:hover {', 'filter: brightness(1.2);', '}'],
                success: "🎭 Incrível! Você aplicou filtros profissionais com CSS puro!\n\nFiltros CSS oferecem possibilidades criativas infinitas. Seus elementos agora têm efeitos dignos de editores profissionais!",
                commands: ['.imagem {', '}', 'filter: blur(2px);', 'filter: brightness(1.2);', 'filter: grayscale(50%);', '.imagem:hover {']
            },
    
            // NÍVEL 17 - CLIP-PATH
            {
                story: "✂️ Sensacional! Vamos criar formas customizadas.\n\nDécimo Sétimo Desafio: Recorte formas únicas! Use 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%)' para criar um triângulo a partir de um elemento retangular.",
                concept: "Clip-path",
                explanation: "CLIP-PATH permite recortar elementos em formas personalizadas! Círculos, polígonos, ellipses - você pode criar qualquer forma geométrica. É escultura digital!",
                solution: ['.triangulo {', 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);', '}'],
                success: "🔺 Fantástico! Você criou formas geométricas personalizadas!\n\nClip-path abre um mundo de possibilidades criativas. Agora você pode criar designs únicos e não convencionais!",
                commands: ['.triangulo {', '}', 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);', 'clip-path: circle(50%);', 'clip-path: ellipse(25% 40%);']
            },
    
            // NÍVEL 18 - 3D TRANSFORMS
            {
                story: "🎪 Incrível! Vamos explorar a terceira dimensão.\n\nDécimo Oitavo Desafio: Crie profundidade 3D! Use 'transform: perspective(1000px) rotateY(45deg)' para rotacionar em 3D e 'transform-style: preserve-3d' no container.",
                concept: "Transformações 3D",
                explanation: "TRANSFORMAÇÕES 3D adicionam profundidade real! perspective() define o ponto de vista, rotateX/Y/Z rotacionam nos eixos 3D. É como ter um motor 3D no CSS!",
                solution: ['.container {', 'transform-style: preserve-3d;', '}', '.elemento {', 'transform: perspective(1000px) rotateY(45deg);', '}'],
                success: "🌟 Extraordinário! Você criou efeitos 3D impressionantes!\n\nTransformações 3D elevam seus designs a outro nível. Agora você pode criar experiências visuais tridimensionais!",
                commands: ['.container {', '}', 'transform-style: preserve-3d;', '.elemento {', 'transform: perspective(1000px) rotateY(45deg);', 'transform: rotateX(30deg);']
            },
    
            // NÍVEL 19 - ANIMAÇÕES COMPLEXAS
            {
                story: "🎬 Perfeito! Vamos criar animações cinematográficas.\n\nDécimo Nono Desafio: Crie uma sequência animada! Use '@keyframes' com múltiplos estágios: 0% scale(1), 25% scale(1.1) rotate(10deg), 50% scale(0.9), 100% scale(1) rotate(0deg).",
                concept: "Animações Complexas",
                explanation: "ANIMAÇÕES COMPLEXAS combinam múltiplas propriedades e timing! Você pode criar sequências elaboradas com diferentes transformações, cores e posições. É cinema digital!",
                solution: ['@keyframes complexa {', '0% { transform: scale(1) rotate(0deg); }', '25% { transform: scale(1.1) rotate(10deg); }', '50% { transform: scale(0.9) rotate(-5deg); }', '100% { transform: scale(1) rotate(0deg); }', '}', '.elemento { animation: complexa 3s ease-in-out; }'],
                success: "🎭 Sensacional! Você criou uma animação digna de cinema!\n\nAnimações complexas são a marca de designers avançados. Você dominou a arte do movimento digital!",
                commands: ['@keyframes complexa {', '0% { transform: scale(1) rotate(0deg); }', '25% { transform: scale(1.1) rotate(10deg); }', '50% { transform: scale(0.9) rotate(-5deg); }', '100% { transform: scale(1) rotate(0deg); }', '}', '.elemento { animation: complexa 3s ease-in-out; }']
            },
    
            // NÍVEL 20 - PROJETO FINAL AVANÇADO
            {
                story: "🏆 DESAFIO FINAL ÉPICO!\n\nVocê chegou ao último nível! Crie um cartão interativo completo que combine tudo que aprendeu: Use CSS Grid para layout, variáveis para cores, transformações 3D no hover, animações suaves, gradientes e sombras modernas.\n\nMostre que você é um mestre do CSS!",
                concept: "Projeto Integrado Avançado",
                explanation: "PROJETO FINAL integra todos os conceitos avançados! Grid layout, variáveis CSS, transformações 3D, animações, filtros, gradientes - tudo trabalhando em harmonia. É o teste definitivo do seu domínio CSS!",
                solution: [':root { --cor-card: #2c3e50; }', '.card {', 'display: grid;', 'background: linear-gradient(135deg, var(--cor-card), #34495e);', 'border-radius: 15px;', 'box-shadow: 0 10px 30px rgba(0,0,0,0.3);', 'transition: all 0.5s ease;', 'transform-style: preserve-3d;', '}', '.card:hover {', 'transform: perspective(1000px) rotateY(10deg) scale(1.05);', 'filter: brightness(1.1);', '}'],
                success: "🎉🏆 PARABÉNS, MESTRE DO CSS! 🏆🎉\n\nVocê completou todos os 20 níveis e se tornou um verdadeiro especialista em CSS! Dominou desde seletores básicos até transformações 3D complexas.\n\nAgora você pode criar qualquer design que imaginar - layouts responsivos, animações cinematográficas, efeitos 3D e muito mais!\n\nSeu conhecimento em CSS é agora de nível profissional! 🚀✨",
                commands: [':root { --cor-card: #2c3e50; }', '.card {', '}', 'display: grid;', 'background: linear-gradient(135deg, var(--cor-card), #34495e);', 'border-radius: 15px;', 'box-shadow: 0 10px 30px rgba(0,0,0,0.3);', 'transition: all 0.5s ease;', 'transform-style: preserve-3d;', '.card:hover {', 'transform: perspective(1000px) rotateY(10deg) scale(1.05);', 'filter: brightness(1.1);']
            }
        ]
    },
    react: {
        name: "React.js",
        icon: "⚛️",
        character: "⚛️",
        levels: [
            // NÍVEL 1 - Fundamentos
            {
                story: "⚛️ Bem-vindo ao Reino do React!\n\nVocê é um desenvolvedor front-end descobrindo o poder dos componentes! Sua missão é dominar a biblioteca que revolucionou o desenvolvimento web.\n\nPrimeiro Desafio: Crie seu primeiro componente funcional! Em React, componentes são como blocos de LEGO reutilizáveis.",
                concept: "Componentes Funcionais",
                explanation: "COMPONENTES são a base do React! Eles são funções JavaScript que retornam JSX (uma sintaxe que mistura HTML com JavaScript). Cada componente é um pedaço reutilizável da sua interface.",
                solution: ['function MeuComponente() {', 'return <h1>Olá, React!</h1>', '}'],
                success: "🎉 Incrível! Você criou seu primeiro componente React!\n\nComponentes são a essência do React. Eles permitem dividir sua interface em pedaços pequenos, reutilizáveis e organizados!",
                commands: ['function MeuComponente() {', 'return <h1>Olá, React!</h1>', '}', 'export default MeuComponente', 'const App = () => {']
            },
            // NÍVEL 2 - JSX Básico
            {
                story: "🏗️ Excelente! Agora vamos explorar o JSX.\n\nSegundo Desafio: O herói precisa de uma estrutura mais complexa! Crie um componente que retorna um div contendo um título h2 e um parágrafo com texto.\n\nJSX permite escrever HTML dentro do JavaScript!",
                concept: "JSX Estruturado",
                explanation: "JSX é uma extensão do JavaScript que permite escrever HTML de forma mais intuitiva! Lembre-se: use className ao invés de class, e todos os elementos devem ter uma tag de fechamento.",
                solution: ['return (', '<div>', '<h2>Título do Herói</h2>', '<p>Descrição do herói</p>', '</div>', ')'],
                success: "🏗️ Perfeito! Você dominou a estrutura JSX!\n\nJSX torna o React muito mais legível e intuitivo. É como escrever HTML, mas com superpoderes do JavaScript!",
                commands: ['return (', '<div>', '<h2>Título do Herói</h2>', '<p>Descrição do herói</p>', '</div>', ')']
            },
            // NÍVEL 3 - Props Básicas
            {
                story: "📦 Fantástico! Agora vamos tornar os componentes dinâmicos.\n\nTerceiro Desafio: Use props para personalizar o componente! Crie um componente que receba 'nome' como prop e exiba uma saudação personalizada.\n\nProps são como argumentos para componentes!",
                concept: "Props (Propriedades)",
                explanation: "PROPS são dados que você passa para um componente! Elas tornam os componentes reutilizáveis e dinâmicos. É como passar parâmetros para uma função.",
                solution: ['function Saudacao(props) {', 'return <h1>Olá, {props.nome}!</h1>', '}'],
                success: "📦 Sensacional! Seu componente agora é reutilizável!\n\nProps são fundamentais para criar componentes flexíveis. Um mesmo componente pode exibir dados diferentes dependendo das props recebidas!",
                commands: ['function Saudacao(props) {', 'return <h1>Olá, {props.nome}!</h1>', '}', '{props.nome}', 'props.idade']
            },
            // NÍVEL 4 - useState Básico
            {
                story: "🔄 Incrível! Agora vamos adicionar interatividade.\n\nQuarto Desafio: Use o hook useState para criar um contador! O herói precisa de um botão que incrementa um número na tela.\n\nHooks dão superpoderes aos componentes funcionais!",
                concept: "useState Hook",
                explanation: "USESTATE é um hook que permite adicionar estado aos componentes funcionais! Estado é informação que pode mudar ao longo do tempo, como um contador, texto digitado, ou dados de uma API.",
                solution: ['const [contador, setContador] = useState(0)', 'return (', '<button onClick={() => setContador(contador + 1)}>', 'Cliques: {contador}', '</button>', ')'],
                success: "⚡ Fantástico! Seu componente agora tem estado e interatividade!\n\nO useState é fundamental no React moderno. Ele permite que seus componentes 'lembrem' de informações e reajam a mudanças!",
                commands: ['const [contador, setContador] = useState(0)', 'return (', '<button onClick={() => setContador(contador + 1)}>', 'Cliques: {contador}', '</button>', ')']
            },
            // NÍVEL 5 - useState com String
            {
                story: "📝 Excelente! Vamos trabalhar com diferentes tipos de estado.\n\nQuinto Desafio: Crie um input controlado! Use useState para controlar o valor de um campo de texto que o usuário pode digitar.\n\nInputs controlados são a base de formulários em React!",
                concept: "Input Controlado",
                explanation: "INPUTS CONTROLADOS têm seu valor controlado pelo estado do React! Isso significa que o React controla totalmente o que aparece no campo, permitindo validação e manipulação em tempo real.",
                solution: ['const [texto, setTexto] = useState("")', 'return (', '<input value={texto} onChange={(e) => setTexto(e.target.value)} />', '<p>Você digitou: {texto}</p>', ')'],
                success: "📝 Perfeito! Você criou um input totalmente controlado!\n\nInputs controlados são essenciais para formulários robustos. Agora você pode validar, formatar e manipular dados em tempo real!",
                commands: ['const [texto, setTexto] = useState("")', 'return (', '<input value={texto} onChange={(e) => setTexto(e.target.value)} />', '<p>Você digitou: {texto}</p>', ')']
            },
            // NÍVEL 6 - Renderização Condicional
            {
                story: "🔀 Incrível! Agora vamos tomar decisões na interface.\n\nSexto Desafio: Use renderização condicional! Crie um botão que alterna entre mostrar e esconder uma mensagem secreta.\n\nRenderização condicional torna interfaces dinâmicas!",
                concept: "Renderização Condicional",
                explanation: "RENDERIZAÇÃO CONDICIONAL permite mostrar diferentes elementos baseado em condições! Você pode usar operadores ternários ou && para controlar o que aparece na tela.",
                solution: ['const [mostrar, setMostrar] = useState(false)', 'return (', '<button onClick={() => setMostrar(!mostrar)}>', '{mostrar ? "Esconder" : "Mostrar"}', '</button>', '{mostrar && <p>Mensagem secreta!</p>}', ')'],
                success: "🔀 Sensacional! Sua interface agora reage a condições!\n\nRenderização condicional é essencial para criar interfaces responsivas que se adaptam ao estado da aplicação!",
                commands: ['const [mostrar, setMostrar] = useState(false)', 'return (', '<button onClick={() => setMostrar(!mostrar)}>', '{mostrar ? "Esconder" : "Mostrar"}', '</button>', '{mostrar && <p>Mensagem secreta!</p>}', ')']
            },
            // NÍVEL 7 - Arrays e map()
            {
                story: "📋 Fantástico! Vamos trabalhar com listas de dados.\n\nSétimo Desafio: Renderize uma lista de heróis! Use um array de nomes e o método map() para criar uma lista de elementos na tela.\n\nListas são fundamentais em aplicações reais!",
                concept: "Renderização de Listas",
                explanation: "RENDERIZAÇÃO DE LISTAS usa o método map() para transformar arrays em elementos JSX! Cada item precisa de uma prop 'key' única para o React otimizar a renderização.",
                solution: ['const herois = ["Superman", "Batman", "Wonder Woman"]', 'return (', '<ul>', '{herois.map(heroi => <li key={heroi}>{heroi}</li>)}', '</ul>', ')'],
                success: "📋 Incrível! Você dominou a renderização de listas!\n\nListas são essenciais em qualquer aplicação. Agora você pode exibir dados dinâmicos de arrays, APIs e bancos de dados!",
                commands: ['const herois = ["Superman", "Batman", "Wonder Woman"]', 'return (', '<ul>', '{herois.map(heroi => <li key={heroi}>{heroi}</li>)}', '</ul>', ')']
            },
            // NÍVEL 8 - useEffect Básico
            {
                story: "🎛️ Excelente! Agora vamos trabalhar com efeitos colaterais.\n\nOitavo Desafio: Use useEffect para executar código quando o componente for montado! Adicione um console.log que executa apenas uma vez.\n\nuseEffect controla o ciclo de vida dos componentes!",
                concept: "useEffect Hook",
                explanation: "USEEFFECT permite executar código em momentos específicos do ciclo de vida do componente! O array de dependências vazio [] faz o efeito executar apenas uma vez.",
                solution: ['useEffect(() => {', 'console.log("Componente montado!")', '}, [])', 'return <h1>Olá useEffect!</h1>'],
                success: "🎛️ Perfeito! Você entendeu o ciclo de vida dos componentes!\n\nuseEffect é essencial para chamadas de API, configuração de timers e limpeza de recursos!",
                commands: ['useEffect(() => {', 'console.log("Componente montado!")', '}, [])', 'return <h1>Olá useEffect!</h1>']
            },
            // NÍVEL 9 - useEffect com Dependências
            {
                story: "🔗 Incrível! Vamos explorar dependências no useEffect.\n\nNono Desafio: Crie um useEffect que executa sempre que um contador mudar! O efeito deve logar o valor atual do contador.\n\nDependências controlam quando o efeito executa!",
                concept: "useEffect com Dependências",
                explanation: "DEPENDÊNCIAS no useEffect determinam quando ele deve executar novamente! Quando um valor no array de dependências muda, o efeito executa.",
                solution: ['const [contador, setContador] = useState(0)', 'useEffect(() => {', 'console.log("Contador mudou:", contador)', '}, [contador])', 'return <button onClick={() => setContador(contador + 1)}>Count: {contador}</button>'],
                success: "🔗 Sensacional! Você dominou as dependências do useEffect!\n\nAgora você pode sincronizar efeitos com mudanças específicas no estado!",
                commands: ['const [contador, setContador] = useState(0)', 'useEffect(() => {', 'console.log("Contador mudou:", contador)', '}, [contador])', 'return <button onClick={() => setContador(contador + 1)}>Count: {contador}</button>']
            },
            // NÍVEL 10 - Eventos e Handlers
            {
                story: "🎯 Fantástico! Vamos aprofundar o tratamento de eventos.\n\nDécimo Desafio: Crie um formulário com handler de submit! O formulário deve prevenir o comportamento padrão e processar os dados.\n\nEventos são a ponte entre usuário e aplicação!",
                concept: "Event Handlers",
                explanation: "EVENT HANDLERS são funções que respondem a interações do usuário! preventDefault() impede o comportamento padrão do navegador, permitindo controle total sobre a ação.",
                solution: ['const handleSubmit = (e) => {', 'e.preventDefault()', 'console.log("Formulário enviado!")', '}', 'return <form onSubmit={handleSubmit}><button type="submit">Enviar</button></form>'],
                success: "🎯 Perfeito! Você dominou o tratamento de eventos!\n\nEvent handlers são essenciais para criar interações ricas e controladas em suas aplicações!",
                commands: ['const handleSubmit = (e) => {', 'e.preventDefault()', 'console.log("Formulário enviado!")', '}', 'return <form onSubmit={handleSubmit}><button type="submit">Enviar</button></form>']
            },
            // NÍVEL 11 - Estado de Objeto
            {
                story: "🏗️ Excelente! Vamos trabalhar com estados mais complexos.\n\nDécimo Primeiro Desafio: Use useState com um objeto! Crie um estado que armazena nome e idade, e botões para atualizar cada propriedade.\n\nEstados complexos exigem cuidado especial!",
                concept: "Estado de Objeto",
                explanation: "ESTADOS DE OBJETO precisam ser atualizados de forma imutável! Use o spread operator (...) para criar um novo objeto mantendo as propriedades existentes.",
                solution: ['const [pessoa, setPessoa] = useState({nome: "", idade: 0})', 'return (', '<input onChange={(e) => setPessoa({...pessoa, nome: e.target.value})} />', '<p>{pessoa.nome} tem {pessoa.idade} anos</p>', ')'],
                success: "🏗️ Incrível! Você dominou estados complexos!\n\nTrabalhar com objetos no estado é fundamental para aplicações reais com múltiplas propriedades!",
                commands: ['const [pessoa, setPessoa] = useState({nome: "", idade: 0})', 'return (', '<input onChange={(e) => setPessoa({...pessoa, nome: e.target.value})} />', '<p>{pessoa.nome} tem {pessoa.idade} anos</p>', ')']
            },
            // NÍVEL 12 - Componentes Filhos
            {
                story: "👨‍👩‍👧‍👦 Fantástico! Vamos criar hierarquias de componentes.\n\nDécimo Segundo Desafio: Crie um componente pai que renderiza componentes filhos! Passe dados do pai para os filhos via props.\n\nHierarquia de componentes organiza o código!",
                concept: "Componentes Pai e Filho",
                explanation: "HIERARQUIA DE COMPONENTES permite organizar a aplicação em árvores! Componentes pais podem passar dados para filhos através de props, criando fluxo unidirecional de dados.",
                solution: ['function Filho({nome}) { return <p>Olá, {nome}!</p> }', 'function Pai() {', 'return <Filho nome="React" />', '}'],
                success: "👨‍👩‍👧‍👦 Sensacional! Você criou uma hierarquia de componentes!\n\nEssa é a base da arquitetura React: componentes pequenos e focados trabalhando juntos!",
                commands: ['function Filho({nome}) { return <p>Olá, {nome}!</p> }', 'function Pai() {', 'return <Filho nome="React" />', '}']
            },
            // NÍVEL 13 - Lifting State Up
            {
                story: "⬆️ Excelente! Vamos aprender a compartilhar estado.\n\nDécimo Terceiro Desafio: Implemente 'lifting state up'! Mova o estado para o componente pai e passe funções para os filhos modificarem esse estado.\n\nEstado compartilhado conecta componentes!",
                concept: "Lifting State Up",
                explanation: "LIFTING STATE UP significa mover o estado para um ancestral comum quando múltiplos componentes precisam dele! O pai mantém o estado e passa callbacks para os filhos.",
                solution: ['function Pai() {', 'const [valor, setValor] = useState(0)', 'return <Filho valor={valor} onClick={() => setValor(valor + 1)} />', '}', 'function Filho({valor, onClick}) { return <button onClick={onClick}>{valor}</button> }'],
                success: "⬆️ Perfeito! Você dominou o compartilhamento de estado!\n\nLifting state up é um padrão fundamental para comunicação entre componentes irmãos!",
                commands: ['function Pai() {', 'const [valor, setValor] = useState(0)', 'return <Filho valor={valor} onClick={() => setValor(valor + 1)} />', '}', 'function Filho({valor, onClick}) { return <button onClick={onClick}>{valor}</button> }']
            },
            // NÍVEL 14 - useEffect com Cleanup
            {
                story: "🧹 Incrível! Vamos aprender limpeza de efeitos.\n\nDécimo Quarto Desafio: Use useEffect com função de limpeza! Crie um timer que incrementa um contador e limpe-o quando o componente for desmontado.\n\nLimpeza previne vazamentos de memória!",
                concept: "Cleanup de useEffect",
                explanation: "CLEANUP FUNCTION é retornada pelo useEffect para limpar recursos! É essencial para timers, listeners e subscriptions para evitar vazamentos de memória.",
                solution: ['useEffect(() => {', 'const timer = setInterval(() => setContador(c => c + 1), 1000)', 'return () => clearInterval(timer)', '}, [])', 'return <p>Timer: {contador}</p>'],
                success: "🧹 Sensacional! Você dominou a limpeza de efeitos!\n\nCleanup é crucial para aplicações performáticas e sem vazamentos de memória!",
                commands: ['useEffect(() => {', 'const timer = setInterval(() => setContador(c => c + 1), 1000)', 'return () => clearInterval(timer)', '}, [])', 'return <p>Timer: {contador}</p>']
            },
            // NÍVEL 15 - Custom Hook Básico
            {
                story: "🔧 Fantástico! Vamos criar nossos próprios hooks.\n\nDécimo Quinto Desafio: Crie um custom hook useContador! Ele deve retornar o valor do contador e funções para incrementar e decrementar.\n\nCustom hooks reutilizam lógica!",
                concept: "Custom Hooks",
                explanation: "CUSTOM HOOKS são funções que reutilizam lógica stateful! Eles começam com 'use' e podem usar outros hooks internamente. São perfeitos para compartilhar lógica entre componentes.",
                solution: ['function useContador() {', 'const [count, setCount] = useState(0)', 'return { count, increment: () => setCount(count + 1) }', '}', 'const { count, increment } = useContador()'],
                success: "🔧 Incrível! Você criou seu primeiro custom hook!\n\nCustom hooks são uma das features mais poderosas do React para reutilização de lógica!",
                commands: ['function useContador() {', 'const [count, setCount] = useState(0)', 'return { count, increment: () => setCount(count + 1) }', '}', 'const { count, increment } = useContador()']
            },
            // NÍVEL 16 - Refs com useRef
            {
                story: "🎯 Excelente! Vamos acessar elementos DOM diretamente.\n\nDécimo Sexto Desafio: Use useRef para focar um input! Crie um botão que, quando clicado, coloca o foco em um campo de texto.\n\nRefs acessam elementos DOM diretamente!",
                concept: "useRef Hook",
                explanation: "USEREF cria referências mutáveis que persistem durante o ciclo de vida do componente! É útil para acessar elementos DOM diretamente ou armazenar valores que não devem causar re-render.",
                solution: ['const inputRef = useRef()', 'return (', '<input ref={inputRef} />', '<button onClick={() => inputRef.current.focus()}>Focar</button>', ')'],
                success: "🎯 Perfeito! Você dominou referências com useRef!\n\nuseRef é essencial quando você precisa de acesso direto aos elementos DOM ou valores que não causam re-render!",
                commands: ['const inputRef = useRef()', 'return (', '<input ref={inputRef} />', '<button onClick={() => inputRef.current.focus()}>Focar</button>', ')']
            },
            // NÍVEL 17 - Memo e Performance
            {
                story: "⚡ Incrível! Vamos otimizar performance.\n\nDécimo Sétimo Desafio: Use React.memo para otimizar um componente! Envolva um componente filho com memo para evitar re-renders desnecessários.\n\nMemo otimiza performance!",
                concept: "React.memo",
                explanation: "REACT.MEMO é um higher-order component que memoriza o resultado de um componente! Ele só re-renderiza se as props mudarem, otimizando performance em listas grandes.",
                solution: ['const ComponenteOtimizado = React.memo(function Componente({nome}) {', 'return <p>Olá, {nome}!</p>', '})', 'return <ComponenteOtimizado nome="React" />'],
                success: "⚡ Sensacional! Você otimizou a performance do componente!\n\nReact.memo é crucial para aplicações grandes onde performance é fundamental!",
                commands: ['const ComponenteOtimizado = React.memo(function Componente({nome}) {', 'return <p>Olá, {nome}!</p>', '})', 'return <ComponenteOtimizado nome="React" />']
            },
            // NÍVEL 18 - Context API Básico
            {
                story: "🌐 Fantástico! Vamos compartilhar dados globalmente.\n\nDécimo Oitavo Desafio: Crie um Context para tema! Use createContext e Provider para compartilhar dados entre componentes sem prop drilling.\n\nContext compartilha dados globalmente!",
                concept: "Context API",
                explanation: "CONTEXT API permite compartilhar dados entre componentes sem passar props através de vários níveis! É ideal para temas, autenticação e outras configurações globais.",
                solution: ['const TemaContext = createContext()', 'return (', '<TemaContext.Provider value="dark">', '<ComponenteFilho />', '</TemaContext.Provider>', ')'],
                success: "🌐 Incrível! Você dominou o Context API!\n\nContext é essencial para gerenciar estado global sem bibliotecas externas!",
                commands: ['const TemaContext = createContext()', 'return (', '<TemaContext.Provider value="dark">', '<ComponenteFilho />', '</TemaContext.Provider>', ')']
            },
            // NÍVEL 19 - useContext Hook
            {
                story: "🔌 Excelente! Vamos consumir dados do Context.\n\nDécimo Nono Desafio: Use useContext para consumir dados! Acesse o valor do TemaContext dentro de um componente filho.\n\nuseContext simplifica o consumo de dados!",
                concept: "useContext Hook",
                explanation: "USECONTEXT é um hook que consome dados de um Context! É mais simples que usar Consumer e permite acesso direto aos valores compartilhados.",
                solution: ['function ComponenteFilho() {', 'const tema = useContext(TemaContext)', 'return <p>Tema atual: {tema}</p>', '}'],
                success: "🔌 Perfeito! Você conectou o componente ao Context!\n\nuseContext torna o consumo de dados globais muito mais simples e legível!",
                commands: ['function ComponenteFilho() {', 'const tema = useContext(TemaContext)', 'return <p>Tema atual: {tema}</p>', '}']
            },
            // NÍVEL 20 - Aplicação Completa
            {
                story: "🚀 Final Boss! Vamos criar uma aplicação completa!\n\nÚltimo Desafio: Combine tudo que aprendeu! Crie uma aplicação de lista de tarefas com useState, useEffect, componentes, props e eventos.\n\nEste é o teste final do mestre React!",
                concept: "Aplicação Completa",
                explanation: "APLICAÇÃO COMPLETA combina todos os conceitos React! useState para estado, useEffect para persistência, componentes para organização, props para comunicação e eventos para interatividade.",
                solution: ['function TodoApp() {', 'const [todos, setTodos] = useState([])', 'const addTodo = (text) => setTodos([...todos, {id: Date.now(), text}])', 'return <div><TodoInput onAdd={addTodo} /><TodoList todos={todos} /></div>', '}'],
                success: "🏆 PARABÉNS, MESTRE DO REACT! Você completou todos os desafios!\n\nVocê agora domina os fundamentos do React e está pronto para criar aplicações incríveis! Continue praticando e explorando o ecossistema React!",
                commands: ['function TodoApp() {', 'const [todos, setTodos] = useState([])', 'const addTodo = (text) => setTodos([...todos, {id: Date.now(), text}])', 'return <div><TodoInput onAdd={addTodo} /><TodoList todos={todos} /></div>', '}']
            }
        ]
    },
    
    bootstrap: {
        name: "Bootstrap",
        icon: "🅱️",
        character: "📱",
        levels: [
            // NÍVEL 1 - CONTAINERS
            {
                story: "🅱️ Bem-vindo ao Reino do Bootstrap!\n\nVocê é um designer que quer criar layouts incríveis rapidamente! Sua missão é dominar o framework CSS mais popular do mundo.\n\nPrimeiro Desafio: Crie um container responsivo! Use a classe 'container' do Bootstrap para criar um layout que se adapta automaticamente a diferentes tamanhos de tela.",
                concept: "Containers",
                explanation: "CONTAINERS são a base do sistema de layout do Bootstrap! 'container' cria um layout de largura fixa responsivo, enquanto 'container-fluid' ocupa 100% da largura. É como uma caixa mágica que organiza tudo perfeitamente!",
                solution: ['<div class="container">', '<h1>Meu Site Responsivo</h1>', '</div>'],
                success: "📱 Perfeito! Você criou seu primeiro layout responsivo!\n\nO sistema de containers do Bootstrap é a fundação para layouts profissionais. Agora seu conteúdo se adapta automaticamente a qualquer tela!",
                commands: ['<div class="container">', '<h1>Meu Site Responsivo</h1>', '</div>', '<div class="container-fluid">', 'class="row"']
            },
    
            // NÍVEL 2 - GRID SYSTEM BÁSICO
            {
                story: "📊 Excelente! Agora vamos organizar o conteúdo em colunas.\n\nSegundo Desafio: Use o sistema de grid 12 colunas! Crie uma linha com 'row' e duas colunas: uma ocupando 8 espaços e outra ocupando 4 espaços. Use 'col-md-8' e 'col-md-4'.\n\nO grid system é a magia do Bootstrap!",
                concept: "Grid System Básico",
                explanation: "GRID SYSTEM divide a tela em 12 colunas imaginárias! Você pode combinar essas colunas como quiser. 'col-md-8' significa: em telas médias, ocupe 8 das 12 colunas disponíveis.",
                solution: ['<div class="row">', '<div class="col-md-8">Conteúdo Principal</div>', '<div class="col-md-4">Sidebar</div>', '</div>'],
                success: "🏗️ Incrível! Você dominou o sistema de grid!\n\nO grid system do Bootstrap é usado pelos maiores sites do mundo. Agora você pode criar layouts complexos e responsivos em minutos!",
                commands: ['<div class="row">', '<div class="col-md-8">Conteúdo Principal</div>', '<div class="col-md-4">Sidebar</div>', '</div>', 'col-sm-6', 'col-lg-3']
            },
    
            // NÍVEL 3 - BREAKPOINTS RESPONSIVOS
            {
                story: "📱 Fantástico! Agora vamos dominar diferentes tamanhos de tela.\n\nTerceiro Desafio: Crie um layout que se adapta a diferentes dispositivos! Use 'col-12 col-md-6 col-lg-4' para que a coluna ocupe: 12 espaços no mobile, 6 no tablet e 4 no desktop.\n\nResponsividade é o poder do Bootstrap!",
                concept: "Breakpoints Responsivos",
                explanation: "BREAKPOINTS definem como o layout se comporta em diferentes tamanhos! xs (extra small), sm (small), md (medium), lg (large), xl (extra large) - cada um adapta sua interface perfeitamente!",
                solution: ['<div class="row">', '<div class="col-12 col-md-6 col-lg-4">Item 1</div>', '<div class="col-12 col-md-6 col-lg-4">Item 2</div>', '</div>'],
                success: "🌟 Sensacional! Seu layout agora é totalmente responsivo!\n\nVocê dominou os breakpoints! Seu design agora funciona perfeitamente em celulares, tablets e desktops!",
                commands: ['<div class="row">', '<div class="col-12 col-md-6 col-lg-4">Item 1</div>', '<div class="col-12 col-md-6 col-lg-4">Item 2</div>', '</div>', 'col-sm-12', 'col-xl-3']
            },
    
            // NÍVEL 4 - BOTÕES
            {
                story: "🎨 Incrível! Agora vamos criar botões estilosos.\n\nQuarto Desafio: Crie botões com diferentes estilos! Use 'btn btn-primary' para um botão principal e 'btn btn-success' para um botão de sucesso.\n\nBootstrap tem botões lindos prontos para usar!",
                concept: "Botões Bootstrap",
                explanation: "BOTÕES no Bootstrap vêm com estilos prontos incríveis! 'btn' é a classe base, depois você adiciona cores: primary (azul), success (verde), danger (vermelho), warning (amarelo), info (ciano), dark (preto).",
                solution: ['<button class="btn btn-primary">Clique Aqui</button>', '<button class="btn btn-success">Sucesso!</button>'],
                success: "✨ Perfeito! Seus botões ficaram profissionais!\n\nOs botões do Bootstrap são usados por milhões de sites. Agora você pode criar interfaces bonitas sem escrever CSS customizado!",
                commands: ['<button class="btn btn-primary">Clique Aqui</button>', '<button class="btn btn-success">Sucesso!</button>', 'btn-danger', 'btn-warning', 'btn-lg', 'btn-sm']
            },
    
            // NÍVEL 5 - CARDS
            {
                story: "🃏 Excelente! Vamos criar cartões elegantes.\n\nQuinto Desafio: Crie um card completo! Use 'card' como container, 'card-header' para o cabeçalho, 'card-body' para o conteúdo e 'card-title' para o título.\n\nCards organizam informações de forma elegante!",
                concept: "Cards",
                explanation: "CARDS são containers flexíveis para exibir conteúdo! Eles podem ter header, body, footer, imagens e são perfeitos para criar layouts organizados. É como ter cartões de apresentação digitais!",
                solution: ['<div class="card">', '<div class="card-header">Cabeçalho</div>', '<div class="card-body">', '<h5 class="card-title">Título do Card</h5>', '</div>', '</div>'],
                success: "🎯 Sensacional! Você criou um card profissional!\n\nCards são um dos componentes mais versáteis do Bootstrap. Agora você pode organizar qualquer tipo de conteúdo de forma elegante!",
                commands: ['<div class="card">', '<div class="card-header">Cabeçalho</div>', '<div class="card-body">', '<h5 class="card-title">Título do Card</h5>', '</div>', '</div>']
            },
    
            // NÍVEL 6 - NAVBAR
            {
                story: "🧭 Fantástico! Agora vamos criar uma barra de navegação.\n\nSexto Desafio: Crie uma navbar responsiva! Use 'navbar navbar-expand-lg navbar-dark bg-dark' para criar uma barra de navegação escura que se expande em telas grandes.\n\nNavigation é essencial em qualquer site!",
                concept: "Navbar",
                explanation: "NAVBAR é o sistema de navegação do Bootstrap! Ela se adapta automaticamente a diferentes telas, pode ter logo, links, botões e até formulários. É a central de comando do seu site!",
                solution: ['<nav class="navbar navbar-expand-lg navbar-dark bg-dark">', '<a class="navbar-brand" href="#">Meu Site</a>', '</nav>'],
                success: "🚀 Incrível! Você criou uma navegação profissional!\n\nA navbar do Bootstrap é usada pelos maiores sites do mundo. Agora seus usuários podem navegar facilmente por todo o conteúdo!",
                commands: ['<nav class="navbar navbar-expand-lg navbar-dark bg-dark">', '<a class="navbar-brand" href="#">Meu Site</a>', '</nav>', 'navbar-light', 'bg-primary', 'navbar-nav']
            },
    
            // NÍVEL 7 - FORMULÁRIOS
            {
                story: "📝 Excelente! Vamos criar formulários bonitos.\n\nSétimo Desafio: Crie um campo de formulário estilizado! Use 'form-group' para agrupar, 'form-label' para o rótulo e 'form-control' para o input.\n\nFormulários são a ponte entre usuário e aplicação!",
                concept: "Formulários",
                explanation: "FORMULÁRIOS no Bootstrap são elegantes e funcionais! 'form-control' estiliza inputs, 'form-group' organiza campos, e tudo fica responsivo automaticamente. É como ter um designer de UX trabalhando para você!",
                solution: ['<div class="form-group">', '<label class="form-label">Nome:</label>', '<input type="text" class="form-control">', '</div>'],
                success: "📋 Perfeito! Seu formulário ficou profissional!\n\nFormulários bem estilizados melhoram muito a experiência do usuário. Agora você pode coletar dados de forma elegante!",
                commands: ['<div class="form-group">', '<label class="form-label">Nome:</label>', '<input type="text" class="form-control">', '</div>', 'form-select', 'form-check']
            },
    
            // NÍVEL 8 - ALINHAMENTO E SPACING
            {
                story: "📐 Incrível! Vamos dominar espaçamento e alinhamento.\n\nOitavo Desafio: Use classes utilitárias para alinhar! Use 'text-center' para centralizar texto, 'mt-4' para margem superior e 'p-3' para padding.\n\nEspaçamento correto faz toda a diferença!",
                concept: "Spacing e Alignment",
                explanation: "SPACING UTILITIES são classes mágicas para espaçamento! 'm' para margin, 'p' para padding, seguido de direção (t=top, b=bottom, l=left, r=right, x=horizontal, y=vertical) e tamanho (0-5). É controle total sobre espaços!",
                solution: ['<div class="text-center mt-4 p-3">', '<h2>Texto Centralizado</h2>', '</div>'],
                success: "🎯 Sensacional! Você dominou espaçamento e alinhamento!\n\nEssas utilities são usadas constantemente em projetos reais. Agora você pode ajustar qualquer espaçamento sem escrever CSS!",
                commands: ['<div class="text-center mt-4 p-3">', '<h2>Texto Centralizado</h2>', '</div>', 'mb-2', 'px-5', 'text-end']
            },
    
            // NÍVEL 9 - CORES DE FUNDO E TEXTO
            {
                story: "🌈 Fantástico! Vamos adicionar cores ao design.\n\nNono Desafio: Use o sistema de cores do Bootstrap! Aplique 'bg-primary' para fundo azul e 'text-white' para texto branco em um elemento.\n\nCores consistentes criam identidade visual!",
                concept: "Sistema de Cores",
                explanation: "SISTEMA DE CORES do Bootstrap oferece paleta consistente! bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, bg-info, bg-light, bg-dark. Combine com text-white, text-dark para contraste perfeito!",
                solution: ['<div class="bg-primary text-white p-3">', '<h3>Texto em Fundo Azul</h3>', '</div>'],
                success: "🎨 Incrível! Você aplicou o sistema de cores!\n\nUsar cores consistentes deixa seu design profissional e harmonioso. Agora você tem uma paleta completa na ponta dos dedos!",
                commands: ['<div class="bg-primary text-white p-3">', '<h3>Texto em Fundo Azul</h3>', '</div>', 'bg-success', 'text-danger', 'bg-warning']
            },
    
            // NÍVEL 10 - FLEXBOX UTILITIES
            {
                story: "🏗️ Excelente! Vamos dominar flexbox com Bootstrap.\n\nDécimo Desafio: Use utilities de flexbox! Aplique 'd-flex justify-content-center align-items-center' para centralizar conteúdo tanto horizontal quanto verticalmente.\n\nFlexbox é poder de layout moderno!",
                concept: "Flexbox Utilities",
                explanation: "FLEXBOX UTILITIES trazem poder total de layout! 'd-flex' ativa flexbox, 'justify-content-center' centraliza horizontalmente, 'align-items-center' centraliza verticalmente. É como ter superpoderes de alinhamento!",
                solution: ['<div class="d-flex justify-content-center align-items-center" style="height: 200px;">', '<h3>Centralizado!</h3>', '</div>'],
                success: "⚡ Perfeito! Você dominou flexbox utilities!\n\nFlexbox é essencial no design moderno. Agora você pode criar layouts complexos e perfeitamente alinhados com facilidade!",
                commands: ['<div class="d-flex justify-content-center align-items-center" style="height: 200px;">', '<h3>Centralizado!</h3>', '</div>', 'justify-content-between', 'flex-column', 'align-items-start']
            },
    
            // NÍVEL 11 - BADGES E ALERTS
            {
                story: "⚠️ Incrível! Vamos criar elementos informativos.\n\nDécimo Primeiro Desafio: Crie um alerta e um badge! Use 'alert alert-success' para uma mensagem de sucesso e 'badge bg-primary' para um marcador.\n\nComunicação visual é fundamental!",
                concept: "Badges e Alerts",
                explanation: "BADGES são pequenos marcadores para destacar informações! ALERTS são avisos importantes que chamam atenção do usuário. Ambos vêm com cores semânticas para diferentes tipos de mensagem!",
                solution: ['<div class="alert alert-success">Sucesso!</div>', '<span class="badge bg-primary">Novo</span>'],
                success: "📢 Sensacional! Você criou elementos informativos perfeitos!\n\nBadges e alerts melhoram muito a comunicação com o usuário. Agora você pode destacar informações importantes de forma elegante!",
                commands: ['<div class="alert alert-success">Sucesso!</div>', '<span class="badge bg-primary">Novo</span>', 'alert-danger', 'alert-warning', 'badge bg-secondary', 'alert-dismissible']
            },
    
            // NÍVEL 12 - MODAL
            {
                story: "🎭 Fantástico! Vamos criar janelas modais.\n\nDécimo Segundo Desafio: Crie um modal básico! Use 'modal' como container, 'modal-dialog' para o diálogo e 'modal-content' para o conteúdo.\n\nModals criam experiências interativas incríveis!",
                concept: "Modals",
                explanation: "MODALS são janelas sobrepostas que focam a atenção do usuário! Perfeitos para confirmações, formulários ou exibir conteúdo detalhado. É como ter uma tela dentro da tela!",
                solution: ['<div class="modal fade">', '<div class="modal-dialog">', '<div class="modal-content">', '<div class="modal-header">Modal Title</div>', '</div>', '</div>', '</div>'],
                success: "🎪 Incrível! Você criou uma janela modal!\n\nModals são essenciais para interfaces modernas. Agora você pode criar experiências interativas que mantêm o usuário focado!",
                commands: ['<div class="modal fade">', '<div class="modal-dialog">', '<div class="modal-content">', '<div class="modal-header">Modal Title</div>', '</div>', '</div>', '</div>']
            },
    
            // NÍVEL 13 - BREADCRUMB E PAGINATION
            {
                story: "🗺️ Excelente! Vamos criar navegação secundária.\n\nDécimo Terceiro Desafio: Crie um breadcrumb para mostrar a localização atual! Use 'breadcrumb' como lista e 'breadcrumb-item' para cada item do caminho.\n\nNavegação clara orienta o usuário!",
                concept: "Breadcrumb e Navegação",
                explanation: "BREADCRUMB mostra onde o usuário está na hierarquia do site! É como migalhas de pão digitais que ajudam na navegação. Essencial para sites com muitas páginas!",
                solution: ['<nav class="breadcrumb">', '<a class="breadcrumb-item" href="#">Home</a>', '<a class="breadcrumb-item" href="#">Produtos</a>', '<span class="breadcrumb-item active">Categoria</span>', '</nav>'],
                success: "🧭 Perfeito! Você criou navegação secundária profissional!\n\nBreadcrumbs melhoram muito a experiência de navegação. Agora seus usuários sempre sabem onde estão!",
                commands: ['<nav class="breadcrumb">', '<a class="breadcrumb-item" href="#">Home</a>', '<a class="breadcrumb-item" href="#">Produtos</a>', '<span class="breadcrumb-item active">Categoria</span>', '</nav>']
            },
    
            // NÍVEL 14 - TABELAS RESPONSIVAS
            {
                story: "📊 Incrível! Vamos criar tabelas elegantes.\n\nDécimo Quarto Desafio: Crie uma tabela responsiva! Use 'table-responsive' como wrapper e 'table table-striped' para uma tabela com linhas alternadas.\n\nTabelas organizadas apresentam dados claramente!",
                concept: "Tabelas Responsivas",
                explanation: "TABELAS RESPONSIVAS se adaptam a telas pequenas com scroll horizontal! 'table-striped' alterna cores das linhas, 'table-hover' adiciona efeito hover. Dados organizados de forma profissional!",
                solution: ['<div class="table-responsive">', '<table class="table table-striped">', '<thead><tr><th>Nome</th><th>Email</th></tr></thead>', '<tbody><tr><td>João</td><td>joao@email.com</td></tr></tbody>', '</table>', '</div>'],
                success: "📈 Sensacional! Você criou uma tabela profissional!\n\nTabelas bem estilizadas fazem dados complexos ficarem claros e acessíveis. Essencial para dashboards e relatórios!",
                commands: ['<div class="table-responsive">', '<table class="table table-striped">', '<thead><tr><th>Nome</th><th>Email</th></tr></thead>', '<tbody><tr><td>João</td><td>joao@email.com</td></tr></tbody>', '</table>', '</div>']
            },
    
            // NÍVEL 15 - PROGRESS BARS
            {
                story: "📈 Fantástico! Vamos criar barras de progresso.\n\nDécimo Quinto Desafio: Crie uma barra de progresso animada! Use 'progress' como container e 'progress-bar' com largura definida por style.\n\nProgresso visual motiva usuários!",
                concept: "Progress Bars",
                explanation: "PROGRESS BARS mostram visualmente o andamento de processos! Podem ser animadas, ter cores diferentes e até múltiplas seções. É feedback visual essencial para o usuário!",
                solution: ['<div class="progress">', '<div class="progress-bar bg-success" style="width: 75%">75%</div>', '</div>'],
                success: "🎯 Incrível! Você criou feedback visual de progresso!\n\nBarras de progresso melhoram muito a experiência do usuário ao mostrar o andamento de tarefas. Essencial em formulários e uploads!",
                commands: ['<div class="progress">', '<div class="progress-bar bg-success" style="width: 75%">75%</div>', '</div>', 'progress-bar-striped', 'progress-bar-animated', 'bg-warning']
            },
    
            // NÍVEL 16 - CAROUSEL
            {
                story: "🎠 Excelente! Vamos criar um carrossel de imagens.\n\nDécimo Sexto Desafio: Crie um carousel básico! Use 'carousel slide' como container, 'carousel-inner' para os slides e 'carousel-item' para cada slide.\n\nCarousels criam apresentações dinâmicas!",
                concept: "Carousel",
                explanation: "CAROUSEL é um componente para apresentações de slides! Perfeito para galleries, depoimentos ou conteúdo em destaque. Pode ter controles de navegação e indicadores!",
                solution: ['<div class="carousel slide">', '<div class="carousel-inner">', '<div class="carousel-item active">Slide 1</div>', '<div class="carousel-item">Slide 2</div>', '</div>', '</div>'],
                success: "🎡 Perfeito! Você criou um carousel interativo!\n\nCarousels são ótimos para destacar conteúdo importante. Agora você pode criar apresentações visuais envolventes!",
                commands: ['<div class="carousel slide">', '<div class="carousel-inner">', '<div class="carousel-item active">Slide 1</div>', '<div class="carousel-item">Slide 2</div>', '</div>', '</div>']
            },
    
            // NÍVEL 17 - OFFCANVAS
            {
                story: "📱 Incrível! Vamos criar painéis laterais modernos.\n\nDécimo Sétimo Desafio: Crie um offcanvas (painel lateral)! Use 'offcanvas offcanvas-start' para um painel que desliza da esquerda.\n\nOffcanvas é perfeito para menus mobile!",
                concept: "Offcanvas",
                explanation: "OFFCANVAS são painéis que deslizam das bordas da tela! Ideais para menus de navegação em mobile, filtros ou conteúdo adicional. É como ter gavetas secretas na sua interface!",
                solution: ['<div class="offcanvas offcanvas-start">', '<div class="offcanvas-header">Menu</div>', '<div class="offcanvas-body">Conteúdo do menu</div>', '</div>'],
                success: "🚀 Sensacional! Você criou um painel lateral moderno!\n\nOffcanvas é essencial para interfaces mobile-first. Agora você pode criar navegação elegante que economiza espaço!",
                commands: ['<div class="offcanvas offcanvas-start">', '<div class="offcanvas-header">Menu</div>', '<div class="offcanvas-body">Conteúdo do menu</div>', '</div>', 'offcanvas-end', 'offcanvas-top']
            },
    
            // NÍVEL 18 - TOOLTIPS E POPOVERS
            {
                story: "💬 Fantástico! Vamos adicionar dicas interativas.\n\nDécimo Oitavo Desafio: Prepare elementos para tooltip e popover! Use atributos 'data-bs-toggle=\"tooltip\"' e 'title' para dicas rápidas.\n\nTooltips fornecem informações contextuais!",
                concept: "Tooltips e Popovers",
                explanation: "TOOLTIPS são dicas pequenas que aparecem no hover! POPOVERS são versões maiores com mais conteúdo. Ambos fornecem informações contextuais sem poluir a interface!",
                solution: ['<button class="btn btn-primary" data-bs-toggle="tooltip" title="Esta é uma dica útil!">', 'Passe o mouse aqui', '</button>'],
                success: "💡 Incrível! Você adicionou dicas interativas!\n\nTooltips e popovers melhoram a usabilidade fornecendo informações adicionais quando necessário. Interface limpa e informativa!",
                commands: ['<button class="btn btn-primary" data-bs-toggle="tooltip" title="Esta é uma dica útil!">', 'Passe o mouse aqui', '</button>', 'data-bs-toggle="popover"', 'data-bs-content="Conteúdo detalhado"']
            },
    
            // NÍVEL 19 - ACCORDION
            {
                story: "🎵 Excelente! Vamos criar painéis recolhíveis.\n\nDécimo Nono Desafio: Crie um accordion (sanfona)! Use 'accordion' como container, 'accordion-item' para cada seção e 'accordion-collapse' para o conteúdo recolhível.\n\nAccordions organizam muito conteúdo em pouco espaço!",
                concept: "Accordion",
                explanation: "ACCORDION é perfeito para FAQ, categorias ou qualquer conteúdo que precisa ser organizado de forma compacta! Usuários podem expandir apenas o que interessam!",
                solution: ['<div class="accordion">', '<div class="accordion-item">', '<h2 class="accordion-header">', '<button class="accordion-button">Pergunta 1</button>', '</h2>', '<div class="accordion-collapse collapse show">', '<div class="accordion-body">Resposta aqui</div>', '</div>', '</div>', '</div>'],
                success: "🎊 Perfeito! Você criou um accordion funcional!\n\nAccordions são essenciais para organizar grandes quantidades de informação. Agora você pode criar FAQs e seções organizadas profissionalmente!",
                commands: ['<div class="accordion">', '<div class="accordion-item">', '<h2 class="accordion-header">', '<button class="accordion-button">Pergunta 1</button>', '</h2>', '<div class="accordion-collapse collapse show">', '<div class="accordion-body">Resposta aqui</div>', '</div>', '</div>', '</div>']
            },
    
            // NÍVEL 20 - PROJETO FINAL COMPLETO
            {
                story: "🏆 DESAFIO FINAL ÉPICO!\n\nVocê chegou ao último nível! Crie uma landing page completa que integre tudo que aprendeu: navbar, hero section com container, grid de cards, formulário estilizado e footer.\n\nMostre que você é um mestre do Bootstrap!",
                concept: "Landing Page Completa",
                explanation: "PROJETO FINAL integra todos os componentes Bootstrap! Uma landing page profissional que demonstra domínio completo: layout responsivo, componentes interativos, tipografia e cores harmoniosas. É o teste definitivo!",
                solution: ['<nav class="navbar navbar-expand-lg navbar-dark bg-primary">', '<div class="container">', '<a class="navbar-brand" href="#">MeuSite</a>', '</div>', '</nav>', '<section class="bg-light py-5">', '<div class="container">', '<div class="row">', '<div class="col-lg-6">', '<h1 class="display-4">Bem-vindo!</h1>', '<p class="lead">Uma landing page incrível</p>', '<button class="btn btn-primary btn-lg">Começar</button>', '</div>', '</div>', '</div>', '</section>', '<footer class="bg-dark text-white text-center py-4">', '<div class="container">', '<p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>', '</div>', '</footer>'],
                success: "🎉🏆 PARABÉNS, MESTRE DO BOOTSTRAP! 🏆🎉\n\nVocê completou todos os 20 níveis e se tornou um verdadeiro especialista em Bootstrap! Dominou desde containers básicos até landing pages completas.\n\nAgora você pode criar:\n• Layouts responsivos profissionais\n• Componentes interativos elegantes\n• Interfaces mobile-first\n• Páginas completas rapidamente\n• Designs consistentes e acessíveis\n\nSeu conhecimento em Bootstrap é agora de nível EXPERT! Você pode criar qualquer interface que imaginar! 🚀✨💻",
                commands: ['<nav class="navbar navbar-expand-lg navbar-dark bg-primary">', '<div class="container">', '<a class="navbar-brand" href="#">MeuSite</a>', '</div>', '</nav>', '<section class="bg-light py-5">', '<div class="row">', '<div class="col-lg-6">', '<h1 class="display-4">Bem-vindo!</h1>', '<p class="lead">Uma landing page incrível</p>', '<button class="btn btn-primary btn-lg">Começar</button>', '</div>', '</section>', '<footer class="bg-dark text-white text-center py-4">', '<p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>', '</footer>']
            }
        ]
    }
};

function selectTrack(trackName) {
    selectedTrack = trackName;
    currentTrackData = tracks[trackName];
    currentLevel = 1;
    
    document.getElementById('selectionScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    // Atualizar header com informações da trilha
    document.getElementById('gameTitle').innerHTML = `${currentTrackData.icon} Aventura do Código`;
    document.getElementById('trackName').textContent = currentTrackData.name;
    
    // Atualizar personagem baseado na trilha
    const character = document.getElementById('character');
    character.textContent = currentTrackData.character;
    
    // Carregar primeiro nível
    loadLevel();
}

function backToSelection() {
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('selectionScreen').classList.remove('hidden');
    
    // Reset do jogo
    currentLevel = 1;
    userCommands = [];
    selectedTrack = '';
}

function addCommand(command) {
    userCommands.push(command);
    updateCodeDisplay();
}

function updateCodeDisplay() {
    const codeEditor = document.getElementById('codeEditor');
    
    // Limpar editor mantendo apenas o comentário inicial
    codeEditor.innerHTML = `
        <div class="code-line">
            <span class="line-number">1</span>
            <span style="color: #4CAF50;">// Seu código aqui:</span>
        </div>
    `;
    
    // Adicionar comandos do usuário
    userCommands.forEach((command, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'code-line user-line';
        lineDiv.innerHTML = `
            <span class="line-number">${index + 2}</span>
            <span style="color: #FFD93D;">${command}</span>
            <button class="remove-line-btn" onclick="removeCommand(${index})" title="Remover esta linha">×</button>
        `;
        codeEditor.appendChild(lineDiv);
    });
}

function clearCode() {
    userCommands = [];
    updateCodeDisplay();
    document.getElementById('resultPanel').classList.remove('show');
}

function undoLastCommand() {
    if (userCommands.length > 0) {
        userCommands.pop();
        updateCodeDisplay();
    }
}

function removeCommand(index) {
    userCommands.splice(index, 1);
    updateCodeDisplay();
}

function runCode() {
    const level = currentTrackData.levels[currentLevel - 1];
    const character = document.getElementById('character');
    const resultPanel = document.getElementById('resultPanel');
    const resultText = document.getElementById('resultText');

    // Animação do personagem baseada na trilha
    character.classList.add('moving');
    
    if (selectedTrack === 'css') {
        // Animação especial para CSS
        character.style.background = 'linear-gradient(45deg, #e74c3c, #f39c12)';
        setTimeout(() => {
            character.style.background = '#FF6B6B';
            character.classList.remove('moving');
        }, 1500);
    } else if (selectedTrack === 'javascript') {
        // Animação especial para JavaScript
        character.style.background = 'linear-gradient(45deg, #f1c40f, #f39c12)';
        setTimeout(() => {
            character.style.background = '#FF6B6B';
            character.classList.remove('moving');
        }, 1500);
    } else if (selectedTrack === 'react') {
        // Animação especial para React
        character.classList.add('react-animation');
        character.style.background = 'linear-gradient(45deg, #61dafb, #21d4fd)';
        setTimeout(() => {
            character.style.background = '#FF6B6B';
            character.classList.remove('moving', 'react-animation');
        }, 1500);
    } else if (selectedTrack === 'bootstrap') {
        // Animação especial para Bootstrap
        character.classList.add('bootstrap-animation');
        character.style.background = 'linear-gradient(45deg, #7952b3, #563d7c)';
        setTimeout(() => {
            character.style.background = '#FF6B6B';
            character.classList.remove('moving', 'bootstrap-animation');
        }, 1500);
    } else {
        setTimeout(() => character.classList.remove('moving'), 1000);
    }

    // Verificar se a solução está correta
    const isCorrect = arraysEqual(userCommands, level.solution);

    setTimeout(() => {
        if (isCorrect) {
            resultText.innerHTML = `<div style="color: #27ae60; font-weight: bold;">${level.success}</div>`;
            if (currentLevel < currentTrackData.levels.length) {
                document.getElementById('nextBtn').style.display = 'block';
            } else {
                // Trilha completada
                document.getElementById('nextBtn').innerHTML = '🎓 Trilha Concluída!';
                document.getElementById('nextBtn').style.display = 'block';
                document.getElementById('nextBtn').onclick = () => {
                    alert(`Parabéns! Você completou a trilha de ${currentTrackData.name}! 🚀\n\nAgora você domina os conceitos fundamentais dessa área. Que tal experimentar outra trilha?`);
                    backToSelection();
                };
            }
        } else {
            let hintText = getTrackSpecificHint(level.solution);
            
            resultText.innerHTML = `<div style="color: #e74c3c; font-weight: bold;">🤔 Ops! Essa sequência não funcionou. Tente novamente!</div>
            <div style="margin-top: 10px; color: #7f8c8d;">
                <strong>Dica:</strong> ${hintText}
            </div>`;
            document.getElementById('nextBtn').style.display = 'none';
        }
        resultPanel.classList.add('show');
    }, 1500);
}

function getTrackSpecificHint(solution) {
    if (selectedTrack === 'javascript') {
        return `Você precisa usar: ${solution.join(' → ')}. Lembre-se da sintaxe do JavaScript!`;
    } else if (selectedTrack === 'css') {
        return `Você precisa usar: ${solution.join(' ')}. Não esqueça das chaves e ponto-e-vírgula!`;
    } else if (selectedTrack === 'react') {
        return `Você precisa usar: ${solution.join(' → ')}. Lembre-se da sintaxe JSX e dos hooks!`;
    } else if (selectedTrack === 'bootstrap') {
        return `Você precisa usar: ${solution.join(' ')}. Atenção às classes CSS do Bootstrap!`;
    } else {
        return `Você precisa usar: ${solution.join(' → ')}`;
    }
}

function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, i) => val === b[i]);
}

function nextLevel() {
    if (currentLevel < currentTrackData.levels.length) {
        currentLevel++;
        loadLevel();
        clearCode();
    }
}

function loadLevel() {
    const level = currentTrackData.levels[currentLevel - 1];
    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('currentConcept').textContent = level.concept;
    document.getElementById('storyText').innerHTML = level.story.replace(/\n/g, '<br>');
    document.getElementById('conceptExplanation').innerHTML = 
        `<h4>💡 Conceito: ${level.concept}</h4>${level.explanation}`;
    
    // Atualizar comandos disponíveis para o nível atual
    const commandsContainer = document.getElementById('availableCommands');
    commandsContainer.innerHTML = '<h3>📝 Comandos Disponíveis:</h3>';
    
    level.commands.forEach(command => {
        const btn = document.createElement('button');
        btn.className = 'command-btn';
        btn.textContent = command;
        btn.onclick = () => addCommand(command);
        commandsContainer.appendChild(btn);
    });
    
    // Limpar o código quando carregar novo nível
    clearCode();
}

// Inicializar mostrando a tela de seleção
document.getElementById('selectionScreen').classList.remove('hidden');
document.getElementById('gameScreen').classList.add('hidden');