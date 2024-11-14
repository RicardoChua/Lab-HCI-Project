function val() {

    console.log("Validation function triggered");
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let checkbox = document.getElementById("agree-term");

    if (name.value.trim().length <= 4) {
        alert("Name must be more than 4 characters.");
        name.focus();
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email.value)) {
        alert("Please use a valid Gmail address.");
        email.focus();
        return false;
    }

    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phone.value)) {
        alert("Phone number must be numeric and at least 10 digits.");
        phone.focus();
        return false;
    }

    if (!checkbox.checked) {
        alert("You must agree to receive the newsletter.");
        checkbox.focus();
        return false;
    }

    alert("Success! Thank you for contacting us. We will get back to you within a day.");
    
    return false;
}