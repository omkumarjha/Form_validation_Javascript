"use strict"

function showError(id,error){
    document.getElementById(id).getElementsByClassName("ferror")[0].innerHTML = error
}

function clearError(){
    let errors = document.getElementsByClassName("ferror")
    for(let item of errors){
        item.innerHTML = ""
    }
}
function validateForm(){
    let validateVar = true;
    clearError()

    let text = document.forms[0]["textName"].value
    if(text.length < 5){
        showError("input-name","* Name Must Be greater then 5 characters")
        validateVar = false;
    }
    if(isNumeric(text)){
        showError("input-name","* Name must contain only Alphabet letters")
        validateVar = false;
    }

    let email = document.forms[0]["emailName"].value
    if(email.endsWith("@gmail.com") == false){
        showError("input-email","* Provided Email is not correct")
        validateVar = false
    }
    
    let phone = document.forms[0]["phoneName"].value
    if(phone.length > 10 || phone.length < 10){
        showError("input-phone","* Number must contain only 10 digits")
        validateVar = false;
    }
    let pass = document.forms[0]["passName"].value
    let confirmPass = document.forms[0]["confirmPassName"].value

    if(pass != confirmPass){
        showError("input-pass","* Password must match with confirm password")
        validateVar = false;
    }
    
    return validateVar
}
function isNumeric(text){
    const hasNumber = /\d/;   
    return hasNumber.test(text)
}