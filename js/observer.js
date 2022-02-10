const containers = document.querySelectorAll('.container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animation", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target)
    });
}, {
    threshold: 0.25,

} );

containers.forEach(container => {
    observer.observe(container); 
});

