submitBtn.onclick = function (event) {
    event.preventDefault();
    validateForm();
};

function validateForm() {
    const dob = document.getElementById('dob').value.trim();



    const address = document.getElementById('address').value.trim();
    const phno = document.getElementById('phno').value.trim();

    const dobError = document.getElementById('doberror');
    const addressError = document.getElementById('addresserror');
    const phoneError = document.getElementById('phoneerror');
    const emailError = document.getElementById('emailerror');

    dobError.textContent = dob === "" ? "Please enter DOB" : "";
    addressError.textContent = address === "" ? "Please enter address" : "";
    phoneError.textContent = phno === "" ? "Please enter phone" : "";
    emailError.textContent = email === "" ? "Please enter email" : "";
}
