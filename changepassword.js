document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageDiv = document.getElementById('message');
    
    // Assuming the user's password is stored in localStorage
    const storedPassword = localStorage.getItem('password');
    
    if (oldPassword !== storedPassword) {
        messageDiv.textContent = 'Old password is incorrect.';
        messageDiv.style.color = 'red';
        return;
    }
    
    if (newPassword !== confirmPassword) {
        messageDiv.textContent = 'New passwords do not match.';
        messageDiv.style.color = 'red';
        return;
    }
    
    // Update the password in localStorage
    localStorage.setItem('password', newPassword);
    messageDiv.textContent = 'Password changed successfully.';
    messageDiv.style.color = 'green';
});