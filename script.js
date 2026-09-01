const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const message = document.getElementById("message");

const togglePassword =
    document.getElementById("togglePassword");

const demoLogin =
    document.getElementById("demoLogin");

const forgotPassword =
    document.getElementById("forgotPassword");


/* =========================
   PASSWORD VISIBILITY
   ========================= */

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";
    }

});


/* =========================
   LOGIN
   ========================= */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    message.className = "message";
    message.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    let valid = true;


    /* Email validation */

    if (email === "") {

        emailError.textContent =
            "Email address is required.";

        valid = false;

    } else if (!email.includes("@")) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    /* Password validation */

    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        valid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        valid = false;
    }


    if (!valid) {
        return;
    }


    /* Simulated login */

    const buttonText =
        document.getElementById("buttonText");

    buttonText.textContent = "Signing in...";


    setTimeout(function () {

        buttonText.textContent = "Sign In";

        message.className =
            "message success";

        message.textContent =
            "Login successful! Welcome to the organization portal.";

    }, 1000);

});


/* =========================
   DEMO LOGIN
   ========================= */

demoLogin.addEventListener("click", function () {

    emailInput.value =
        "employee@organization.com";

    passwordInput.value =
        "employee123";

    message.className =
        "message success";

    message.textContent =
        "Demo credentials loaded. Click Sign In.";

});


/* =========================
   FORGOT PASSWORD
   ========================= */

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    message.className =
        "message success";

    message.textContent =
        "Password reset instructions would be sent to your registered email.";

});