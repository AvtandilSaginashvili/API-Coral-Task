function enter() {
 var emailInput = document.getElementById("email").value;
 var passwordInput = document.getElementById("password").value;
 
 var dangerAlert = document.getElementById("danger");
 var successAlert = document.getElementById("success");
 var passwordDanger = document.getElementById("danger2");
 var passwordSuccess = document.getElementById("success2");

 var regex = new RegExp("^[a-zA-Z]\.[a-zA-Z]+@[a-z]{2,5}\.[a-z]{2,3}$", "gim");
 

    if(!regex.test(emailInput)) {
        dangerAlert.classList.remove("d-none");
        return false;
    }else if(passwordInput.length == 0) {
        dangerAlert.classList.add("d-none");
        successAlert.classList.remove("d-none");
        
        passwordDanger.classList.remove("d-none");
        return false;
    }else {
        passwordDanger.classList.add("d-none");
        passwordSuccess.classList.remove("d-none");
        window.location.href = "https://api-coral-task.vercel.app/";
        return false;
    }

}
