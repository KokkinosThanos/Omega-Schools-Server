//---------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
//---- Form Validation for 'addStudent.ejs' ------------------------------------//


function student_getInputValue(){

    let SfirstName = document.forms["student_form"]["student_firstname"].value;
    let SlastName = document.forms["student_form"]["student_lastname"].value;
    let dateOfBirth = document.forms["student_form"]["student_dob"].value;
    
    let tuitionFees = document.forms["student_form"]["student_tutionFees"].value;
    let courseId = document.forms["student_form"]["student_course_title"].value;
 
    let assignmentId = document.forms["student_form"]["student_assignment_title"].value;

    let oralMark = document.forms["student_form"]["student_oral_mark"].value;
    let totalMark = document.forms["student_form"]["student_total_mark"].value;
    

    let errorStudentFirstName = errorStudentLastName = errorStudentDob = errorStudentTuitionFees = errorStudentCourseTitle =  errorStudentAssignmentTitle = errorStudentOralMark = errorStudentTotalMark = true;

    // First Name Validation

    if (SfirstName == ""){
        document.getElementById('student_firstname_error').innerHTML = "* First name is required"
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(SfirstName) === false){
            document.getElementById('student_firstname_error').innerHTML = "* Enter a valid first name" ;
        }
        else{
            document.getElementById('student_firstname_error').innerHTML = "" ;
            errorStudentFirstName = false; 
        }
    }

    // Last Name Validation

    if (SlastName == ""){
        document.getElementById('student_lastname_error').innerHTML = "* Last name is required" ;
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(SlastName) === false){
            document.getElementById('student_lastname_error').innerHTML = "* Enter a valid last name" ;
        }
        else{
            document.getElementById('student_lastname_error').innerHTML = "" ;
            errorStudentLastName = false;
        }
    }

    // Date of Birth Validation

    if(dateOfBirth == ""){
        document.getElementById('student_dob_error').innerHTML = "* Date of birth is required";
    }
    else{
        errorStudentDob = false;
    }

    // Tuition Fees Validation

    if(tuitionFees == ""){
        document.getElementById('student_tutionFees_error').innerHTML = "* Tuition fees are required";
    }
    else{
        errorStudentTuitionFees = false;
        }

    // Course Title Validation

    if(courseId == ""){
        document.getElementById('student_course_title_error').innerHTML = "* Course title is required";
    }
     else{
        errorStudentCourseTitle = false;
        }

    // Assignment title validation

    if(assignmentId == ""){
        document.getElementById('student_assignment_title_error').innerHTML = "* Assignment title is required";
    }
    else{
        errorStudentAssignmentTitle = false;
    }


    // Oral Mark validation

    if(oralMark == ""){
        document.getElementById('student_oral_mark_error').innerHTML = "* Oral mark is required";
    }
    else{
        errorStudentOralMark = false;
        } 

    // Total mark validation

    if(totalMark == ""){
        document.getElementById('student_total_mark_error').innerHTML = "* Total mark is required";
    }
    else{
        errorStudentTotalMark = false;
    }

    
    // -----------------------------------------//
    // Prevent Submit if there are any exterds

    if( (errorStudentFirstName || errorStudentLastName || errorStudentDob || errorStudentTuitionFees || errorStudentCourseTitle || errorStudentAssignmentTitle || errorStudentOralMark || errorStudentTotalMark) == true){ 
            
        let clearError = document.getElementsByClassName('error_text');
        for(let i = 0; i<clearError.length; i++){
            setTimeout(function(){
            clearError[i].innerHTML = "";
            }, 5000);   
        }
        
        return false
    }

    else{
        
        SfirstName = document.forms["student_form"]["student_firstname"].value = "";
        SlastName = document.forms["student_form"]["student_lastname"].value = "";
        dateOfBirth = document.forms["student_form"]["student_dob"].value = "";
        tuitionFees = document.forms["student_form"]["student_tutionFees"].value = "";
        courseId = document.forms["student_form"]["student_course_title"].value = "";
        assignmentId = document.forms["student_form"]["student_assignment_title"].value = "";
    
        oralMark = document.forms["student_form"]["student_oral_mark"].value = "";
        totalMark = document.forms["student_form"]["student_total_mark"].value = "";

    }

    event.preventDefault();
};
