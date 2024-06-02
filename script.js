let nameError = document.getElementById("nameError");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let msgError = document.getElementById("msgError");
let submitError = document.getElementById("submitError");



function validateName(){
    let name = document.getElementById('contactName').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle "></i>';
    return true
}


function validatePhone(){
    let phone = document.getElementById('contactPhone').value;
    
    if(phone.length == 0){
        phoneError.innerHTML = "Phone No is required"
        return false
    }
    if(phone.length != 10){
        phoneError.innerHTML = "Phone No. should be 10 digits";
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits allowed.";
        return false
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true
}

function validateEmail() {
    let email = document.getElementById('contactEmail').value;
    let emailError = document.getElementById('emailError');

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('contactmessage').value;
    let msgError = document.getElementById('msgError')
    let required = 30;
    
    let leftCharacter = required - message.length;
    
    if(leftCharacter > 0){
        msgError.innerHTML = leftCharacter + ' More characters required'
        return false
    }
    msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateForm(){
    if(!validateName() || validatePhone() || validateEmail() || validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the above error to submit.'
        setTimeout(function(){submitError.style.display = 'none';}, 5000)
        return false;
    }
}












