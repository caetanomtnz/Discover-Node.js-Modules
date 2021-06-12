// PERGUNTAR

const questions = [
    "texto",
    "texto",
    "texto",
    "texto",
    "texto",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions + " >")
}

// RESPONDER

const answers = []

process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on("exit", () =>{
    console.log(`                               
     
    Pergunta:
    ${answers[0]}
    Pergunta:
    ${answers[1]}
    Pergunta:
    ${answers[2]}
    Pergunta:
    ${answers[3]}
    Pergunta:
    ${answers[4]}
    Pergunta:
    ${answers[5]}
  `)
})



