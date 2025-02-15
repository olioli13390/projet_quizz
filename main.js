const prompt = require("prompt-sync")()

const tabQuestions = [
    {
        question: 'Quelle est la capitale de la France ?',
        answer: ['paris', 'marseille', 'lyon', 'grenoble'],
        goodanswer: 1
    },
    {
        question: "Quelle est la capitale de l'italie ?",
        answer: ['venice', 'florence', 'milan', 'rome'],
        goodanswer: 4
    },
    {
        question: 'Quelle est la capitale de la Belgique ?',
        answer: ['gent', 'anvers', 'brugges', 'bruxelles'],
        goodanswer: 4
    },
    {
        question: "Quelle est la capitale de l'espagne ?",
        answer: ['madrid', 'valence', 'barcelone', 'malaga'],
        goodanswer: 1
    },
    {
        question: "Quelle est la capitale de l' allemagne ?",
        answer: ['munich', 'fribourg', 'berlin', 'cologne'],
        goodanswer: 3
    }
]

let res = 0

for (let i = 0; i < tabQuestions.length; i++) {

    console.log(tabQuestions[i].question)

    for (let j = 0; j < tabQuestions[i].answer.length; j++) {

        console.log(`${j + 1}: ${tabQuestions[i].answer[j]}`)
    }

    let choice = Number(prompt(''))

    while (choice != 1 && choice != 2 && choice != 3 && choice != 4) {
        console.log("Tape un chiffre entre 1 et 4 pour sélectionner ta réponse");
        choice = Number(prompt(""))
    }

    if (choice === tabQuestions[i].goodanswer) {
        console.log("Bravo ! C'est la bonne réponse");
        res++

    } else {
        console.log(`Et non ! C'était la réponse est ${tabQuestions[i].goodanswer}`)

    }
}

if(res < 2){
console.log(`Il va falloir revoir la géographie... Ton score est seulement de ${res}`);

}else if (res >2 && res <4 ){
    console.log(`Pas mal ! Tu es dans la moyenne, ton score est de ${res}`);
    
} else {console.log(`Impressionnant ! C'est un sans faute ! ${res}/5 !`);
}


