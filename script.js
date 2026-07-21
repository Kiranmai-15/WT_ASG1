// Get the registration form
const form = document.getElementById("registrationForm");


// Add submit event to the form
form.addEventListener("submit", function(event) {

    // Prevent form from refreshing the page
    event.preventDefault();


    // Clear all previous error messages
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });


    // Hide success message
    document.getElementById("successMessage").style.display = "none";


    // Get values from input fields
    const fullName =
        document.getElementById("fullName").value.trim();

    const rollNumber =
        document.getElementById("rollNumber").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const department =
        document.getElementById("department").value;

    const dob =
        document.getElementById("dob").value;


    // Get selected gender
    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    // Assume form is valid
    let isValid = true;


    // --------------------------------
    // 1. Full Name Validation
    // --------------------------------

    if (fullName === "") {

        document.getElementById("nameError").textContent =
            "Full Name is required.";

        isValid = false;
    }


    // --------------------------------
    // 2. Roll Number Validation
    // --------------------------------

    const rollNumberPattern =
        /^[A-Za-z0-9]+$/;


    if (rollNumber === "") {

        document.getElementById("rollError").textContent =
            "Roll Number is required.";

        isValid = false;

    } else if (!rollNumberPattern.test(rollNumber)) {

        document.getElementById("rollError").textContent =
            "Roll Number must contain only letters and numbers.";

        isValid = false;
    }


    // --------------------------------
    // 3. Email Validation
    // --------------------------------

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("emailError").textContent =
            "Email ID is required.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // --------------------------------
    // 4. Mobile Number Validation
    // --------------------------------

    const mobilePattern =
        /^\d{10}$/;


    if (mobile === "") {

        document.getElementById("mobileError").textContent =
            "Mobile Number is required.";

        isValid = false;

    } else if (!mobilePattern.test(mobile)) {

        document.getElementById("mobileError").textContent =
            "Mobile Number must contain exactly 10 digits.";

        isValid = false;
    }


    // --------------------------------
    // 5. Password Validation
    // --------------------------------

    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Password is required.";

        isValid = false;

    } else if (password.length < 8) {

        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters long.";

        isValid = false;
    }


    // --------------------------------
    // 6. Confirm Password Validation
    // --------------------------------

    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        isValid = false;

    } else if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        isValid = false;
    }


    // --------------------------------
    // 7. Gender Validation
    // --------------------------------

    if (!gender) {

        document.getElementById("genderError").textContent =
            "Please select your gender.";

        isValid = false;
    }


    // --------------------------------
    // 8. Department Validation
    // --------------------------------

    if (department === "") {

        document.getElementById("departmentError").textContent =
            "Please select a department.";

        isValid = false;
    }


    // --------------------------------
    // 9. Date of Birth Validation
    // --------------------------------

    if (dob === "") {

        document.getElementById("dobError").textContent =
            "Date of Birth is required.";

        isValid = false;
    }


    // --------------------------------
    // Successful Validation
    // --------------------------------

    if (isValid) {

        // Show success message
        document.getElementById("successMessage").style.display =
            "block";

        // Clear the form
        form.reset();
    }

});