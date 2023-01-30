function validate(){
    let fname = document.forms.registerform.firstname.value;
    let adress = document.forms.registerform.address.value;
    let lname = document.forms.registerform.lastname.value;
    if(fname==""||lname==""){
        alert("Name must be fully filled!")
        return false;
    }
    if(adress==""){
        alert("Address must be filled!")
        return false;
    }

    
}