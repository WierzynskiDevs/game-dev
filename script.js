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