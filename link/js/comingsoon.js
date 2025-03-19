const countdown = () => {
    const targetDate = new Date('2023-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = '<h2>We\'re Live!</h2>';
    }
};

const interval = setInterval(countdown, 1000);

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }

    if (e.keyCode === 123) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
});

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});