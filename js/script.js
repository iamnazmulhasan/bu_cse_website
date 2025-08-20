document.addEventListener("DOMContentLoaded", function() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

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

    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    const contentTitle = document.getElementById('content-title');
    const facultyContent = document.getElementById('faculty-content');
    const officerContent = document.getElementById('officer-content');

    if (sidebarLinks.length > 0 && contentTitle) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('data-content');

                sidebarLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                facultyContent.style.display = 'none';
                officerContent.style.display = 'none';
                
                if (target === 'faculty') {
                    facultyContent.style.display = 'block';
                    contentTitle.querySelector('span').textContent = 'Faculty Members';
                } else if (target === 'officer') {
                    officerContent.style.display = 'block';
                    contentTitle.querySelector('span').textContent = 'Officers';
                }
            });
        });
    }

});
