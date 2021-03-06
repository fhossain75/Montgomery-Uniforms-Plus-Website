  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIc6DFZTXUOnbDVETfUlrPlvQEIXVL_lc",
    authDomain: "newsletter-sign-up-efab7.firebaseapp.com",
    databaseURL: "https://newsletter-sign-up-efab7.firebaseio.com",
    projectId: "newsletter-sign-up-efab7",
    storageBucket: "newsletter-sign-up-efab7.appspot.com",
    messagingSenderId: "31718343840"
  };
  firebase.initializeApp(config);

//  Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form sumbit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Sumbit Form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var telephone = getInputVal('telephone');
    var facebook = getInputVal('facebook');

    // Save message    
    saveMessages(name,email,telephone,facebook);
    // Show alert1
    document.querySelector('.alert1').style.display = 'block';

    // Hide alert1 after 4.5 seconds
    setTimeout(function(){
        document.querySelector('.alert1').style.display = 'none';

    },4500);

    // Clear form
    document.getElementById('contactForm').reset();

}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessages(name,email,telephone,facebook){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        telephone:telephone,
        facebook:facebook,
    });
}
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);