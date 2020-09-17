function validation(){

var name = document.myform.name.value;

var email = document.myform.email.value;

var address = document.myform.address.value;

var phoneno = document.myform.phoneno.value;

  if(name=="" && email=="" && address ==""){

      document.getElementById("errormsg").innerHTML="Please input in all the fields";

      document.myform.focus();

      return false;

  }

  else if(name=="" ){

    document.getElementById("errormsg").innerHTML="Name is Required";

    document.myform.name.focus();

    return false;

  }

  else if(email==""){

    document.getElementById("errormsg").innerHTML="Email is Required";

    document.myform.email.focus();

    return false;

  }

  else if(address==""){

      document.getElementById("errormsg").innerHTML="Address is Required";

      document.myform.address.focus();

      return false;

    }

  else if(address==""){

      document.getElementById("errormsg").innerHTML="Phoneno is Required";

      document.myform.phoneno.focus();

      return false;

    }

    alert('WELCOME TO GAMING WORLD.')

return true;
}