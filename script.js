// ==========================================
// POWERPUFF GIRLS - FOREVER STORY
// ==========================================

// Smooth Scroll Buttons

const enterStory = document.getElementById("enterStory");

if (enterStory) {
    enterStory.addEventListener("click", () => {
        document.getElementById("letter").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const journeyBtn = document.getElementById("journeyBtn");

if (journeyBtn) {
    journeyBtn.addEventListener("click", () => {
        document.getElementById("journey").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const lastPage = document.getElementById("lastPage");

if (lastPage) {
    lastPage.addEventListener("click", () => {
        document.getElementById("goodbye").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ==========================================
// Scroll Reveal
// ==========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
".memory,.quote,.letter,.goodbye-card,.intro-card,.hero"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ==========================================
// Floating Hearts
// ==========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (16 + Math.random()*20) + "px";

    heart.style.animationDuration = (6 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,700);


// ==========================================
// Sparkles
// ==========================================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=Math.random()*window.innerWidth+"px";

    sparkle.style.top=Math.random()*window.innerHeight+"px";

    sparkle.style.fontSize=(10+Math.random()*12)+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },2500);

}

setInterval(createSparkle,500);


// ==========================================
// Dynamic Styles
// ==========================================

const style=document.createElement("style");

style.innerHTML=`

.heart{

position:fixed;

bottom:-30px;

pointer-events:none;

animation:heartFloat linear forwards;

z-index:999;

}

@keyframes heartFloat{

0%{

transform:translateY(0) scale(.8);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.4);

opacity:0;

}

}

.sparkle{

position:fixed;

pointer-events:none;

animation:sparkle 2.5s linear forwards;

z-index:998;

}

@keyframes sparkle{

0%{

opacity:0;

transform:scale(.3);

}

50%{

opacity:1;

transform:scale(1.2);

}

100%{

opacity:0;

transform:scale(.3);

}

}

`;

document.head.appendChild(style);


// ==========================================
// Cute Hover Animation
// ==========================================

document.querySelectorAll(".memory").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.03) rotate(-1deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1) rotate(0deg)";

});

});


// ==========================================
// Intro Fade
// ==========================================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1.2s ease";

document.body.style.opacity="1";

},200);

});


// ==========================================
// Console Message
// ==========================================

console.log("💖 Powerpuff Girls Forever Story Loaded 💖");
