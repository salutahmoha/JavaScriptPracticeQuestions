function profitableGamble(prob, prize, pay){
    return prize*prob > pay
}
console.log(profitableGamble(0.2,50,9));
