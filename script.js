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
    },
    {
        story: "⚡ Excelente! Agora você domina algoritmos básicos.\n\nQuarto Desafio - LOOPS: O herói encontrou um corredor longo com 3 moedas espalhadas. Em vez de escrever mover() três vezes, use um LOOP!\n\nO loop 'repetir(3)' executará os comandos dentro dele 3 vezes. Coloque mover() e pegar() dentro do loop para coletar todas as moedas automaticamente!",
        concept: "Loops (Repetição)",
        explanation: "LOOPS são estruturas que repetem comandos automaticamente! Em vez de escrever o mesmo código várias vezes, usamos loops para ser mais eficientes. O loop 'repetir(3)' executa os comandos internos 3 vezes.",
        solution: ['repetir(3)', 'mover()', 'pegar()', 'fim_repetir'],
        success: "🔄 Incrível! O herói coletou as 3 moedas usando um loop!\n\nVocê aprendeu sobre LOOPS: uma das estruturas mais poderosas da programação. Eles fazem o computador repetir tarefas automaticamente, economizando tempo e código!",
        commands: ['mover()', 'pular()', 'pegar()', 'repetir(3)', 'fim_repetir', 'esperar()']
    },
    {
        story: "🪙 Fantástico! O herói coletou todas as moedas usando loops.\n\nQuinto Desafio - CONDICIONAIS: Agora há duas portas! A porta da esquerda tem uma armadilha, a da direita é segura.\n\nUse a estrutura 'se(porta_segura)' para verificar qual porta é segura antes de entrar. Se for segura, entre; se não, pule para a outra porta!\n\nO herói pode usar 'verificar_porta()' para detectar a porta segura.",
        concept: "Condicionais (If/Else)",
        explanation: "CONDICIONAIS permitem que o programa tome decisões! 'se(condição)' executa comandos apenas quando a condição é verdadeira. É como perguntar: 'SE isso for verdade, ENTÃO faça aquilo'.",
        solution: ['verificar_porta()', 'se(porta_segura)', 'entrar()', 'senao', 'pular()', 'entrar()', 'fim_se'],
        success: "🚪 Perfeito! O herói escolheu a porta certa usando condicionais!\n\nVocê aprendeu sobre CONDICIONAIS: elas fazem o programa 'pensar' e tomar decisões baseadas em informações. Isso torna o código inteligente e adaptável!",
        commands: ['verificar_porta()', 'se(porta_segura)', 'senao', 'fim_se', 'entrar()', 'pular()', 'mover()']
    },
    {
        story: "🏛️ Brilhante! O herói passou pela porta segura.\n\nSexto Desafio - FUNÇÕES: O herói chegou ao templo final! Há um padrão complexo que se repete: mover, pular, pegar, esperar.\n\nCrie uma FUNÇÃO chamada 'sequencia_templo()' que contenha essa sequência. Depois execute a função 2 vezes para atravessar o templo!\n\nFunções são como 'mini-programas' reutilizáveis dentro do seu código.",
        concept: "Funções",
        explanation: "FUNÇÕES são blocos de código reutilizáveis! Você define uma função uma vez e pode usá-la quantas vezes quiser. É como criar um 'atalho' para uma sequência de comandos complexa.",
        solution: ['definir_funcao(sequencia_templo)', 'mover()', 'pular()', 'pegar()', 'esperar()', 'fim_funcao', 'sequencia_templo()', 'sequencia_templo()'],
        success: "🏺 Extraordinário! O herói atravessou o templo usando funções!\n\nVocê dominou FUNÇÕES: uma das ferramentas mais importantes da programação! Elas organizam o código, evitam repetição e tornam programas complexos mais simples de entender.",
        commands: ['definir_funcao(sequencia_templo)', 'fim_funcao', 'sequencia_templo()', 'mover()', 'pular()', 'pegar()', 'esperar()']
    },
    {
        story: "🏺 Extraordinário! O herói atravessou o templo usando funções!\n\nSétimo Desafio - ARRAYS & LOOPS AVANÇADOS: O herói encontrou um cofre com código especial!\n\nO cofre tem uma sequência de 4 ações: ['pular', 'mover', 'pegar', 'esperar']. Use um array e um loop 'para_cada()' para executar cada ação da lista automaticamente!\n\nArrays armazenam múltiplos valores, e loops avançados podem percorrer cada item.",
        concept: "Arrays & Loops Avançados",
        explanation: "ARRAYS são listas que armazenam múltiplos valores! LOOPS AVANÇADOS como 'para_cada()' podem percorrer cada item do array automaticamente. É a combinação perfeita para processar conjuntos de dados!",
        solution: ['criar_array([pular,mover,pegar,esperar])', 'para_cada(acao)', 'executar(acao)', 'fim_para_cada'],
        success: "💎 Fantástico! O herói desbloqueou o cofre usando arrays e loops avançados!\n\nVocê dominou estruturas de dados complexas! Agora vamos mergulhar na LÓGICA COMPUTACIONAL...",
        commands: ['criar_array([pular,mover,pegar,esperar])', 'para_cada(acao)', 'executar(acao)', 'fim_para_cada']
    },
    {
        story: "🧠 LÓGICA BOOLEANA: O herói chegou ao Portal da Lógica! Há 3 sensores que detectam diferentes condições:\n\n🔴 sensor_inimigo() - detecta inimigos (VERDADEIRO/FALSO)\n🟡 sensor_tesouro() - detecta tesouros (VERDADEIRO/FALSO)\n🟢 sensor_armadilha() - detecta armadilhas (VERDADEIRO/FALSO)\n\nO herói só deve AVANÇAR se NÃO há inimigos E há tesouro E NÃO há armadilhas!\n\nUse operadores lógicos: E (&&), OU (||), NÃO (!)",
        concept: "Lógica Booleana & Operadores",
        explanation: "LÓGICA BOOLEANA trabalha com VERDADEIRO/FALSO! Operadores lógicos combinam condições: E (&&) = ambas verdadeiras, OU (||) = pelo menos uma verdadeira, NÃO (!) = inverte o valor.",
        solution: ['ler_sensores()', 'se(!sensor_inimigo() && sensor_tesouro() && !sensor_armadilha())', 'avancar()', 'senao', 'recuar()', 'fim_se'],
        success: "🎯 Perfeito! O herói usou lógica booleana para tomar a decisão correta!\n\nVocê aprendeu que a programação é muito sobre LÓGICA: combinar condições usando E, OU, NÃO para criar regras inteligentes!",
        commands: ['ler_sensores()', 'se(!sensor_inimigo() && sensor_tesouro() && !sensor_armadilha())', 'senao', 'fim_se', 'avancar()', 'recuar()', '!', '&&', '||']
    },
    {
        story: "⚡ Excelente lógica! Agora um desafio mais complexo...\n\nESTRUTURAS LÓGICAS ANINHADAS: O herói encontrou um labirinto com múltiplas condições!\n\nRegras do labirinto:\n1. SE há tesouro À DIREITA → vá para direita\n2. SENÃO, SE há caminho À FRENTE → vá para frente  \n3. SENÃO, SE há caminho À ESQUERDA → vá para esquerda\n4. SENÃO → recue\n\nUse condicionais aninhados (SE dentro de SE) para criar essa lógica!",
        concept: "Lógica Aninhada & Prioridades",
        explanation: "LÓGICA ANINHADA permite decisões em cascata! Cada 'SENÃO SE' cria uma nova verificação apenas se a anterior falhou. É como uma árvore de decisões com prioridades!",
        solution: ['verificar_direcoes()', 'se(tesouro_direita)', 'ir_direita()', 'senao_se(caminho_frente)', 'ir_frente()', 'senao_se(caminho_esquerda)', 'ir_esquerda()', 'senao', 'recuar()', 'fim_se'],
        success: "🧩 Incrível! O herói navegou pelo labirinto usando lógica aninhada!\n\nVocê dominou estruturas de decisão complexas! Isso é pensamento computacional avançado - resolver problemas através de lógica estruturada!",
        commands: ['verificar_direcoes()', 'se(tesouro_direita)', 'senao_se(caminho_frente)', 'senao_se(caminho_esquerda)', 'senao', 'fim_se', 'ir_direita()', 'ir_frente()', 'ir_esquerda()', 'recuar()']
    },
    {
        story: "🎲 LÓGICA PROBABILÍSTICA: O herói chegou ao Cassino dos Algoritmos!\n\nHá 3 máquinas de jogos. Cada uma tem uma probabilidade diferente de dar prêmio:\n🎰 Máquina A: 70% de chance\n🎰 Máquina B: 30% de chance  \n🎰 Máquina C: 90% de chance\n\nCrie um algoritmo que:\n1. Verifique a probabilidade de cada máquina\n2. Escolha sempre a máquina com MAIOR probabilidade\n3. Jogue apenas SE a probabilidade for > 50%",
        concept: "Lógica Probabilística & Comparações",
        explanation: "LÓGICA PROBABILÍSTICA envolve tomar decisões baseadas em chances e comparações! Usamos operadores como > (maior), < (menor), >= (maior igual) para comparar valores e escolher a melhor opção.",
        solution: ['verificar_probabilidades()', 'se(prob_C > prob_A && prob_C > prob_B && prob_C > 50)', 'jogar_maquina_C()', 'senao_se(prob_A > prob_B && prob_A > 50)', 'jogar_maquina_A()', 'senao_se(prob_B > 50)', 'jogar_maquina_B()', 'senao', 'nao_jogar()', 'fim_se'],
        success: "🎉 Genial! O herói escolheu a melhor estratégia usando lógica probabilística!\n\nVocê aprendeu a combinar comparações numéricas com lógica booleana para otimizar decisões - uma habilidade essencial em IA e ciência de dados!",
        commands: ['verificar_probabilidades()', 'se(prob_C > prob_A && prob_C > prob_B && prob_C > 50)', 'senao_se(prob_A > prob_B && prob_A > 50)', 'senao_se(prob_B > 50)', 'jogar_maquina_C()', 'jogar_maquina_A()', 'jogar_maquina_B()', 'nao_jogar()', '>', '<', '>=', '&&', 'fim_se']
    },
    {
        story: "🧮 ALGORITMOS DE BUSCA: O herói precisa encontrar a 'Chave Dourada' em um baú cheio de itens!\n\nO baú contém: ['moeda', 'gema', 'chave_dourada', 'poção', 'pergaminho']\n\nCrie um algoritmo de busca que:\n1. Percorra cada item do array\n2. Compare cada item com 'chave_dourada'\n3. SE encontrar, pare a busca e pegue o item\n4. SE não encontrar, continue procurando\n\nUse uma variável 'encontrado' para controlar o loop!",
        concept: "Algoritmos de Busca & Variáveis de Controle",
        explanation: "ALGORITMOS DE BUSCA procuram itens específicos em conjuntos de dados! Usamos VARIÁVEIS DE CONTROLE (como 'encontrado') para saber quando parar. É a base de sistemas de busca e bancos de dados!",
        solution: ['criar_array([moeda,gema,chave_dourada,poção,pergaminho])', 'encontrado = falso', 'para_cada(item)', 'se(item == chave_dourada)', 'pegar(item)', 'encontrado = verdadeiro', 'parar_busca()', 'fim_se', 'fim_para_cada'],
        success: "🔍 Extraordinário! O herói implementou um algoritmo de busca eficiente!\n\nVocê criou um dos algoritmos mais fundamentais da computação! Sistemas de busca como Google usam princípios similares, mas em escala gigantesca!",
        commands: ['criar_array([moeda,gema,chave_dourada,poção,pergaminho])', 'encontrado = falso', 'para_cada(item)', 'se(item == chave_dourada)', 'pegar(item)', 'encontrado = verdadeiro', 'parar_busca()', 'fim_se', 'fim_para_cada', '==', '=']
    },
    {
        story: "🏆 DESAFIO FINAL - INTELIGÊNCIA ARTIFICIAL BÁSICA: O herói chegou ao Guardião Final, um robô com IA!\n\nO Guardião tem 3 estados: CALMO, ALERTA, HOSTIL\nE 3 ações possíveis para o herói: APROXIMAR, NEGOCIAR, ATACAR\n\nCrie uma IA que decide a melhor ação baseada no estado:\n• SE CALMO → APROXIMAR (seguro)\n• SE ALERTA → NEGOCIAR (diplomacia)\n• SE HOSTIL → verificar se herói tem força > 80, então ATACAR, senão FUGIR\n\nUse lógica complexa com múltiplas variáveis!",
        concept: "Inteligência Artificial & Tomada de Decisão",
        explanation: "IA BÁSICA combina múltiplas condições para simular 'inteligência'! O programa analisa variáveis (estado, força, contexto) e escolhe a melhor ação. É assim que funcionam NPCs em jogos e assistentes virtuais!",
        solution: ['verificar_estado_guardiao()', 'verificar_forca_heroi()', 'se(estado == CALMO)', 'aproximar()', 'senao_se(estado == ALERTA)', 'negociar()', 'senao_se(estado == HOSTIL && forca_heroi > 80)', 'atacar()', 'senao', 'fugir()', 'fim_se'],
        success: "👑 PARABÉNS! Você dominou a Aventura do Código COMPLETA!\n\n🎓 CONCEITOS DOMINADOS:\n✅ Comandos e Algoritmos\n✅ Loops e Condicionais  \n✅ Funções e Arrays\n✅ Lógica Booleana\n✅ Estruturas Aninhadas\n✅ Lógica Probabilística\n✅ Algoritmos de Busca\n✅ Inteligência Artificial Básica\n\nVocê agora pensa como um programador profissional! 🚀🧠",
        commands: ['verificar_estado_guardiao()', 'verificar_forca_heroi()', 'se(estado == CALMO)', 'senao_se(estado == ALERTA)', 'senao_se(estado == HOSTIL && forca_heroi > 80)', 'aproximar()', 'negociar()', 'atacar()', 'fugir()', '==', '&&', '>', 'fim_se']
    }
];

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
    const level = levels[currentLevel - 1];
    const character = document.getElementById('character');
    const resultPanel = document.getElementById('resultPanel');
    const resultText = document.getElementById('resultText');

    // Animação mais elaborada baseada no nível
    character.classList.add('moving');
    
    if (currentLevel >= 4) {
        // Animação especial para níveis avançados
        let animationCount = 0;
        const maxAnimations = currentLevel >= 6 ? 4 : 2;
        
        const animate = () => {
            if (animationCount < maxAnimations) {
                setTimeout(() => {
                    character.style.transform = `translateX(${(animationCount + 1) * 15}px) scale(1.1)`;
                    animationCount++;
                    animate();
                }, 300);
            } else {
                setTimeout(() => {
                    character.style.transform = 'translateX(0) scale(1)';
                    character.classList.remove('moving');
                }, 300);
            }
        };
        animate();
    } else {
        setTimeout(() => character.classList.remove('moving'), 1000);
    }

    // Verificar se a solução está correta
    const isCorrect = arraysEqual(userCommands, level.solution);

    setTimeout(() => {
        if (isCorrect) {
            resultText.innerHTML = `<div style="color: #27ae60; font-weight: bold;">${level.success}</div>`;
            if (currentLevel < levels.length) {
                document.getElementById('nextBtn').style.display = 'block';
            } else {
                // Nível final completado
                document.getElementById('nextBtn').innerHTML = '🎓 Jogo Concluído!';
                document.getElementById('nextBtn').style.display = 'block';
                document.getElementById('nextBtn').onclick = () => {
                    alert('Parabéns! Você completou todos os níveis da Aventura do Código! 🚀\n\nAgora você conhece os conceitos fundamentais da programação!');
                };
            }
        } else {
            let hintText = getSolutionHint(level.solution);
            if (currentLevel >= 4) {
                // Dicas mais específicas para níveis avançados
                if (currentLevel === 4) hintText = "Lembre-se: primeiro abra o loop repetir(3), depois os comandos, depois feche com fim_repetir";
                else if (currentLevel === 5) hintText = "Estrutura: verificar_porta() → se(porta_segura) → entrar() → senao → pular() → entrar() → fim_se";
                else if (currentLevel === 6) hintText = "Primeiro defina a função, depois execute ela duas vezes!";
                else if (currentLevel === 7) hintText = "Crie o array primeiro, depois use para_cada para percorrer cada item!";
                else if (currentLevel === 8) hintText = "Use operadores lógicos: ! (NÃO), && (E). Estrutura: se(!inimigo && tesouro && !armadilha)";
                else if (currentLevel === 9) hintText = "Use senao_se para criar uma cascata de decisões com prioridades!";
                else if (currentLevel === 10) hintText = "Compare probabilidades com > e use && para múltiplas condições!";
                else if (currentLevel === 11) hintText = "Use para_cada + se(item == chave_dourada) + variável de controle 'encontrado'";
                else if (currentLevel === 12) hintText = "Combine múltiplas condições: estado do guardião + força do herói. Use == para comparações!";
            }
            
            resultText.innerHTML = `<div style="color: #e74c3c; font-weight: bold;">🤔 Ops! Essa sequência não funcionou. Tente novamente!</div>
            <div style="margin-top: 10px; color: #7f8c8d;">
                <strong>Dica:</strong> ${hintText}
            </div>`;
            document.getElementById('nextBtn').style.display = 'none';
        }
        resultPanel.classList.add('show');
    }, currentLevel >= 6 ? 2000 : 1500);
}

