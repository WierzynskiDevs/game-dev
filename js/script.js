let currentLevel = 1;
let userCommands = [];
let selectedTrack = '';
let currentTrackData = {};

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