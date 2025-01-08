document.getElementById('home-link').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('destination-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('topDest').scrollIntoView({
        behavior: 'smooth'
    });
});

