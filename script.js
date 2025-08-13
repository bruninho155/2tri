const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que termina seu dia na escola, você se depara com um recurso moderno: um chat capaz de tirar qualquer dúvida e criar imagens e sons quase idênticos à realidade. Qual é a primeira coisa que passa pela sua cabeça?",
        alternativas: [
            {
                texto: "Que medo disso!",
                afirmacao: "Inicialmente, teve medo das possíveis consequências dessa tecnologia. "
            },
            {
                texto: "Que coisa incrível!",
                afirmacao: "Quis aprender maneiras de usar a IA diariamente."
            }
        ]
    },
    {
        enunciado: "A descoberta da Inteligência Artificial levou uma professora de tecnologia da escola a criar várias aulas sobre essa novidade. No fim de uma delas, ela pede que você faça um trabalho sobre como a IA pode ser aplicada em sala de aula. Como você encara essa oportunidade?",
        alternativas: [
            {
                texto: "Recorra a um mecanismo de busca com inteligência artificial para encontrar conteúdos importantes para o seu trabalho e explique esses dados de maneira simples.",
                afirmacao: "Você utilizou a ferramenta de IA para localizar informações valiosas."
            },
            {
                texto: "Produza o trabalho a partir das discussões com seus colegas, investigações online e no conhecimento que possui sobre o tema.",
                afirmacao: "Experimentou maior facilidade ao recorrer aos seus próprios recursos para desenvolver o trabalho."
            }
        ]
    },
    {
        enunciado: "Quando o trabalho escrito foi concluído, a professora abriu um debate entre os alunos para entender o processo de criação e pesquisa. Um ponto essencial entrou na pauta: o papel da inteligência artificial no trabalho que virá. Qual seria sua resposta nessa situação?",
        alternativas: [
            {
                texto: "Defende que a IA traz novas possibilidades de emprego e contribui para o aprimoramento das habilidades humanas.",
                afirmacao: "Tem liderado a evolução na área de IA, empenhando-se em gerar novas trajetórias profissionais com o uso dessa tecnologia."
            },
            {
                texto: "Sinto preocupação pelas pessoas que podem ser desempregadas por causa das máquinas e apoio a defesa dos direitos dos trabalhadores.",
                afirmacao: "Movido pela preocupação com as pessoas, você criou um grupo de estudos para conversar sobre a aplicação ética da IA."
            }
        ]
    },
    {
        enunciado: "Após o fim da discussão, sua missão foi gerar no computador uma imagem que simbolizasse sua visão sobre a inteligência artificial. E então, como você procede?",
        alternativas: [
            {
                texto: "Elaborar uma imagem através de um software de design, como o Paint.",
                afirmacao: "Notou que diversas pessoas ainda não sabem usar ferramentas tradicionais e escolheu ajudar compartilhando conhecimentos de design com ferramentas digitais simples para iniciantes."
            },
            {
                texto: "Elaborar uma imagem com a ajuda de um gerador de imagens inteligente.",
                afirmacao: "Você aprimorou seu ritmo de produção usando geradores de imagem e agora compartilha esse conhecimento com quem tem dificuldades em desenhar manualmente."
            }
        ]
    },
    {
        enunciado: "Com a entrega do trabalho de biologia marcada para a semana seguinte e o grupo atrasado, um dos membros decide usar a inteligência artificial. Porém, o conteúdo ficou totalmente copiado do chat. Qual é a sua decisão? ",
        alternativas: [
            {
                texto: "Ao escrever comandos para o chat, você contribui com o trabalho, o que torna o uso do texto completo aceitável.",
                afirmacao: "Infelizmente, você passou a utilizar a inteligência artificial em todas as suas tarefas e agora depende dela para praticamente tudo."
            },
            {
                texto: "Apesar da sofisticação do chat, é preciso cautela porque nenhuma máquina é infalível; revisar o trabalho e acrescentar pontos de vista pessoais é crucial.",
                afirmacao: "Entendeu que toda inteligência artificial segue os parâmetros da empresa programadora e que parte do que o chat gerava não refletia seu pensamento, por isso sabe que os textos da IA devem ser usados como suporte, não como resultado completo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2053...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
