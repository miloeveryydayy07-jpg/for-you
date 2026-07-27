// ======================================
// ELEMENTS
// ======================================

const loader = document.getElementById("loader");
const mainScene = document.getElementById("mainScene");

const card = document.getElementById("card");
const typing = document.getElementById("typing");

const music = document.getElementById("music");

// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            mainScene.classList.remove("hidden");

        }, 1000);

    }, 3000);

});

// ======================================
// LETTER
// ======================================

const message =
`I've been thinking about everything that has happened between us, ngan the more na nag rereflect ak about ht, the more I realize how much I've hurt you. I know nak mga actions, nak pagiging immature, nak pag kasensitibo, and the way I handled things have disappointed you more than once. For that, I am deeply sorry.

I know that lately we've been growing distant, ngan nant pakikiistorya ha usat usat dre na sugad han dati. It hurts kasi aram ko moslty dara haak nag kakamayda nakit distance ha usat usa.
Love, you deserved patience, understanding, reassurance, and consistency, pero mayda time nga nag ffail ak ihatag it haim.
I regret every moment that I made you feel sad, disappointed, or alone dara haak.
I'm not asking you nga kalimtan in overnight. I only hope tagan ngahaw nm ak chance para itama tanan ngaak pag kakamali. Mabawi ak para han ngatanan ngak nabuhat, kasi you deserve nothing less.
Please never doubt this one thing. Bisan pa gaano ka kuri tat sitwasyon, tak pag mamahal haim dre mag babag-o.
Dre ko karuyag mawara ka haak hn sugad la, gidakoe kana nga parte tak kinabuhi.

I'm sorry for everything.

I love you always, in all ways. `;


// ======================================
// TYPEWRITER
// ======================================

let index = 0;

function typeWriter() {

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }else{

        setTimeout(showEnding,3000);

    }

}

// ======================================
// MUSIC FADE-IN
// ======================================

function fadeMusic(){

    music.volume = 0;

    music.play();

    let volume = 0;

    const fade = setInterval(() => {

        if(volume < 0.4){

            volume += 0.02;

            music.volume = volume;

        }else{

            clearInterval(fade);

        }

    },200);

}

// ======================================
// OPEN CARD
// ======================================

let opened = false;

card.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    card.classList.add("open");

    fadeMusic();

    setTimeout(() => {

        typeWriter();

    },1200);

});

// ======================================
// FINAL MESSAGE
// ======================================

function showEnding() {

    const ending = document.createElement("div");

    ending.className = "ending";

    ending.innerHTML = `
        <h2>Thank you...</h2>

        <p>
            for reading it.
            <br><br>

            Kun ano man tim ma say,
            <br>
            I'll always be grateful
            that you listened.
            <br><br>

            ❤️
            <br><br>

            — Polyana
        </p>

        <button id="readAgain">
            Read My Letter Again
        </button>
    `;

    document.body.appendChild(ending);

    setTimeout(() => {

        ending.classList.add("show");

    },100);

    const button = ending.querySelector("#readAgain");

    button.addEventListener("click", () => {

        // Hide the ending
        ending.classList.remove("show");

        // Scroll the letter back to the top
        const letter = document.getElementById("letterPage");

        letter.scrollTo({

            top: 0,

            behavior: "smooth"

        });

        setTimeout(() => {

            ending.remove();

        },500);

    });

}