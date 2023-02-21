let cardName = document.querySelector('#name')
let cardNumber = document.querySelector('#cardNumber')
let expMonth = document.querySelector('#expMonth')
let expYear = document.querySelector('#expYear')
let cvc = document.querySelector('#cvc')
let form = document.querySelector('.form')
let completeState = document.querySelector('.completeState')

let cardNameError = document.querySelector('.cardNameError')
let cardNumberError = document.querySelector('.cardNumberError')
let cardDataError = document.querySelector('.cardDataError')

function resetForm() {
    cardNameError.innerHTML = ''
    cardNumberError.innerHTML = ''
    cardDataError.innerHTML = ''
    cardName.style.borderColor = 'hsl(270, 3%, 87%)'
    cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
    expMonth.style.borderColor = 'hsl(270, 3%, 87%)'
    expYear.style.borderColor = 'hsl(270, 3%, 87%)'
    cvc.style.borderColor = 'hsl(270, 3%, 87%)'
}

function sendForm() {
    form.style.display = 'none'
    completeState.style.display = 'block'
}

function validateForm() {
    resetForm()
    if (!isNaN(cardName.value)) {
        cardNameError.innerHTML = "Only letters, can't be blank"
        cardName.style.borderColor = 'red'
        cardName.focus()
        cardName.value = ''
    } else if (isNaN(cardNumber.value)) {
        cardNumberError.innerHTML = 'Wrong format, numbers only'
        cardNumber.style.borderColor = 'red'
        cardNumber.focus()
        cardNumber.value = ''
    } else if (cardNumber.value == '') {
        cardNumberError.innerHTML = "Can't be blank"
        cardNumber.style.borderColor = 'red'
        cardNumber.focus()
    } else if (isNaN(expMonth.value)) {
        cardDataError.innerHTML = 'Wrong format, numbers only'
        expMonth.style.borderColor = 'red'
        expMonth.focus()
        expMonth.value =''
    } else if (expMonth.value == '') {
        cardDataError.innerHTML = "Can't be blank"
        expMonth.style.borderColor = 'red'
        expMonth.focus()
    } else if (isNaN(expYear.value)) {
        cardDataError.innerHTML = 'Wrong format, numbers only'
        expYear.style.borderColor = 'red'
        expYear.focus()
        expYear.value = ''
    } else if (expYear.value == '') {
        cardDataError.innerHTML = "Can't be blank"
        expYear.style.borderColor = 'red'
        expYear.focus()
    } else if (isNaN(cvc.value)) {
        cardDataError.innerHTML = 'Wrong format, numbers only'
        cvc.style.borderColor = 'red'
        cvc.focus()
        cvc.value = ''
    } else if (cvc.value == '') {
        cardDataError.innerHTML = "Can't be blank"
        cvc.style.borderColor = 'red'
        cvc.focus()
    } else {
        sendForm()
    }
}