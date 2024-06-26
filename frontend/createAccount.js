document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        console.log("Form submission event fired");
        event.preventDefault();
        
        // Get the form values
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const username = document.getElementById("username").value;

        // Validate the email format
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Validate the form data
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Create an object to store the user data
        const userData = {
            fullname: fullname,
            email: email,
            password: password,
            username: username
        };

        // Output the user data to the console
        console.log("User Data:", userData);


        // Reset the form after submission
        signupForm.reset();
    });
});

// Function to validate email format
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}



function submitForm() {
    // Get form data
    var formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value
    };

    // Send form data to backend server
    $.ajax({
        type: 'POST',
        url: '/saveData', // Replace with your backend endpoint
        data: formData,
        success: function(response) {
            alert('Account created successfully!');
        },
        error: function(xhr, status, error) {
            console.error('Error creating account:', error);
            alert('Error creating account. Please try again later.');
        }
    });
}

