const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4>About This Site</h4>
            <p>Created for ENGL73170-26W at Conestoga College.</p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <p><u><a href="index.html">Home</a></u> | <u><a href="pros.html">Pros</a></u> | <u><a href="cons.html">Cons</a></u></p>
            <p><u><a href="ethics.html">Ethics</a></u> | <u><a href="team.html">Team</a></u> | <u><a href="references.html">References</a></u></p>
        </div>
        <div class="footer-section">
            <h4>License</h4>
            <p><u><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a></u></p>
        </div>
    </div>
    <div class="footer-bottom">
        © 2026 Abhinav Venkat Sivakumar Gayathiri, Anh Dung Phan, Blessed Cheryl Kevin, Darshita Jagdishkumar Patel, Jonathan Ward.
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
});