function getSolutionHint(solution) {
    const hints = {
        'mover()': 'O herói precisa se mover!',
        'pular()': 'Há algo para pular!',
        'pegar()': 'Não esqueça de pegar o item!',
        'esperar()': 'Às vezes é preciso esperar o momento certo!',
        'repetir(3)': 'Use um loop para repetir ações!',
        'fim_repetir': 'Todo loop precisa de um fim!',
        'verificar_porta()': 'Primeiro verifique a situação!',
        'se(porta_segura)': 'Use condicionais para tomar decisões!',
        'senao': 'E se a condição for falsa?',
        'fim_se': 'Todo condicional precisa de um fim!',
        'definir_funcao(sequencia_templo)': 'Crie uma função reutilizável!',
        'fim_funcao': 'Toda função precisa de um fim!',
        'sequencia_templo()': 'Execute a função que você criou!',
        'criar_array([pular,mover,pegar,esperar])': 'Crie uma lista de ações!',
        'para_cada(acao)': 'Use um loop para percorrer o array!',
        'executar(acao)': 'Execute cada ação do array!',
        'fim_para_cada': 'Todo loop precisa de um fim!',
        '!': 'Operador NÃO - inverte verdadeiro/falso!',
        '&&': 'Operador E - ambas condições devem ser verdadeiras!',
        '||': 'Operador OU - pelo menos uma condição verdadeira!',
        'ler_sensores()': 'Primeiro colete as informações!',
        'senao_se(caminho_frente)': 'Use senao_se para decisões em cascata!',
        '==': 'Operador de comparação - verifica se são iguais!',
        '>': 'Operador maior que - para comparações numéricas!',
        'encontrado = falso': 'Variável de controle para loops de busca!'
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
    
    // Atualizar comandos disponíveis para o nível atual
    const commandsContainer = document.querySelector('.available-commands');
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

function resetCode() {
    userCommands = [];
    updateCodeDisplay();
    document.getElementById('resultPanel').classList.remove('show');
}

// Inicializar o jogo
loadLevel();