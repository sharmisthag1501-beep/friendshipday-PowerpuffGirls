// ===============================
// POWERPUFF GIRLS SCRAPBOOK
// ===============================

const openBtn = document.getElementById("openBtn");

const school = document.getElementById("schoolSection");
const travel = document.getElementById("travelSection");
const wine = document.getElementById("wineSection");
const letter = document.getElementById("letterSection");
const finalPage = document.getElementById("finalSection");

openBtn.addEventListener("click", () => {

    school.classList.remove("hidden");
    travel.classList.remove("hidden");
    wine.classList.remove("hidden");
    letter.classList.remove("hidden");
    finalPage.classList.remove("hidden");

    school.scrollIntoView({
        behavior: "smooth"
    });

});

// ==================================
// Floating Hearts
// ==================================

const floating = document.getElementById("floating");

const emojis = [
    "💖",
    "💕",
    "🌸",
    "✨",
    "🦋",
    "⭐",
    "🎀"
];

function createFloating() {

    const item = document.createElement("div");

    item.className = "heart";

    item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize = (20 + Math.random() * 18) + "px";

    item.style.animationDuration = (6 + Math.random() * 5) + "s";

    floating.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 12000);

}

setInterval(createFloating, 350);

// ==================================
// Scroll Animation
// ==================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([
                {
                    opacity: 0,
                    transform: "translateY(60px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }
            ], {
                duration: 1000,
                fill: "forwards"
            });

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => observer.observe(section));

// ==================================
// Surprise Button
// ==================================

document.getElementById("surpriseBtn").addEventListener("click", () => {

    for (let i = 0; i < 220; i++) {

        const emoji = document.createElement("div");

        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.position = "fixed";

        emoji.style.left = Math.random() * 100 + "vw";

        emoji.style.top = Math.random() * 100 + "vh";

        emoji.style.fontSize = (20 + Math.random() * 35) + "px";

        emoji.style.pointerEvents = "none";

        emoji.style.zIndex = "999";

        document.body.appendChild(emoji);

        emoji.animate([
            {
                transform: "scale(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: "scale(1.5) rotate(360deg)",
                opacity: 0
            }
        ], {
            duration: 2800,
            easing: "ease-out"
        });

        setTimeout(() => emoji.remove(), 2800);

    }

    setTimeout(() => {

        alert(
`💖 Happy Friendship Day 💖

Powerpuff Girls Forever!

School ➜ College ➜ Careers ➜ Marriage ➜ Kids ➜ Grey Hair

No matter where life takes us...

We'll always be US. ❤️`
        );

    }, 600);

});