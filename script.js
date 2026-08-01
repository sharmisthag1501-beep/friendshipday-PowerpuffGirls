function scrollToMessage(){

document.querySelector(".message").scrollIntoView({

behavior:"smooth"

});

}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML=["💖","💗","💜","✨","🌸"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*4+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,250);
