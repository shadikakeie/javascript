function fixmenu() {
    var menuDiv = document.getElementById("menu");
    if (window.scrollY > 30) {
        menuDiv.classList.add("newMenu");
    }
    else {
        menuDiv.classList.remove("newMenu");
    }

};
var outDiv = document.getElementById("form1");
var openClose = document.getElementById("open-close");
var form2 = document.getElementById("form-register");
var submitBtn = document.getElementById("btn-submit");
var phoneN = document.getElementById("fnumber");
var firstN = document.getElementById("fname");
var lastN = document.getElementById("lname");
var span = document.getElementById("span-error");

// finding all labels in form
var labels = document.getElementsByTagName("label");

// adding eventlistener for the button to making form visible and invisile
openClose.addEventListener('click', function () {

    if (openClose.innerText == "+") {
        outDiv.style.visibility = "visible";
        openClose.innerText = "-";
    }
    else {
        openClose.innerText = "+"
        outDiv.style.visibility = "hidden";
        span.innerText = "";
        outDiv.style.height = '350px';
        form2.style.height = '300px';

    }
})

form2.addEventListener("submit", function (event) {
    event.preventDefault();
    span.innerHTML = "";
    outDiv.style.height = '350px';
    form2.style.height = '300px';

    // calling validate function for all inputs in form
    validate(firstN);
    validate(lastN);
    validate(phoneN);
    checkNumber(phoneN);

    if (span.innerHTML === "") {

        if (formValidate) {

            alert("اطلاعات شما با موفقیت ثبت شد");
            this.submit();
        }

    }
})

// define a variable for validation of form
let formValidate = true;

// let result = text.match(pattern);
function validate(input) {
    if (input.value.trim() === "") {
        // resizing dives for each error span
        outDiv.style.height = (outDiv.clientHeight + 20) + 'px';
        form2.style.height = (outDiv.clientHeight - 50) + 'px';
        showError(input, "نباید خالی باشد");
        formValidate = false;
    }
    else {
        if (span.innerHTML !== "") {
            formValidate = true;
        }

    }

}

// function for checking pattern for phone number
function checkNumber(input) {
    var text = input.value;

    // right pattern for phone number that starts with 09 and 1 or 2 or 3 comes after that then 8 number from 0 to 9
    let pattern = "^(09[1|2|3]([0-9]){8})$";
    let result = text.match(pattern);
    if (!result) {
        span.innerHTML += "* قالب موبایل نادرست است";
        formValidate = false;
    }
    else {

        formValidate = true;

    }

}

function showError(input, message) {

    // getting id of input
    var idInput = input.getAttribute('id');
    for (let j = 0; j < labels.length; j++) {

        // if id of input is equals innet text of label then get the inner text of label for adding into message error
        if (labels[j].htmlFor === idInput) {
            span.innerHTML += "* فیلد" + " " + labels[j].innerText + " " + message + "<br/>";
        }

    }


}
