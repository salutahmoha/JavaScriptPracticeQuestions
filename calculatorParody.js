function calculatorParody(parody){
    try{
        return eval(parody);
    }catch{
        return "invalid expression";
    }
}
console.log(calculatorParody("5+3*2"));
