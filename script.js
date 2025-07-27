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
            {
                story: "🧠 Bem-vindo ao Reino da Lógica!\n\nVocê é um jovem programador aprendendo a pensar como um computador. Sua missão é dominar os fundamentos do pensamento computacional!\n\nPrimeiro Desafio: O herói precisa se mover para frente. Use comandos básicos para programar suas ações!",
                concept: "Comandos Básicos",
                explanation: "ALGORITMOS começam com comandos simples! Cada instrução faz o computador executar uma ação específica. É como dar direções muito precisas para alguém que segue exatamente o que você fala.",
                solution: ['mover()'],
                success: "🎯 Perfeito! Você executou seu primeiro comando!\n\nProgramação é sobre dar instruções claras e precisas. Cada comando tem um propósito específico e o computador os executa na ordem exata!",
                commands: ['mover()', 'pular()', 'pegar()', 'esperar()']
            },
            {
                story: "⚡ Excelente! Agora vamos trabalhar com repetição.\n\nSegundo Desafio: O herói precisa coletrar 3 moedas em linha. Em vez de escrever 'mover(), pegar()' três vezes, use um LOOP! O comando 'repetir(3)' executará os comandos dentro dele 3 vezes automaticamente.\n\nLoops são fundamentais na programação!",
                concept: "Loops (Repetição)",
                explanation: "LOOPS fazem o computador repetir tarefas automaticamente! Em vez de escrever o mesmo código várias vezes, usamos loops. É como dizer: 'faça isso X vezes'.",
                solution: ['repetir(3)', 'mover()', 'pegar()', 'fim_repetir'],
                success: "🔄 Incrível! Você automatizou uma tarefa repetitiva!\n\nLoops são uma das ferramentas mais poderosas da programação. Eles fazem o computador trabalhar para você, executando tarefas repetitivas sem erros!",
                commands: ['repetir(3)', 'mover()', 'pegar()', 'fim_repetir', 'esperar()']
            },
            {
                story: "🎲 Fantástico! Agora vamos tomar decisões inteligentes.\n\nTerceiro Desafio: Há duas portas! Use sensores para verificar qual é segura e tome uma decisão. Se a porta da direita for segura, entre por ela. Senão, vá pela esquerda.\n\nCondicionais fazem programas 'pensarem'!",
                concept: "Condicionais (If/Else)",
                explanation: "CONDICIONAIS permitem que programas tomem decisões! 'SE isso for verdade, ENTÃO faça aquilo, SENÃO faça outra coisa'. É como dar ao computador a capacidade de escolher!",
                solution: ['verificar_portas()', 'se(porta_direita_segura)', 'entrar_direita()', 'senao', 'entrar_esquerda()', 'fim_se'],
                success: "🧩 Extraordinário! Seu programa tomou uma decisão inteligente!\n\nCondicionais são o que fazem programas parecerem 'inteligentes'. Eles analisam situações e escolhem a melhor ação baseada nas condições!",
                commands: ['verificar_portas()', 'se(porta_direita_segura)', 'senao', 'fim_se', 'entrar_direita()', 'entrar_esquerda()']
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