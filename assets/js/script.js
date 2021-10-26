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
const submitButton = document.querySelector(".submit");
const form = document.querySelector("#form");

console.log(submitButton);

/* add eventlistener when submitting the form */

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isFormValid = isNameValid(firstNameField.value) &&
                        isNameValid(lastNameField.value) &&
                        isEmailValid(emailField.value) &&
                        isMobileNumberValid(mobileNumberField.value) &&
                        isPasswordValid(passwordField.value);

                        console.log(isFormValid)
    if(isFormValid){
        alert("Thank you! Your data is passed all test")
    }else{
        alert("Sorry!. Enter valid data.")
    }
});

/* functions for check input validity */

const isNameValid = (name) => {
    const nameRegEx = /^[A-Za-z .]{3,30}$/;
    const isValid = nameRegEx.test(name);

    return isValid;
};

const isEmailValid = (email) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegEx.test(email);

    return isValid;
};

const isMobileNumberValid = (mobileNumber) => {
    const mobileNumberRegEx = /(^(01))[3|5-9]{1}(\d){8}$/;
    const isValid = mobileNumberRegEx.test(mobileNumber);
    return isValid;
};

const isPasswordValid = (password) => {
    const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    const isValid = passwordRegEx.test(password)
    return isValid;
};

const isEmpty = (value) => {

    return value === "" ? true : false;
}

const isInRange = (length, max, min) => {

    return length < min || length > max ? true : false;
}

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

    if (isEmpty(name)) {
        handleError(inputField, "Name should not be empty");
    }
    else if (isInRange(name.length, 30, 3)) {
        handleError(inputField, "Name length should be between 3-30 characters ")
    }
    else if (isNameValid(name)) {
        handleSuccess(inputField);
    } else {
        handleError(inputField, "Name should not contain any special character or digit");
    }
};

const handleMobileNumber = (inputField) => {
    const mobileNumber = inputField.value;

    if (isEmpty(mobileNumber)) {
        handleError(inputField, "Mobile number should not be empty")
    } else if (isInRange(mobileNumber.length, 11, 11)) {
        handleError(mobileNumberField, "Mobile number should be 11 digits")

    } else if (isMobileNumberValid(mobileNumber)) {
        handleSuccess(mobileNumberField);
    } else {
        handleError(mobileNumberField, "Mobile number is not valid");
    }
};

const handleEmail = (inputField) => {
    const email = inputField.value;

    if (isEmpty(email)) {
        handleError(inputField, "Email should not be empty")
    }else if (isEmailValid(email)) {
        handleSuccess(inputField);
    } else {
        handleError(inputField, "Please enter a valid email address");
    }
 };

const handlePassword = (inputField) => {
    const password = inputField.value;

    if (isEmpty(password)) {
        handleError(inputField, "Password should not be empty")
    } else if (isInRange(password.length, 110, 6)) {
        handleError(passwordField, "Password should be at least 6 digits")

    } else if (isPasswordValid(password)) {
        handleSuccess(passwordField);
    } else {
        handleError(passwordField, "Password should contain at least one uppercase letter, one lowercase letter, one digit and one special character");
    }
};

const handleRetypedPassword = () => {
    const password = passwordField.value.trim();
    const retypedPassword = retypedPasswordField.value.trim();

    if (isEmpty(retypedPassword)) {
        handleError(retypedPasswordField, "Password should not be empty");
    } else if (isPasswordValid(retypedPassword)) {
        handleSuccess(retypedPasswordField);
    } else if (password !== retypedPassword) {
        handleError(retypedPasswordField, "Password doesn't match");
    }

}

const handleReset = () => {

    firstNameField.value = "";
    lastNameField.value = "";
    emailField.value = "";
    mobileNumberField.value = "";
    passwordField.value = "";
    retypedPasswordField.value = "";

    location.reload(); 
}
