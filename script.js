document.addEventListener("DOMContentLoaded", function() {
    // Simulate checking server status (replace this with actual API calls)
    const statusDiv = document.getElementById('ssu-status');
    
    // Placeholder logic, change this to actually fetch status from Discord API or webhook
    const isSSUActive = false;  // Example status
    
    if (isSSUActive) {
        statusDiv.textContent = "SSU is active!";
        statusDiv.style.color = "green";
    } else {
        statusDiv.textContent = "No SSU currently.";
        statusDiv.style.color = "red";
    }
});
