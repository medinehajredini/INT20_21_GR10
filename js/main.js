$(document).ready(function () {
    // accordion
    $(".toggle").click(function (event) {
        let $this = $(this);
        accordionAnimate($this, event);
    });
});

function accordionAnimate($this, e) {
    e.preventDefault();

    if ($this.next().hasClass("show")) {
        $this.next().removeClass("show");
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find("li .inner").removeClass("show");
        $this.parent().parent().find("li .inner").slideUp(350);
        $this.next().toggleClass("show");
        $this.next().slideToggle(350);
    }
}

/*
* form validation
*/

var isEmailValid = false;
const email = document.getElementById("mail");

function checkFormValidity() {
    if (!isEmailValid) {
        checkEmailValidity(email);
    }
    return isEmailValid;
}

const form = document.getElementsByTagName("form")[0];
if (form) {
    const formToValidate = document.getElementsByClassName("form-validate")[0];

    if (formToValidate.classList.contains("form-validate")) {
        if (email) {
            email.addEventListener("input", function (event) {
                checkEmailValidity(email);
            });
        }
    }
}

function checkEmailValidity(email) {
    const emailError = document.querySelector("#mail + span.error");
    if (emailError) {
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const emailMinLength = 8;

        let message;
        if (!email.value.match(emailRegExp)) {
            message = `Entered value needs to be an e-mail address.`;
            showError(emailError, message);
            isEmailValid = false;
            return;
        } else if (email.value.length < emailMinLength) {
            message = `Email should be at least ${emailMinLength} characters; you entered ${email.value.length}.`;
            showError(emailError, message);
            isEmailValid = false;
            return;
        } else {
            showError(emailError);
            isEmailValid = true;
            return;
        }
    }
}

function showError(errorPlace, message) {
    if (message) {
        errorPlace.textContent = message;
    } else {
        errorPlace.textContent = ""; // Reset the content of the message
        errorPlace.className = "error"; // Reset the visual state of the message
    }
}
