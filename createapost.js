document.getElementById('create-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const eventDate = document.getElementById('event-date').value;
    const eventDescription = document.getElementById('event-description').value;
    const eventPoints = document.getElementById('event-points').value;
    const feedSelection = Array.from(document.getElementById('feed-selection').selectedOptions).map(option => option.value);
    const timestamp = new Date().toLocaleString();

    const post = {
        username: username,
        date: eventDate,
        description: eventDescription,
        points: eventPoints,
        feeds: feedSelection,
        timestamp: timestamp
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'mainfeed.html';
});

function generatePoints() {
    const points = Math.floor(Math.random() * 100) + 1;
    document.getElementById('event-points').value = points;
}