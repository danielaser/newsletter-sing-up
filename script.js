function validateEmail(element) {

    let text = document.getElementById(element.id).value;
    let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(text)) {
        document.getElementById("result").innerHTML = "Valid email required";
        document.getElementById("email").className = "invalid-box";
    } else {
        document.getElementById("result").innerHTML = "";
        document.getElementById("email").className = "card-inputBox";
    }

};

function submitButton() {
    if (document.getElementById("email").value !== '') {
        location.replace("success.html");
    }

};

function redirectPrincipalPage() {
    location.replace("index.html");
};