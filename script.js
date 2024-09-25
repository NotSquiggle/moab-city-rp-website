document.addEventListener("DOMContentLoaded", function() {
    const statusDiv = document.getElementById('ssu-status');
    const startSSUButton = document.getElementById('start-ssu');
    const endSSUButton = document.getElementById('end-ssu');
    const passwordSubmitButton = document.getElementById('password-submit');
    const passwordInput = document.getElementById('admin-password');
    const ssuControlsDiv = document.getElementById('ssu-controls');
    
    // Replace this with the actual password you want to use
    const adminPassword = "MCRP2024!"; 

    // Supabase Initialization
    const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
    const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase key
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    // Function to fetch SSU status from Supabase
    async function fetchSSUStatus() {
        const { data, error } = await supabase
            .from('server_status')  // Replace with your table name
            .select('status')
            .eq('id', 1);  // Assuming the status is stored in a row with id 1

        if (error) {
            console.error('Error fetching SSU status:', error.message);
            return;
        }

        const status = data[0]?.status || 'No SSU currently';
        if (status === 'active') {
            statusDiv.textContent = "SSU is active!";
            statusDiv.style.color = "green";
        } else {
            statusDiv.textContent = "No SSU currently.";
            statusDiv.style.color = "red";
        }
    }

    // Call the function to fetch the current SSU status
    fetchSSUStatus();

    // Function to update SSU status in Supabase
    async function updateSSUStatus(status) {
        const { error } = await supabase
            .from('server_status')  // Replace with your table name
            .update({ status: status })
            .eq('id', 1);  // Assuming the status is stored in a row with id 1

        if (error) {
            console.error('Error updating SSU status:', error.message);
        } else {
            // Fetch the updated status after the change
            fetchSSUStatus();
        }
    }

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
