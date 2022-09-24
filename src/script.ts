import { imc } from "./imc";
import PromptSync from "Prompt-Sync";

const prompt = PromptSync()

console.log('SEJA BEM VINDE AO CALCULO DO ÍNDICE DE MASSA CORPORAL! <br>')

const peso = Number(prompt('Digite seu peso: '))
const altura = Number(prompt('Digite sua altura: '))

const calculoImc = imc(peso,altura);

console.log(`O seu Índice de Massa Corporal (IMC) é igual a: ${calculoImc}`)