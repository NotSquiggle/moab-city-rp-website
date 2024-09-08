document.addEventListener("DOMContentLoaded", function() {
    const statusDiv = document.getElementById('ssu-status');
    const startSSUButton = document.getElementById('start-ssu');
    const endSSUButton = document.getElementById('end-ssu');
    const passwordSubmitButton = document.getElementById('password-submit');
    const passwordInput = document.getElementById('admin-password');
    const ssuControlsDiv = document.getElementById('ssu-controls');
    
    // Replace this with the actual password you want to use
    const adminPassword = "MoabAdmin1:D"; 

    // Handle password submission
    passwordSubmitButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === adminPassword) {
            // Hide the password prompt and show the SSU control buttons
            document.getElementById('password-prompt').style.display = 'none';
            ssuControlsDiv.style.display = 'block';
        } else {
            alert('Incorrect password!');
        }
    });

    // Function to start SSU
    startSSUButton.addEventListener('click', () => {
        statusDiv.textContent = "SSU is active!";
        statusDiv.style.color = "green";
    });

    // Function to end SSU
    endSSUButton.addEventListener('click', () => {
        statusDiv.textContent = "No SSU currently.";
        statusDiv.style.color = "red";
    });
});
