console.log("Hello World!");

const passwordField = document.getElementById("passwordField");
const retypePasswordField = document.getElementById("retypePasswordField");

const togglePasswordVisibility = () => {
    const passwordType = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", passwordType);

    const retypePasswordType = retypePasswordField.getAttribute("type") === "password" ? "text" : "password";
    retypePasswordField.setAttribute("type", retypePasswordType);

    console.log("I am clicked")
};
