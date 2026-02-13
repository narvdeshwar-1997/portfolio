/* ============================================================
   SCRIPT.JS - Portfolio Interactive Features
   Author: Narvdeshwar Kumar Singh
   ============================================================ */


/* ==========================================================
   1. TYPING ANIMATION
   Cycles through an array of strings, typing and deleting
   each one to create the classic "typewriter" effect.
   ========================================================== */

(function initTypingAnimation() {
    const element = document.getElementById("typing-text");
    const phrases = [
        "MERN Stack Developer",
        "AWS & DevOps Learner",
        "MCA Graduate",
        "Open to Work",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const TYPE_SPEED = 80;
    const DELETE_SPEED = 40;
    const PAUSE_AFTER_TYPE = 1800;
    const PAUSE_AFTER_DELETE = 400;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = PAUSE_AFTER_TYPE;
            isDeleting = true;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = PAUSE_AFTER_DELETE;
        }

        setTimeout(type, delay);
    }

    type();
})();


/* ==========================================================
   2. PARTICLE BACKGROUND ANIMATION
   Animated particles with mouse interactivity — particles
   gently move away from cursor and connect with lines.
   ========================================================== */

(function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    // Track mouse position relative to canvas
    canvas.addEventListener("mousemove", function (e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener("mouseleave", function () {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        var hero = document.querySelector(".hero");
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            baseX: 0, // set after creation
            baseY: 0,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 0.8,
            opacity: Math.random() * 0.5 + 0.2,
        };
    }

    function initParticleArray() {
        var count = Math.min(Math.floor((canvas.width * canvas.height) / 11000), 110);
        particles = [];
        for (var i = 0; i < count; i++) {
            var p = createParticle();
            p.baseX = p.x;
            p.baseY = p.y;
            particles.push(p);
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Teal-based particle colors
        var isDark = document.documentElement.getAttribute("data-theme") !== "light";
        var dotR = 0, dotG = 212, dotB = 170;
        if (!isDark) { dotR = 0; dotG = 184; dotB = 148; }

        particles.forEach(function (p, i) {
            // Mouse repulsion
            if (mouse.x !== null && mouse.y !== null) {
                var dx = p.x - mouse.x;
                var dy = p.y - mouse.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    var force = (mouse.radius - dist) / mouse.radius;
                    p.x += dx * force * 0.03;
                    p.y += dy * force * 0.03;
                }
            }

            // Move particle
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(" + dotR + "," + dotG + "," + dotB + "," + p.opacity + ")";
            ctx.fill();

            // Connect nearby particles
            for (var j = i + 1; j < particles.length; j++) {
                var dx2 = p.x - particles[j].x;
                var dy2 = p.y - particles[j].y;
                var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                if (dist2 < 140) {
                    var lineOpacity = (1 - dist2 / 140) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = "rgba(" + dotR + "," + dotG + "," + dotB + "," + lineOpacity + ")";
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticleArray();
    animate();

    var resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            resizeCanvas();
            initParticleArray();
        }, 200);
    });
})();


/* ==========================================================
   3. DARK / LIGHT THEME TOGGLE
   ========================================================== */

(function initThemeToggle() {
    var toggle = document.getElementById("theme-toggle");
    var html = document.documentElement;

    var savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    html.setAttribute("data-theme", savedTheme);

    toggle.addEventListener("click", function () {
        var current = html.getAttribute("data-theme");
        var next = current === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        localStorage.setItem("portfolio-theme", next);
    });
})();


/* ==========================================================
   4. STICKY NAVBAR + SCROLL SHADOW
   ========================================================== */

(function initNavbarScroll() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
})();


/* ==========================================================
   5. MOBILE MENU TOGGLE
   ========================================================== */

(function initMobileMenu() {
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });
})();


/* ==========================================================
   6. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
   ========================================================== */

(function initActiveNavHighlight() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");

    function highlightNav() {
        var scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
    highlightNav();
})();


/* ==========================================================
   7. SCROLL REVEAL ANIMATIONS
   Elements with class "reveal" fade in when they scroll
   into the viewport.
   ========================================================== */

(function initScrollReveal() {
    var reveals = document.querySelectorAll(".reveal");

    function checkReveal() {
        var windowHeight = window.innerHeight;
        var triggerPoint = windowHeight * 0.88;

        reveals.forEach(function (el) {
            var elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerPoint) {
                el.classList.add("revealed");
            }
        });
    }

    window.addEventListener("scroll", checkReveal);
    window.addEventListener("load", checkReveal);
    checkReveal();
})();


/* ==========================================================
   8. ANIMATED SKILL BARS
   ========================================================== */

(function initSkillBars() {
    var skillBars = document.querySelectorAll(".skill-progress");
    var animated = false;

    function animateBars() {
        if (animated) return;

        var skillsSection = document.getElementById("skills");
        if (!skillsSection) return;

        var sectionTop = skillsSection.getBoundingClientRect().top;
        var triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            skillBars.forEach(function (bar) {
                var targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth + "%";
            });
            animated = true;
        }
    }

    window.addEventListener("scroll", animateBars);
    window.addEventListener("load", animateBars);
})();


/* ==========================================================
   9. CONTACT FORM VALIDATION
   ========================================================== */

(function initFormValidation() {
    var form = document.getElementById("contact-form");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var messageError = document.getElementById("message-error");
    var successMsg = document.getElementById("form-success");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearError(input, errorEl) {
        input.addEventListener("input", function () {
            input.classList.remove("error");
            errorEl.textContent = "";
        });
    }
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var isValid = true;

        if (nameInput.value.trim().length < 2) {
            nameError.textContent = "Please enter your name (at least 2 characters).";
            nameInput.classList.add("error");
            isValid = false;
        } else {
            nameError.textContent = "";
            nameInput.classList.remove("error");
        }

        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.classList.add("error");
            isValid = false;
        } else {
            emailError.textContent = "";
            emailInput.classList.remove("error");
        }

        if (messageInput.value.trim().length < 10) {
            messageError.textContent = "Message must be at least 10 characters.";
            messageInput.classList.add("error");
            isValid = false;
        } else {
            messageError.textContent = "";
            messageInput.classList.remove("error");
        }

        if (isValid) {
            successMsg.classList.add("show");
            form.reset();
            setTimeout(function () {
                successMsg.classList.remove("show");
            }, 4000);
        }
    });
})();


/* ==========================================================
   10. SCROLL TO TOP BUTTON
   ========================================================== */

(function initScrollToTop() {
    var btn = document.getElementById("scroll-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });

    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();


/* ==========================================================
   11. TILT EFFECT ON PROJECT CARDS
   Adds a subtle 3D tilt effect when hovering over cards.
   ========================================================== */

(function initCardTilt() {
    var cards = document.querySelectorAll(".project-card");

    cards.forEach(function (card) {
        card.addEventListener("mousemove", function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / 20;
            var rotateY = (centerX - x) / 20;

            card.style.transform = "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-8px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
        });
    });
})();
