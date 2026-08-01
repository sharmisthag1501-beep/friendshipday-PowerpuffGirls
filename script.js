// =========================================
// THE POWERPUFF TRIO
// Motzz • Ravzz • Swatzz
// =========================================

// -------------------------------
// Smooth Scroll Buttons
// -------------------------------

const startBtn = document.getElementById("startJourney");

if(startBtn){

startBtn.addEventListener("click",()=>{

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

});

}

const journeyBtn=document.getElementById("journeyBtn");

if(journeyBtn){

journeyBtn.addEventListener("click",()=>{

document.getElementById("journey").scrollIntoView({

behavior:"smooth"

});

});

}

const endingBtn=document.getElementById("endingBtn");

if(endingBtn){

endingBtn.addEventListener("click",()=>{

document.getElementById("ending").scrollIntoView({

behavior:"smooth"

});

});

}


// -------------------------------
// Scroll Reveal
// -------------------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

});

document.querySelectorAll(

".memory,.quote,.letter-card,.ending-card,.hero-card"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// -------------------------------
// Floating Hearts
// -------------------------------

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.className="floatingHeart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,700);


// -------------------------------
// Sparkles
// -------------------------------

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=(10+Math.random()*12)+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2500);

}

setInterval(createSparkle,600);


// -------------------------------
// Floating Clouds
// -------------------------------

function createCloud(){

const cloud=document.createElement("div");

cloud.className="cloud";

cloud.innerHTML="☁️";

cloud.style.left="-10%";

cloud.style.top=Math.random()*70+"vh";

cloud.style.fontSize=(40+Math.random()*25)+"px";

cloud.style.animationDuration=(30+Math.random()*20)+"s";

document.body.appendChild(cloud);

setTimeout(()=>{

cloud.remove();

},50000);

}

setInterval(createCloud,9000);


// -------------------------------
// Dynamic CSS
// -------------------------------

const style=document.createElement("style");

style.innerHTML=`

.floatingHeart{

position:fixed;

bottom:-50px;

pointer-events:none;

z-index:999;

animation:heartUp linear forwards;

}

@keyframes heartUp{

0%{

opacity:0;

transform:translateY(0) rotate(0deg);

}

20%{

opacity:1;

}

100%{

opacity:0;

transform:translateY(-120vh) rotate(360deg);

}

}

.sparkle{

position:fixed;

pointer-events:none;

animation:sparkleAnim 2.5s linear forwards;

z-index:998;

}

@keyframes sparkleAnim{

0%{

opacity:0;

transform:scale(.2);

}

50%{

opacity:1;

transform:scale(1.3);

}

100%{

opacity:0;

transform:scale(.2);

}

}

.cloud{

position:fixed;

pointer-events:none;

z-index:-1;

animation:cloudMove linear forwards;

opacity:.35;

}

@keyframes cloudMove{

0%{

transform:translateX(0);

}

100%{

transform:translateX(120vw);

}

}

`;

document.head.appendChild(style);


// -------------------------------
// Hover Animation
// -------------------------------

document.querySelectorAll(".memory").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// -------------------------------
// Button Ripple
// -------------------------------

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

button{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.45);

transform:scale(0);

animation:ripple .6s linear;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);


// -------------------------------
// Console
// -------------------------------

console.log("💖 Motzz • Ravzz • Swatzz Forever 💖");
