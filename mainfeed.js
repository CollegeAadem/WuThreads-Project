document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-header">
                <span class="username">${post.username}</span>
                <span class="timestamp">${post.timestamp}</span>
            </div>
            <p><strong>Date:</strong> ${post.date}</p>
            <p><strong>Description:</strong> ${post.description}</p>
            <p><strong>Points:</strong> ${post.points}</p>
            <p><strong>Feeds:</strong> ${post.feeds.join(', ')}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});