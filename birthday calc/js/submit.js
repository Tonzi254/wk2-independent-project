const selectionVerifier=(dob, gender) => {
    if (dob!='' && password !=''){
        alert('Application proceeding to the next step');
    } else {
        alert ('Please provide your Date of Birth and/or Gender');
    }

}
const maleAkan = {
    'Sunday': 'Kwasi','Monday':'Kwadwo', 'Tuesday':'Kwabena','Wednesday':'Kwaku','Thursday':'Yaw','Friday':'Kofi','Saturday':'Kwame'
}

const femaleAkan = {
    'Sunday': 'Akosua','Monday':'Adwoa', 'Tuesday':'Abenaa','Wednesday':'Akua','Thursday':'Yaa','Friday':'Afua','Saturday':'Ama'
}

const dayFunction = ( ( (year/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;

const loginHandler=() =>