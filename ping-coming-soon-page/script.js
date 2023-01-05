var femail = document.getElementById("email")
var validation = document.querySelector("#validation")
var result = /\S+@\S+\.\S+/


function validateEmail(email) {
   return result.test(email);
}

function submit() {
    var email = femail.value
    validateEmail(email)
    if (result.test(email) == true) {
        validation.innerHTML = "Subscribed successfully"
        validation.style.color = 'green'
        femail.style.borderColor = 'green'        
    } else {
        validation.innerHTML = "Please provide a valid e-mail adress"
        validation.style.color = 'red'
        femail.style.borderColor = 'red'
    }
    femail.focus()
    femail.value = ''
}
      
  /*console.log(validateEmail('texto@texto.com')); // true
  console.log(validateEmail('texto@texto')); // false
  console.log(validateEmail('texto.com')); // false
  console.log(validateEmail('texto')); // false*/
  //submit()