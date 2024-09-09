document.addEventListener("DOMContentLoaded", function() {
    const statusDiv = document.getElementById('ssu-status');
    const startSSUButton = document.getElementById('start-ssu');
    const endSSUButton = document.getElementById('end-ssu');
    const passwordSubmitButton = document.getElementById('password-submit');
    const passwordInput = document.getElementById('admin-password');
    const ssuControlsDiv = document.getElementById('ssu-controls');
    
    // Replace this with the actual password you want to use
    const adminPassword = "MCRP2024!"; 

    // Firebase initialization (assuming Firebase config is already added in index.html)
    const database = firebase.database();

    // Function to update SSU status in Firebase
    function updateSSUStatus(status) {
        database.ref('ssuStatus').set(status);
    }

    // Handle real-time SSU status updates from Firebase
    database.ref('ssuStatus').on('value', (snapshot) => {
        const status = snapshot.val();
        if (status === 'active') {
            statusDiv.textContent = "SSU is active!";
            statusDiv.style.color = "green";
        } else {
            statusDiv.textContent = "No SSU currently.";
            statusDiv.style.color = "red";
        }
    });

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
        updateSSUStatus('active');
    });

    // Function to end SSU
    endSSUButton.addEventListener('click', () => {
        updateSSUStatus('inactive');
    });
});

// Carousel functionality
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-images img');
    let currentImageIndex = 0;

    // Show the first image by default
    images[currentImageIndex].classList.add('active');

    // Next image functionality
    document.getElementById('next').addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    });

    // Previous image functionality
    document.getElementById('prev').addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    });
});
