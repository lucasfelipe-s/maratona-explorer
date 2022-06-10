const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];
const elementAnswer = document.querySelector("#answer");
const inputQuestion = document.querySelector("#inputQuestion");
const btnAsk = document.querySelector("#btnAsk");


function doQuestion() {

    if(inputQuestion.value == "") {
        alert("Por favor, faça uma pergunta.");
        return;
    }

    btnAsk.setAttribute("disabled", true)

    const question = "<div>" + inputQuestion.value + "</div>";
    
    const totalAnswers = answers.length;
    const randomNumber = Math.floor(Math.random() * totalAnswers);

    elementAnswer.innerHTML = question + answers[randomNumber];

    elementAnswer.style.opacity = 1;

    setTimeout(function() {
        elementAnswer.style.opacity = 0;
        btnAsk.removeAttribute("disabled");
    },3000);
}