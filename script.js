/* ==========================================================
   LOVE JOURNEY WEBSITE
   PART 3A - SCRIPT.JS
========================================================== */


/* =======================================
LOADER
======================================= */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },2000);


});



/* =======================================
TYPING EFFECT
======================================= */


const typed = new Typed("#typed",{

    strings:[

        "A Journey To Forever ❤️",

        "A Ticket For Our Future ✈️",

        "A Story Written For Azkah 💍"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1800,

    loop:true


});



/* =======================================
BEGIN JOURNEY BUTTON
======================================= */


const beginBtn=document.getElementById("beginJourney");


beginBtn.addEventListener("click",()=>{


    document
    .getElementById("boardingSection")
    .scrollIntoView({

        behavior:"smooth"

    });


});



/* =======================================
BACKGROUND MUSIC
======================================= */


const musicBtn=document.getElementById("musicBtn");

const music=document.getElementById("bgMusic");


let musicPlaying=false;



musicBtn.addEventListener("click",()=>{


    if(!musicPlaying){


        music.play();

        musicPlaying=true;


        musicBtn.innerHTML=

        `<i class="fa-solid fa-volume-high"></i>`;


    }

    else{


        music.pause();

        musicPlaying=false;


        musicBtn.innerHTML=

        `<i class="fa-solid fa-volume-xmark"></i>`;


    }


});



/* =======================================
BOARDING PASS FLIP
======================================= */


const boardingCard=
document.getElementById("boardingCard");


boardingCard.addEventListener("click",()=>{


    boardingCard.classList.toggle("flip");


});



/* =======================================
PASSPORT OPEN
======================================= */


const passport=
document.getElementById("passport");


passport.addEventListener("click",()=>{


    passport.classList.toggle("open");


});



/* =======================================
PASSPORT STAMP
======================================= */


const stampBtn=
document.getElementById("stampBtn");


const stamp=
document.getElementById("approvedStamp");



stampBtn.addEventListener("click",(e)=>{


    e.stopPropagation();


    stamp.classList.add("show");


});



/* =======================================
SCROLL REVEAL
======================================= */


const revealElements=document.querySelectorAll(

    ".event, .boarding-wrapper, .passport-container, .photo-frame"

);



const revealObserver=
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},{

    threshold:0.2


});



revealElements.forEach(element=>{


    element.classList.add("hidden");

    revealObserver.observe(element);


});



/* =======================================
PARALLAX STAR EFFECT
======================================= */


window.addEventListener("mousemove",(e)=>{


    const x=
    e.clientX / window.innerWidth;


    const y=
    e.clientY / window.innerHeight;



    document.getElementById("stars")
    .style.transform=

    `translate(${x*20}px,${y*20}px)`;


    document.getElementById("stars2")
    .style.transform=

    `translate(${x*35}px,${y*35}px)`;


});



/* =======================================
BUTTON RIPPLE EFFECT
======================================= */


document
.querySelectorAll("button")
.forEach(button=>{


    button.addEventListener("click",function(e){


        const ripple=document.createElement("span");


        ripple.className="ripple";


        const rect=this.getBoundingClientRect();


        ripple.style.left=

        `${e.clientX-rect.left}px`;


        ripple.style.top=

        `${e.clientY-rect.top}px`;



        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },700);



    });


});



/* =======================================
SMOOTH SECTION FADE
======================================= */


gsap.registerPlugin(ScrollTrigger);



gsap.utils.toArray("section").forEach(section=>{


    gsap.from(section,{


        opacity:0,

        y:60,

        duration:1,


        scrollTrigger:{


            trigger:section,

            start:"top 80%"


        }


    });



});

/* ==========================================================
   PART 3B - FINAL JAVASCRIPT
========================================================== */


/* =======================================
AIRPLANE HEART ROUTE
======================================= */


const plane = document.getElementById("plane");


const heartPositions = [

    {
        x:5,
        y:80
    },

    {
        x:20,
        y:45
    },

    {
        x:35,
        y:25
    },

    {
        x:50,
        y:45
    },

    {
        x:65,
        y:25
    },

    {
        x:80,
        y:45
    },

    {
        x:95,
        y:80
    }

];



let planeIndex=0;



