document.addEventListener('DOMContentLoaded', function() {
    const userPoints = parseInt(document.getElementById('user-points').textContent);
    const prizes = document.querySelectorAll('.prize');

    prizes.forEach(prize => {
        const prizePoints = parseInt(prize.getAttribute('data-points'));
        const redeemButton = prize.querySelector('.redeem-button');

        if (userPoints < prizePoints) {
            prize.classList.add('grayed-out');
            redeemButton.disabled = true;
        }
    });
});