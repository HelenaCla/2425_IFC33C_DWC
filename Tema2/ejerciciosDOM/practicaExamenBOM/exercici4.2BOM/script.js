// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the clock
const clockInterval = setInterval(updateClock, 1000);

// Function to stop the clock
function stopClock() {
    clearInterval(clockInterval);
}


// Initial call to display the clock immediately
updateClock();