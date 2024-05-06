import inquirer from "inquirer"
import colors from "colors"
import mediat from "./modu_interno.js"
const mediaA = mediat

inquirer
.prompt([
    {
        name: 'p1',
        message:'Qual a primeira nota'
    },
    {
        name: 'p2',
        message:'Qual a segunda nota'
    }
]).then((answers) => {
    console.log(answers)
    const nota1 = Number(answers.p1)
    const nota2 = Number(answers.p2)
    
    const media = mediat(nota1,nota2)
    if(media >=7){
        console.log(`Voce foi aprovado ${media}`.bgGreen)
    }else{
        console(`Voce foi reprovador ${media}`.red)
    }


    
})
.catch((err) => {
    console.error(err)
})