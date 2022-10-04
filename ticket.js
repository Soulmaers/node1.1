const readline = require('readline');



let result = Math.floor(Math.random() * 100)
console.log(result)

function insertNumber(number) {
    if (number == result) {
        console.log(`Вы угадали число ${result}`)
        process.exit(0);
    }
    if (number < result) {
        console.log('Больше')
    }
    if (number > result) {
        console.log('Меньше')
    }

}
console.log('Отгадайте число от 0 до 100')

const input = readline.createInterface(process.stdin)
input.on('line', (number) => insertNumber(number));