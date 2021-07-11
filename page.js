var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#myScrollBike'
})


function feedbackForm() {

    var fname = document.getElementById('name').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;

    if (fname == null || fname == '') {
        document.getElementById('errorbox').innerHTML = 'Enter the Full Name';
        return false;
    }

    if (phonenumber == null || phonenumber == '') {
        document.getElementById('errorbox').innerHTML = 'Enter the Phone Number';
        return false;
    }

    if (email == null || email == '') {
        document.getElementById('errorbox').innerHTML = 'Enter the Email';
        return false;
    }

    if (feedback == null || feedback == '') {
        document.getElementById('errorbox').innerHTML = 'Enter the Feedback';
        return false;
    }

    if (fname != '' && phonenumber != '' && email != '' && feedback != '') {

        alert('Submited Successfully')
    }

}