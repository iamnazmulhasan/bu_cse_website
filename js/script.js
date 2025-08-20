document.addEventListener("DOMContentLoaded", function() {

    // --- Active Nav Link (Improved) ---
    // This version first removes 'active' from all links before adding it to the correct one, which is more reliable.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Faculty Search Filter ---
    // This is kept from your version for the faculty.html page.
    const facultySearch = document.getElementById('facultySearch');
    if (facultySearch) {
        facultySearch.addEventListener('keyup', function() {
            const filter = facultySearch.value.toLowerCase();
            const facultyMembers = document.querySelectorAll('.faculty-member');
            facultyMembers.forEach(member => {
                const name = member.querySelector('.card-title').textContent.toLowerCase();
                const research = member.querySelector('.research-interests').textContent.toLowerCase();
                if (name.includes(filter) || research.includes(filter)) {
                    member.style.display = '';
                } else {
                    member.style.display = 'none';
                }
            });
        });
    }

    // --- Back to Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBackToTop);
        document.addEventListener('scroll', toggleBackToTop);
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Animations on Scroll (Improved) ---
    // This version checks if elements to reveal exist on the page before running, which is a minor optimization.
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

});
