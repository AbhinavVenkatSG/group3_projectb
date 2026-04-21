const headerHTML = `
<header>
    <nav>
        <a href="index.html" class="logo">Computing & Climate Change</a>
        <ul class="nav-links">
            <li><a href="pros.html" data-page="pros">Climate Solutions</a></li>
            <li><a href="cons.html" data-page="cons">Environmental Costs</a></li>
            <li><a href="ethics.html" data-page="ethics">Ethics</a></li>
            <li><a href="team.html" data-page="team">Our Team</a></li>
            <li><a href="references.html" data-page="references">References</a></li>
        </ul>
    </nav>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("header-placeholder");
    if (placeholder) {
        placeholder.innerHTML = headerHTML;

        // Highlight active link in nav bar
        const currentPage = document.body.dataset.page;

        document.querySelectorAll(".nav-links a").forEach((link) => {
            if (link.dataset.page === currentPage) {
                link.classList.add("active");
            }
        });
    }
});
