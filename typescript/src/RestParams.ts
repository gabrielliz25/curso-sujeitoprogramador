function somarTudo(...nums: number[]) {
    return nums.reduce((acum, valor) => {
        return acum + valor
    }, 0)
}
console.log(somarTudo(1, 2, 3, 4, 5))