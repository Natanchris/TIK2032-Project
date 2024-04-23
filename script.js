document.addEventListener('DOMContentLoaded' , function () {
    const headerLinks = document.querySelectorAll('body nav a');

    headerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targertId = this.getAttribute('href');
            const targetElement = document.querySelector(targertId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});