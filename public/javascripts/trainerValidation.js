//----------------------------------------------------------------------------------//
//---- FORM VALIDATION ------------------------------------------------------------//
//--------------------------------------------------------------------------------//

//---- Form Validation for 'addTrainer.ejs' ------------------------------------//


function trainer_getInputValue(){



    let firstName = document.forms["trainer_form"]["trainer_firstname"].value;
    let lastName = document.forms["trainer_form"]["trainer_lastname"].value;
    let subject = document.forms["trainer_form"]["subject"].value;

    let hoursWeek = document.forms["trainer_form"]["hour_week"].value;
    let hourlyWage = document.forms["trainer_form"]["hourly_wages"].value;
    let contractLength = document.forms["trainer_form"]["contract_length"].value;

    let phone = document.forms["trainer_form"]["trainer_phone"].value;
    let email = document.forms["trainer_form"]["e_mail"].value;
    let address = document.forms["trainer_form"]["trainer_address"].value;
    

    let errorTrainerFirstName = errorTrainerLastName = errorTrainerSubject = 
        errorTrainerHourWeek = errorTrainerHourlyWages = errorTrainerContractLength = 
        errorTrainerPhone = errorTrainerEmail = errorTrainerAddress = true;

    // First Name Validation

    if (firstName == ""){
        document.getElementById('trainer_firstname_error').innerHTML = "* First name is required"
    }
    else{
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(firstName) === false){
            document.getElementById('trainer_firstname_error').innerHTML = "* Enter a valid first name" ;
        }
        else{
            document.getElementById('trainer_firstname_error').innerHTML = "" ;
            errorTrainerFirstName = false; }
    }

    // Last Name Validation

    if (lastName == ""){
        document.getElementById('trainer_lastname_error').innerHTML = "* Last name is required" ;
    }
    else{
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lastName) === false){
            document.getElementById('trainer_lastname_error').innerHTML = "* Enter a valid last name" ;
        }
        else{
            document.getElementById('trainer_lastname_error').innerHTML = "" ;
            errorTrainerLastName = false;
        }
    }

    // Subject Validation

    if(subject == ""){
        document.getElementById('subject_error').innerHTML = "* Subject is required";
    }
    else{
        errorTrainerSubject = false;
    }

    // Working Hours per Week Validation

    if(hoursWeek == ""){
        document.getElementById('hour_week_error').innerHTML = "* Weekly employment time is required";
    }
    else{
        let hoursWeek = parseInt(hoursWeek)
        if(hoursWeek < 10 || hoursWeek > 50){
            document.getElementById('hour_week_error').innerHTML = "* Enter a valid weekly employment time";
        }
        else{
            errorTrainerHourWeek = false;
        }
    }

    // Hourly Wages Validation

    if(hourlyWage == ""){
        document.getElementById('hourly_wages_error').innerHTML = "* Hourly wage is required";
    }
    else{
        let hourlyWage = parseInt(e)
        if(hourlyWage < 20 || hourlyWage > 50){
            document.getElementById('hourly_wages_error').innerHTML = "* Enter a valid hourly wage";
        }
        else{
            errorTrainerHourlyWages = false;
        }
    }

    // Contract length validation

    if(contractLength == ""){
        document.getElementById('contract_length_error').innerHTML = "* Contract length is required";
    }
    else{
            errorTrainerContractLength = false;
    }


    // Phone validation

    if(phone == ""){
        document.getElementById('trainer_phone_error').innerHTML = "* Phone number is required";
    }
    else{
        let phoneno = /^\d{10}$/;
        if(phoneno.test(phone) === false){
            document.getElementById('trainer_phone_error').innerHTML = "* Enter a valid phone number";
        }
        else{
            errorTrainerPhone = false;
        }
    }   

    // E-mail validation

    if(email == ""){
        document.getElementById('e_mail_error').innerHTML = "* E-mail is required";
    }
    else{
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(mailformat.test(email) === false){
            document.getElementById('e_mail_error').innerHTML = "* Enter a valid E-mail";
        }
        else{
            errorTrainerEmail = false;
        }
    }

    // Address validation

    if(address == ""){
        document.getElementById('trainer_address_error').innerHTML = "* Address is required";
    }
    else{
        errorTrainerAddress = false;
    }


    // -----------------------------------------//
    // Prevent Submit if there are any exterds

    if( (errorTrainerFirstName || errorTrainerLastName || errorTrainerSubject || 
        errorTrainerHourWeek || errorTrainerHourlyWages || errorTrainerContractLength || 
        errorTrainerPhone || errorTrainerEmail || errorTrainerAddress) == true){ 
        
  
        let clearError = document.getElementsByClassName('error_text');
        for(let i = 0; i<clearError.length; i++){
            setTimeout(function(){
            clearError[i].innerHTML = "";
            }, 5000);   
        }
        
        return false;   
        
    }
    else{
        
        firstName = document.forms["trainer_form"]["trainer_firstname"].value = "";
        lastName = document.forms["trainer_form"]["trainer_lastname"].value = "";
        subject = document.forms["trainer_form"]["subject"].value = "";

        hoursWeek = document.forms["trainer_form"]["hour_week"].value = "";
        hourlyWage = document.forms["trainer_form"]["hourly_wages"].value = "";
        contractLength = document.forms["trainer_form"]["contract_length"].value = "";
    
        phone = document.forms["trainer_form"]["trainer_phone"].value = "";
        email = document.forms["trainer_form"]["e_mail"].value = "";
        address = document.forms["trainer_form"]["trainer_address"].value = "";

    }

    event.preventDefault();
};


