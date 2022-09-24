const imc = (peso:number , altura:number) => {
    return Math.round(peso / Math.pow(altura,2));
}



export {imc}