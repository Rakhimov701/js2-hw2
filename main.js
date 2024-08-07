var tm = +prompt('Введите время в цифрах')

if (tm <= 6) {
    alert(tm + ' часа ночи')
}else if (tm >= 7 && tm <= 10) {
    alert(tm + ' часов утра')
}else if (tm >= 11 && tm <= 17) {
    alert(tm + ' часа дня')
}else if (tm >= 18 && tm <= 23) {
    alert(tm + ' часов вечера')
}else {
    alert('Что-то пошло не так')
}