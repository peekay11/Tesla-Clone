window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    setTimeout(function() {
        preloader.style.transition = 'opacity 2.5s'; // Longer and smoother fade-out
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 2500); // Time for fade-out transition
    }, 1000); // 2-second delay before fade-out starts
});
