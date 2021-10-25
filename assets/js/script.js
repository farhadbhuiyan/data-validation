/* function for toggle password visibility */

const togglePasswordVisibility = (id) => {
    const inputField = document.getElementById(id);

    const value = inputField.value;

    if (value !== "") {
        const type =
            inputField.getAttribute("type") === "password" ? "text" : "password";
        inputField.setAttribute("type", type);

        const icon = inputField.nextElementSibling;

        const iconClassName = icon.getAttribute("class");

        if (iconClassName === "fas fa-eye-slash icon") {
            icon.setAttribute("class", "fas fa-eye icon");
        } else {
            icon.setAttribute("class", "fas fa-eye-slash icon");
        }
    }
};

/* Accessing input fields */

const firstNameField = document.querySelector("#firstName");
const lastNameField = document.querySelector("#lastName");
const emailField = document.querySelector("#email");
const mobileNumberField = document.querySelector("#mobileNumber");
const passwordField = document.querySelector("#password");
const retypedPasswordField = document.querySelector("#retypedPassword");
const form = document.querySelector("#form");

const formGroup = mobileNumberField.parentElement;

console.log(formGroup);

/* add eventlistener when submitting the form */

form.addEventListener("submit", function (e) {
    e.preventDefault();

    handleName(firstNameField);
    handleName(lastNameField);
    // handleMobileNumber("mobileNumberField");
});

/* functions for check input validity */

const isNameValid = (name) => {
    const nameRegEx = /^[A-Za-z .]{3,30}$/;
    const isValid = nameRegEx.test(name);

    return isValid;
};

const isEmailValid = () => {
    //let emailRegEx = ;

    return;
};

const isMobileNumberValid = (mobileNumber) => {
    const mobileNumberRegEx = /^[(01)^124[0-9]{11}$/;
    const isValid = mobileNumberRegEx.test(mobileNumber);

    return isValid;
};

console.log(isMobileNumberValid("01565432567"));

const isPasswordValid = () => {
    //let nameRegEx = ;

    return;
};

/* function for handle error and success case */

const handleError = (inputField, message) => {
    const formGroup = inputField.parentElement;
    const successIcon = inputField.nextElementSibling;

    formGroup.classList.add("error");
    formGroup.classList.remove("success");

    successIcon.classList.remove("fa-check-circle", "success-icon");
    successIcon.classList.add("fa-times-circle", "error-icon");

    const errorMessage = formGroup.lastElementChild;
    errorMessage.innerText = message;
};

const handleSuccess = (inputField) => {
    const formGroup = inputField.parentElement;
    const successIcon = inputField.nextElementSibling;

    formGroup.classList.add("success");
    formGroup.classList.remove("error");

    successIcon.classList.add("fa-check-circle", "success-icon");
    successIcon.classList.remove("fa-times-circle", "error-icon");

    const errorMessage = formGroup.lastElementChild;
    errorMessage.innerText = "";
};

/* function for handle input data */

const handleName = (inputField) => {
    const name = inputField.value;
    if (isNameValid(name)) {
        handleSuccess(inputField);
    }else{
        handleError(inputField, "Enter a valiad name");
    }
};

const handleEmail = () => { };

// const handleMobileNumber = () => {
//     const mobileNumber = mobileNumberField.value;

//     console.log(mobileNumber);

//     if (isMobileNumberValid(mobileNumber)) {
//         handleSuccess(mobileNumberField);
//     } else {
//         handleError(mobileNumberField, "Mobile number is not valid");
//     }
// };

const handlePassword = () => {
    //const
};
