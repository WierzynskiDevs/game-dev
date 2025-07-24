let currentLevel = 1;
        let userCommands = [];
        
        const levels = [
            {
                story: "🌟 Bem-vindo à Aventura do Código!\n\nVocê é um jovem programador que acabou de chegar ao Reino Digital. Sua missão é ajudar o herói 🤖 a atravessar diferentes desafios usando o poder da programação!\n\nPrimeiro Desafio: O herói precisa se mover para frente para encontrar a chave mágica. Use os comandos disponíveis para programar suas ações!",
                concept: "Comandos Básicos",
                explanation: "Na programação, damos instruções específicas para o computador executar. Cada comando faz uma ação diferente. Comece com comandos simples!",
                solution: ['mover()'],
                success: "🎉 Excelente! O herói se moveu e encontrou a chave mágica! ✨\n\nVocê aprendeu que na programação, cada comando executa uma ação específica. O comando mover() fez o herói se deslocar.",
                commands: ['mover()', 'pular()', 'pegar()', 'esperar()']
            },
            {
                story: "🗝️ Ótimo trabalho! Agora o herói tem a chave mágica.\n\nSegundo Desafio: Há um obstáculo à frente! O herói precisa PULAR sobre ele e depois PEGAR o tesouro do outro lado.\n\nLembre-se: a ordem dos comandos importa muito na programação!",
                concept: "Sequência de Comandos",
                explanation: "Na programação, a ORDEM das instruções é fundamental! Os comandos são executados um após o outro, de cima para baixo.",
                solution: ['pular()', 'pegar()'],
                success: "🏆 Fantástico! O herói pulou o obstáculo e pegou o tesouro!\n\nVocê aprendeu sobre SEQUÊNCIA: os comandos são executados na ordem que você os escreve. Primeiro pular(), depois pegar()!",
                commands: ['mover()', 'pular()', 'pegar()', 'esperar()']
            },
            {
                story: "💰 Incrível! O herói coletou o tesouro.\n\nTerceiro Desafio: Agora há uma sequência mais complexa! O herói precisa:\n1. MOVER para se aproximar\n2. ESPERAR um momento (para o guarda passar)\n3. PULAR sobre a armadilha\n4. PEGAR a poção mágica\n\nPense na sequência correta!",
                concept: "Algoritmos Simples",
                explanation: "Um ALGORITMO é uma sequência de passos para resolver um problema. Como uma receita de bolo, cada passo deve ser feito na ordem certa!",
                solution: ['mover()', 'esperar()', 'pular()', 'pegar()'],
                success: "🧪 Perfeito! O herói executou todo o algoritmo corretamente!\n\nVocê criou seu primeiro ALGORITMO completo: uma sequência lógica de comandos para resolver um problema complexo!",
                commands: ['mover()', 'pular()', 'pegar()', 'esperar()']
            }
        ];

        function addCommand(command) {
            userCommands.push(command);
            updateCodeDisplay();
        }

        function updateCodeDisplay() {
            const userCodeElement = document.getElementById('userCode');
            userCodeElement.innerHTML = userCommands.join('<br><span class="line-number">' + (userCommands.length + 2) + '</span>');
        }

        function runCode() {
            const level = levels[currentLevel - 1];
            const character = document.getElementById('character');
            const resultPanel = document.getElementById('resultPanel');
            const resultText = document.getElementById('resultText');

            // Animação do personagem
            character.classList.add('moving');
            setTimeout(() => character.classList.remove('moving'), 1000);

            // Verificar se a solução está correta
            const isCorrect = arraysEqual(userCommands, level.solution);

            setTimeout(() => {
                if (isCorrect) {
                    resultText.innerHTML = `<div style="color: #27ae60; font-weight: bold;">${level.success}</div>`;
                    document.getElementById('nextBtn').style.display = currentLevel < levels.length ? 'block' : 'none';
                } else {
                    resultText.innerHTML = `<div style="color: #e74c3c; font-weight: bold;">🤔 Ops! Essa sequência não funcionou. Tente novamente!</div>
                    <div style="margin-top: 10px; color: #7f8c8d;">
                        <strong>Dica:</strong> ${getSolutionHint(level.solution)}
                    </div>`;
                    document.getElementById('nextBtn').style.display = 'none';
                }
                resultPanel.classList.add('show');
            }, 1500);
        }

        function getSolutionHint(solution) {
            const hints = {
                'mover()': 'O herói precisa se mover!',
                'pular()': 'Há algo para pular!',
                'pegar()': 'Não esqueça de pegar o item!',
                'esperar()': 'Às vezes é preciso esperar o momento certo!'
            };
            
            return `Você precisa usar: ${solution.map(cmd => cmd).join(' → ')}`;
        }

        function arraysEqual(a, b) {
            return a.length === b.length && a.every((val, i) => val === b[i]);
        }

        function nextLevel() {
            if (currentLevel < levels.length) {
                currentLevel++;
                loadLevel();
                resetCode();
            }
        }

        function loadLevel() {
            const level = levels[currentLevel - 1];
            document.getElementById('currentLevel').textContent = currentLevel;
            document.getElementById('currentConcept').textContent = level.concept;
            document.getElementById('storyText').innerHTML = level.story.replace(/\n/g, '<br>');
            document.getElementById('conceptExplanation').innerHTML = 
                `<h4>💡 Conceito: ${level.concept}</h4>${level.explanation}`;
        }

        function resetCode() {
            userCommands = [];
            updateCodeDisplay();
            document.getElementById('resultPanel').classList.remove('show');
        }

        // Inicializar o jogo
        loadLevel();