const selectionVerifier = (dob_choose, gender_choose) => {
    if (dob_choose != '' && gender_choose != '') {
        alert('Application proceeding to the next step');
    } else {
        alert('Please provide your Date of Birth and/or Gender');
    }

}

const maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

const femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

const day = {
    'Monday': '1', 'Tuesday': '2', 'Wednesday': '3', 'Thursday': '4', 'Friday': '5', 'Saturday': '6', 'Sunday': '7'
}


const getAkanName = (dt, gender) => {

    if (dt == day.Monday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[1]);
    } else if (dt == day.Tuesday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[2]);
    }
    else if (dt == day.Wednesday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[3]);
    }
    else if (dt == day.Thursday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[4]);
    }
    else if (dt == day.Friday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[5]);
    }
    else if (dt == day.Saturday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[6]);
    }
    else if (dt == day.Sunday && gender == 'Male') {
        alert('Your Akan Name is: ' + maleAkan[0]);
    }
    else if (dt == day.Monday && gender == 'Female') {
        alert('Your Akan Name is: ' + femaleAkan[1]);
    }
    else if (dt == day.Tuesday && gender == 'Male') {
        alert('Your Akan Name is: ' + femaleAkan[2]);
    }
    else if (dt == day.Wednesday && gender == 'Male') {
        alert('Your Akan Name is: ' + femaleAkan[3]);
    }
    else if (dt == day.Thursday && gender == 'Male') {
        alert('Your Akan Name is: ' + femaleAkan[4]);
    }
    else if (dt == day.Friday && gender == 'Male') {
        alert('Your Akan Name is: ' + femaleAkan[5]);
    }
    else if (dt == day.Saturday && gender == 'Male') {
        alert('Your Akan Name is: ' + femaleAkan[6]);
    }
    else if (dt == day.Saturday && gender == 'Male') {
        alert('Your Akan Name is: ' + femaleAkan[0]);
    }
    else {
        alert('Invalid Input Has Been Detected' + dt + ' ' + gender)
    }
}

const submitFunction = (dob, gender) => {
    alert('Your Date of Birth is: ' + dob);
    alert('Your Gender is: ' + gender);
}

const loginHandler = () => {
    const dobInput = document.getElementById('dob_choose');
    const genderInput = document.getElementsByName('gender_choose')[0];


    const dob = dobInput.value;
    const gender = genderInput.value;
    var dateInput = new Date(dob);
    var dt = dateInput.getDay()

    selectionVerifier(dob, gender);
    submitFunction(dob, gender);
    getAkanName(dt, gender);

}