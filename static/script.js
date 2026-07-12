/* ============================================
            STUDENT AI - SCRIPT.JS
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    startClock();

    loadTheme();

    autoScroll();

    setupTypingAnimation();

});


/* ============================================
                CLOCK
============================================ */

function startClock() {

    function updateClock() {

        const now = new Date();

        const clock = document.getElementById("clock");

        const date = document.getElementById("date");

        if (clock) {

            clock.innerHTML =
                now.toLocaleTimeString();

        }

        if (date) {

            date.innerHTML =
                now.toDateString();

        }

    }

    updateClock();

    setInterval(updateClock, 1000);

}


/* ============================================
            AUTO SCROLL CHAT
============================================ */

function autoScroll() {

    const chatArea =
        document.getElementById("chat-area");

    if (!chatArea) return;

    chatArea.scrollTop =
        chatArea.scrollHeight;

}


/* ============================================
            LIGHT / DARK MODE
============================================ */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    if (

        document.body.classList.contains(
            "light-mode"
        )

    ) {

        localStorage.setItem(
            "theme",
            "light"
        );

    }

    else {

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

}


function loadTheme() {

    const theme =
        localStorage.getItem("theme");

    if (theme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }

}
/* ============================================
            VOICE RECOGNITION
============================================ */

function startVoice() {

    if (!('webkitSpeechRecognition' in window)) {

        alert("Voice recognition is not supported in this browser.");

        return;

    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onstart = function () {

        console.log("🎤 Listening...");

    };

    recognition.onresult = function (event) {

        const transcript =
            event.results[0][0].transcript;

        const input =
            document.getElementById("question");

        if (input) {

            input.value = transcript;

        }

    };

    recognition.onerror = function (event) {

        console.log(event.error);

        alert("Voice recognition failed.");

    };

}


/* ============================================
                TEXT TO SPEECH
============================================ */

function speakAnswer(text) {

    if (!text) return;

    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.cancel();

    }

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}


/* ============================================
            TYPING ANIMATION
============================================ */

function setupTypingAnimation() {

    const messages =
        document.querySelectorAll(".typing-effect");

    messages.forEach((element) => {

        const text =
            element.textContent;

        element.textContent = "";

        let index = 0;

        function type() {

            if (index < text.length) {

                element.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(type, 15);

            }

        }

        type();

    });

}


/* ============================================
            FADE-IN ANIMATION
============================================ */

function fadeInElements() {

    const elements =
        document.querySelectorAll(

            ".feature-card, .stat-card, .chat-message"

        );

    elements.forEach((element, index) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        setTimeout(() => {

            element.style.transition =
                "all .5s ease";

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }, index * 100);

    });

}

document.addEventListener(

    "DOMContentLoaded",

    fadeInElements

);
/* ============================================
            STUDENT AI V2
            EXTRA FEATURES
============================================ */


/* ============================================
        SEARCH INPUT ANIMATION
============================================ */

const input = document.getElementById("question");

if (input) {

    input.addEventListener("focus", function () {

        this.parentElement.classList.add("active");

    });

    input.addEventListener("blur", function () {

        this.parentElement.classList.remove("active");

    });

}


/* ============================================
        MICROPHONE ANIMATION
============================================ */

const micButton = document.querySelector(".mic-btn");

function startMicAnimation(){

    if(micButton){

        micButton.classList.add("listening");

    }

}

function stopMicAnimation(){

    if(micButton){

        micButton.classList.remove("listening");

    }

}


/* ============================================
        LOADING DOTS
============================================ */

function createThinking(){

    const thinking=document.createElement("div");

    thinking.className="thinking-loader";

    thinking.innerHTML=`
        <span></span>
        <span></span>
        <span></span>
    `;

    return thinking;

}


/* ============================================
        CHARACTER COUNTER
============================================ */

if(input){

    input.addEventListener("input",function(){

        const counter=document.getElementById("char-count");

        if(counter){

            counter.innerHTML=this.value.length+"/500";

        }

    });

}


/* ============================================
        KEYBOARD SHORTCUT
============================================ */

document.addEventListener("keydown",function(e){

    if(e.ctrlKey && e.key==="k"){

        e.preventDefault();

        if(input){

            input.focus();

        }

    }

});


/* ============================================
        SCROLL TO TOP
============================================ */

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.className="scroll-top";

document.body.appendChild(topButton);

window.addEventListener("scroll",function(){

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ============================================
        PAGE LOADER
============================================ */

window.addEventListener("load",function(){

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.remove();

        },500);

    }

});


/* ============================================
        GREETING MESSAGE
============================================ */

const hour=new Date().getHours();

const greeting=document.getElementById("greeting");

if(greeting){

    if(hour<12){

        greeting.innerHTML="☀ Good Morning";

    }

    else if(hour<18){

        greeting.innerHTML="🌤 Good Afternoon";

    }

    else{

        greeting.innerHTML="🌙 Good Evening";

    }

}


/* ============================================
        CONSOLE MESSAGE
============================================ */

console.log("🚀 Student AI Loaded Successfully");