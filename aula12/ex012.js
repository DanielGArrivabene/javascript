var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log('Agora são exatamente ' + hora + ':' + min + ' horas')

if (hora <= 12 ) {
    console.log('BOM DIA')
} else if (hora > 12 && hora < 18) {
    console.log('BOA TARDE')
} else {
    console.log('BOA NOITE')
}