empty = document.querySelector(".empty");
invalid = document.querySelector(".invalid");
error= document.querySelector(".error");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate() {
    if( document.myForm.email.value == ""){
       error.style.display = "block";
       empty.style.display = "block";
       invalid.style.display = "none";
       return false;
    }else if(!(document.myForm.email.value.match(mailformat))){
       empty.style.display = "none";
       error.style.display = "block";
       invalid.style.display = "block";
       return false;
    }else
        invalid.style.display = "none";
        empty.style.display = "none";
        error.style.display = "none";
        alert("email is valid");
        return( true );
}