const dataAniver = new Date("April 02, 2007");
const dataHoje = new Date();

const diff = dataHoje - dataAniver; // diferença das duas datas

// converter para dias
const diaDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(diaDiff);

// ----------------------------

const data1 = new Date("September 10, 2026")
const data2 = new Date("September 15, 2026")

const diff2 = data2 - data1

const horasDiff2 = diff2 / (1000 * 60 * 60)

console.log(horasDiff2)

// ----------------------------

const data3 = new Date()

const segundo = data3.getSeconds()
const minuto = data3.getMinutes()
const hora = data3.getHours()

const dia = data3.getDate()
const mes = data3.getMonth() + 1
const ano = data3.getFullYear()

console.log(`${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`)