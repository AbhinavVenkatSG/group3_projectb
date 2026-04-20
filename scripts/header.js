const headerHTML = `
<header>
    <nav>
        <a href="index.html" class="logo">CS &amp; Climate</a>
        <ul class="nav-links">
            <li><a href="index.html" data-page="home">Home</a></li>
            <li><a href="pros.html" data-page="pros">Benefits</a></li>
            <li><a href="cons.html" data-page="cons">Impacts</a></li>
            <li><a href="references.html" data-page="references">References</a></li>
            <li><a href="ethics.html" data-page="ethics">Ethics &amp; License</a></li>
            <li><a href="team.html" data-page="team">Our Team</a></li>
        </ul>
    </nav>
</header>
`;

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('header-placeholder');

    if (placeholder) {
        placeholder.innerHTML = headerHTML;

        // Highlight active link in nav bar
        const currentPage = document.body.dataset.page;

        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.dataset.page === currentPage) {
                link.classList.add('active');
            }
        });

        // Shrink navbar on scroll
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
