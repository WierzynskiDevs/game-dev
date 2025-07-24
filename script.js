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
            {
                story: "🌟 Bem-vindo ao Reino do JavaScript!\n\nVocê é um desenvolvedor web em treinamento. Sua missão é dominar a linguagem que controla toda a web!\n\nPrimeiro Desafio: Crie sua primeira variável para armazenar o nome do herói. Use 'let' para declarar variáveis em JavaScript!",
                concept: "Variáveis",
                explanation: "VARIÁVEIS são 'caixas' que guardam dados! Em JavaScript, usamos 'let' para criar variáveis que podem mudar de valor. É como dar um nome para um valor que queremos usar depois.",
                solution: ['let nomeHeroi = "Aventureiro"', 'console.log(nomeHeroi)'],
                success: "🎉 Perfeito! Você criou sua primeira variável em JavaScript!\n\nVariáveis são fundamentais - elas guardam informações que seu programa pode usar e modificar. O 'let' cria uma variável que pode ser alterada depois!",
                commands: ['let nomeHeroi = "Aventureiro"', 'console.log(nomeHeroi)', 'let idade = 25', 'const PI = 3.14']
            },
            {
                story: "💻 Excelente! Agora você domina variáveis.\n\nSegundo Desafio: O herói precisa de uma função para calcular danos! Crie uma função chamada 'calcularDano' que recebe um parâmetro 'ataque' e retorna o valor multiplicado por 2.\n\nFunções são blocos de código reutilizáveis em JavaScript!",
                concept: "Funções",
                explanation: "FUNÇÕES são blocos de código que fazem tarefas específicas! Você define uma vez e pode usar muitas vezes. Em JavaScript, usamos 'function nome(parâmetros) { código }'.",
                solution: ['function calcularDano(ataque) {', 'return ataque * 2', '}', 'console.log(calcularDano(10))'],
                success: "⚡ Fantástico! Sua função está funcionando perfeitamente!\n\nFunções são o coração do JavaScript! Elas organizam o código, evitam repetição e tornam tudo mais limpo e reutilizável.",
                commands: ['function calcularDano(ataque) {', 'return ataque * 2', '}', 'console.log(calcularDano(10))', 'let resultado =']
            },
            {
                story: "🔥 Incrível! Suas funções estão poderosas.\n\nTerceiro Desafio: Agora vamos manipular o DOM! O herói precisa mudar o texto de um elemento HTML na página. Use 'document.getElementById()' para selecionar um elemento e '.textContent' para alterar seu texto.\n\nDOM é como JavaScript conversa com HTML!",
                concept: "Manipulação do DOM",
                explanation: "DOM (Document Object Model) é como JavaScript vê e modifica páginas web! Você pode selecionar elementos HTML e alterar seu conteúdo, estilo ou comportamento.",
                solution: ['let elemento = document.getElementById("heroi")', 'elemento.textContent = "Herói Poderoso!"'],
                success: "🌐 Sensacional! Você dominou a manipulação do DOM!\n\nIsso é JavaScript real! Agora você pode fazer páginas web interativas, alterando conteúdo, estilos e muito mais dinamicamente!",
                commands: ['let elemento = document.getElementById("heroi")', 'elemento.textContent = "Herói Poderoso!"', 'elemento.style.color = "red"', 'document.querySelector(".classe")']
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
            {
                story: "🎨 Bem-vindo ao Reino do Design!\n\nVocê é um designer web aprendendo a criar experiências visuais incríveis! Sua missão é dominar CSS, a linguagem que deixa a web bonita.\n\nPrimeiro Desafio: O herói precisa de estilo! Use um seletor CSS para dar cor vermelha ao texto do elemento 'heroi'.",
                concept: "Seletores CSS",
                explanation: "SELETORES são como você escolhe elementos HTML para estilizar! Eles são a ponte entre seu CSS e os elementos da página. Cada seletor aponta para elementos específicos.",
                solution: ['#heroi {', 'color: red;', '}'],
                success: "🌈 Perfeito! Você deu vida ao seu primeiro elemento!\n\nSeletores são fundamentais no CSS. Eles permitem escolher exatamente quais elementos você quer estilizar na página!",
                commands: ['#heroi {', '}', 'color: red;', '.classe {', 'background: blue;']
            },
            {
                story: "🏗️ Incrível! Agora vamos organizar o layout.\n\nSegundo Desafio: Crie um container flexível! Use 'display: flex' para organizar elementos lado a lado e 'justify-content: center' para centralizá-los.\n\nFlexbox é a ferramenta moderna para layouts!",
                concept: "Flexbox Layout",
                explanation: "FLEXBOX é um sistema de layout poderoso! Ele permite organizar elementos de forma flexível e responsiva. É como ter superpoderes para organizar coisas na tela!",
                solution: ['.container {', 'display: flex;', 'justify-content: center;', '}'],
                success: "📐 Sensacional! Você criou um layout flexível e moderno!\n\nFlexbox revolucionou como fazemos layouts na web. Agora você pode organizar elementos de forma intuitiva e responsiva!",
                commands: ['.container {', '}', 'display: flex;', 'justify-content: center;', 'align-items: center;']
            },
            {
                story: "✨ Fantástico! Agora vamos adicionar movimento.\n\nTerceiro Desafio: Crie uma animação suave! Use '@keyframes' para definir uma animação que faz o herói se mover da esquerda para a direita, e aplique com 'animation'.\n\nAnimações trazem vida às páginas!",
                concept: "Animações CSS",
                explanation: "ANIMAÇÕES CSS criam movimento e interatividade! @keyframes define os passos da animação, e a propriedade animation aplica ela ao elemento. É como dar vida aos seus designs!",
                solution: ['@keyframes mover {', 'from { transform: translateX(0); }', 'to { transform: translateX(100px); }', '}', '.heroi { animation: mover 2s; }'],
                success: "🎭 Incrível! Você criou uma animação fluida e profissional!\n\nAnimações CSS são o que fazem sites modernos se destacarem. Você agora pode criar experiências visuais envolventes e interativas!",
                commands: ['@keyframes mover {', 'from { transform: translateX(0); }', 'to { transform: translateX(100px); }', '}', '.heroi { animation: mover 2s; }']
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