function movePlane(){


    const point=
    heartPositions[planeIndex];


    gsap.to(plane,{

        left:`${point.x}%`,

        top:`${point.y}%`,

        duration:2,

        ease:"power2.inOut",

        onComplete:()=>{


            planeIndex++;


            if(planeIndex>=heartPositions.length){

                planeIndex=0;

            }


            movePlane();


        }


    });


}



movePlane();





/* =======================================
DRAW HEART PATH
======================================= */


const heartPath = document.getElementById("heartPath");


if (heartPath) {

    heartPath.setAttribute(
        "d",
        `
        M50 450
        C200 100 400 100 500 250
        C600 100 800 100 950 450
        C750 500 550 580 500 600
        C450 580 250 500 50 450
        `
    );

}


/* =======================================
FLOATING HEART GENERATOR
======================================= */


const heartContainer=
document.getElementById("floatingHearts");



function createHeart(){


    const heart=
    document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left=

    Math.random()*100+"%";


    heart.style.animationDuration=

    (4+Math.random()*5)+"s";


    heart.style.fontSize=

    (15+Math.random()*35)+"px";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },9000);


}



setInterval(createHeart,700);





/* =======================================
PROPOSAL BUTTONS
======================================= */

const yesButton=document.getElementById("yesBtn");

const maybeButton=document.getElementById("maybeBtn");

const noButton=document.getElementById("noBtn");

function removePreviousMessage(){

    const old=document.querySelector(".final-message");

    if(old){

        old.remove();

    }

}

yesButton.addEventListener("click",()=>{

    removePreviousMessage();

    confetti({

        particleCount:300,

        spread:170,

        origin:{y:.6}

    });

    setTimeout(()=>{

        confetti({

            particleCount:150,

            angle:60,

            spread:90,

            origin:{x:0}

        });

        confetti({

            particleCount:150,

            angle:120,

            spread:90,

            origin:{x:1}

        });

    },500);

    createFireworks();

    showLoveMessage(

        "❤️ She Said YES ❤️",

        `You just made me the happiest person in the world.

I promise to choose you,
respect you,
support you
and love you every single day.

Thank you for saying YES to our journey.`

    );

});


maybeButton.addEventListener("click",()=>{

    removePreviousMessage();

    showLoveMessage(

        "🤍 Maybe 🤍",

        `Thank you for being honest.

Take all the time you need.

There is absolutely no pressure.

Whenever you're ready,
I'll respect your decision.`

    );

});


noButton.addEventListener("click",()=>{

    removePreviousMessage();

    showLoveMessage(

        "💙 Thank You 💙",

        `Thank you for answering honestly.

No matter what your answer is,

I'll always be grateful
for every memory,
every laugh,
and every moment we shared.

I genuinely wish you happiness.`

    );

});
function createFireworks(){



    for(let i=0;i<40;i++){



        const firework=
        document.createElement("div");



        firework.className="firework";



        firework.style.left=

        Math.random()*100+"%";



        firework.style.top=

        Math.random()*100+"%";



        firework.style.background=

        randomColor();



        document
        .getElementById("fireworks")
        .appendChild(firework);



        setTimeout(()=>{


            firework.remove();


        },1500);



    }



}



function randomColor(){


const colors=[

"#ff4d6d",

"#ffd166",

"#ffffff",

"#ff8fab",

"#90dbf4"

];


return colors[

Math.floor(

Math.random()*colors.length

)

];


}






function showLoveMessage(title,text){

    const message=document.createElement("div");

    message.className="final-message";

    message.innerHTML=`

        <h1>${title}</h1>

        <p>${text.replace(/\n/g,"<br>")}</p>

    `;

    document

    .getElementById("proposal")

    .appendChild(message);

    gsap.from(message,{

        opacity:0,

        scale:.5,

        y:40,

        duration:1.8,

        ease:"elastic.out(1,0.5)"

    });

}




/* =======================================
AIRPLANE ROTATION
======================================= */


gsap.to("#plane",{


    rotate:-15,

    duration:1,

    repeat:-1,

    yoyo:true,


});





/* =======================================
MOUSE GLOW EFFECT
======================================= */


document.addEventListener("mousemove",(e)=>{


const glow=
document.createElement("div");



glow.className="mouse-glow";



glow.style.left=e.pageX+"px";

glow.style.top=e.pageY+"px";



document.body.appendChild(glow);



setTimeout(()=>{


glow.remove();


},500);



});






/* =======================================
FINAL INITIALIZATION
======================================= */


console.log(

"❤️ Love Journey Website Loaded Successfully"

);