const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4>About This Site</h4>
            <p>Created for ENGL73170-26W at Conestoga College.</p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <p>
                <a href="index.html">Home</a>
                |
                <a href="pros.html">Climate Solutions</a>
                |
                <a href="cons.html">Environmental Costs</a>
            </p>
            <p>
                <a href="references.html">References</a>
                |
                <a href="ethics.html">Ethics &amp; License</a>
                |
                <a href="team.html">Our Team</a>
            </p>
        </div>
        <div class="footer-section">
            <h4>License</h4>
            <p>
                The content of this site is licensed under a
                <a
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                    International license (CC BY-NC-SA 4.0).</a
                >
            </p>
        </div>
    </div>
    <div class="footer-bottom">
        © 2026 Abhinav Venkat Sivakumar Gayathiri, Anh Dung Phan, Blessed Cheryl
        Kevin, Darshita Jagdishkumar Patel, Jonathan Ward.
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("footer-placeholder");
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
});
