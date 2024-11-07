function generatePoints() {
    const points = Math.floor(Math.random() * 100) + 1;
    document.getElementById('event-points').value = points;
}

document.getElementById('create-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventDate = document.getElementById('event-date').value;
    const eventDescription = document.getElementById('event-description').value;
    const eventPoints = document.getElementById('event-points').value;
    const selectedFeeds = Array.from(document.getElementById('feed-selection').selectedOptions).map(option => option.value);
    
    const post = {
        date: eventDate,
        description: eventDescription,
        points: eventPoints,
        feeds: selectedFeeds
    };
    
    // Save the post to localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    // Redirect to the main feed page
    window.location.href = 'mainfeed.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <p><strong>Date:</strong> ${post.date}</p>
            <p><strong>Description:</strong> ${post.description}</p>
            <p><strong>Points:</strong> ${post.points}</p>
            <p><strong>Feeds:</strong> ${post.feeds.join(', ')}</p>
        `;
        
        wrapper.appendChild(postElement);
    });
});