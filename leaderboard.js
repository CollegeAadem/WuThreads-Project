document.addEventListener('DOMContentLoaded', () => {
    const leaderboard = [
        { name: 'Alice', points: 1500 },
        { name: 'Bob', points: 1400 },
        { name: 'Charlie', points: 1300 }
    ];

    function updateLeaderboard() {
        // Sort the leaderboard by points in descending order
        leaderboard.sort((a, b) => b.points - a.points);

        // Get the table body element
        const tbody = document.querySelector('#leaderboard tbody');
        tbody.innerHTML = '';

        // Populate the table with sorted leaderboard data
        leaderboard.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.points}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Initial update
    updateLeaderboard();

    // Example of updating points and refreshing the leaderboard
    setTimeout(() => {
        leaderboard[1].points = 1600; // Update Bob's points
        updateLeaderboard();
    }, 3000);
});