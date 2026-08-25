const openingScreen = document.getElementById("openingScreen");
const openStoryButton = document.getElementById("openStoryButton");
const letterSection = document.getElementById("letterSection");
const memoriesSection = document.getElementById("memoriesSection");
const finalSection = document.getElementById("finalSection");

const typingElement = document.getElementById("typing");

const memoriesButton = document.getElementById("memoriesButton");
const finalButton = document.getElementById("finalButton");
const replayButton = document.getElementById("replayButton");

const wax = document.getElementById("wax");
const backgroundMusic = document.getElementById("backgroundMusic");


// ============================================
// LETTER TEXT
// ============================================

const letterText =
`I still can't believe that we've made it through one whole year together. 

One year of knowing each other, learning each other's ways, sharing little moments, making unforgettable memories, and slowly becoming such a big part in each others lives. TBH, looking back dire hiya naging madali. Mayda times nga dire kt makaintindihan, moments nga dire kt na disagree hiton mga bagay bagay, and moments when things didn't go the way we wanted them to. Pero even through those moments, natuturoy ta la gihap bumalik ha kada usa. And that's one of the things I'll always be grateful for.

Thankful kaayo ko for the love you've given me, for your care, for your patience, for the moments you've stayed, for understanding, and for all the little things you've done. I'm thankful for every laugh, every silly moment, every quiet moment, and even moments that taught us how to understand each other better. 

Somewhere along the way, our lives became intertwined. Your happiness became my happiness, your presence became something I always looked forward to. I know this is only the beggining of us. There are still so many things we haven't experienced together. So many places we haven't been pa, more core memories to make, more firsts to share. Honestly, I kennat wait to experience them with you.

More firsts, More unforgettable memories, More ordinary days that somehow became special because they're with you.

HAPPY FIRST ANNIVERSARY, LOVVEEE.

I loveee youuu to infinity and beyondddddd.`;  

// ============================================
// OPEN ANNIVERSARY STORY
// ============================================

if (openStoryButton) {

    openStoryButton.addEventListener("click", function () {

        // Start the music from the user's click
        if (backgroundMusic) {

            backgroundMusic.volume = 0.5;

            backgroundMusic.play()
                .then(function () {

                    console.log("Anniversary music started.");

                })
                .catch(function (error) {

                    console.error(
                        "Music could not start:",
                        error
                    );

                });

        }


        // Close the opening screen
        if (openingScreen) {

            openingScreen.classList.add("hide");

        }


        // Start the letter typing
        setTimeout(function () {

            typingIndex = 0;

            if (typingElement) {

                typingElement.innerHTML = "";

            }

            typeLetter();

        }, 900);

    });

}


// ============================================
// TYPEWRITER
// ============================================

let typingIndex = 0;

const typingSpeed = 35;


function typeLetter() {

    if (!typingElement) {
        return;
    }

    if (typingIndex < letterText.length) {

        const character = letterText.charAt(typingIndex);

        if (character === "\n") {
            typingElement.innerHTML += "<br>";
        } else {
            typingElement.innerHTML += character;
        }

        typingIndex++;

        setTimeout(typeLetter, typingSpeed);
    }
}



// ============================================
// SHOW SECTION
// ============================================

function showSection(section) {

    if (letterSection) {
        letterSection.classList.remove("active");
    }

    if (memoriesSection) {
        memoriesSection.classList.remove("active");
    }

    if (finalSection) {
        finalSection.classList.remove("active");
    }

    if (section) {
        section.classList.add("active");
    }

}


// ============================================
// LETTER → MEMORIES
// ============================================

if (memoriesButton) {

    memoriesButton.addEventListener("click", function () {

        // Start anniversary music
        if (backgroundMusic) {

            backgroundMusic.volume = 0.5;

            backgroundMusic.play()
                .then(function () {

                    console.log("Music started!");

                })
                .catch(function (error) {

                    console.error(
                        "Music failed to play:",
                        error
                    );

                });

        }


        // Open the memories
        if (wax) {

            wax.classList.add("wax-open");

        }


        setTimeout(function () {

            showSection(memoriesSection);

            animatePolaroids();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 700);

    });

}


// ============================================
// POLAROID ANIMATION
// ============================================

function animatePolaroids() {

    const polaroids =
        document.querySelectorAll(".polaroid");

    polaroids.forEach(function (polaroid, index) {

        polaroid.classList.remove("show");

        setTimeout(function () {

            polaroid.classList.add("show");

        }, index * 250);

    });

}


// ============================================
// MEMORIES → FINAL MESSAGE
// ============================================

if (finalButton) {

    finalButton.addEventListener("click", function () {

        showSection(finalSection);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHeartBurst();

    });

}


// ============================================
// REPLAY
// ============================================

if (replayButton) {

    replayButton.addEventListener("click", function () {

        showSection(letterSection);

        typingIndex = 0;

        if (typingElement) {
            typingElement.innerHTML = "";
        }

        if (wax) {
            wax.classList.remove("wax-open");
        }

        const polaroids =
            document.querySelectorAll(".polaroid");

        polaroids.forEach(function (polaroid) {

            polaroid.classList.remove("show");

        });

        setTimeout(function () {

            typeLetter();

        }, 600);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ============================================
// HEART BURST
// ============================================

function createHeartBurst() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💞",
        "♡"
    ];

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("burstHeart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 2500);

    }

}


// ============================================
// FLOATING HEARTS
// ============================================

function createFloatingHeart() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "♡"
    ];

    const heart =
        document.createElement("div");

    heart.classList.add("floatingHeart");

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 12 + 12 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 9000);

}


setInterval(createFloatingHeart, 1200);