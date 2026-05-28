const themeBtn = document.querySelector("#themeBtn");
const body = document.querySelector("body");

const musicBtn = document.querySelector("#musicBtn");
const bgMusic = document.querySelector("#bgMusic");
const songTitle = document.querySelector("#songTitle");
const nextBtn = document.querySelector("#nextBtn");

const playlist = [
    {
        src: "audio/Departure.mp3",
        title: "Departure - Francois Smith"
    },
    {
        src: "audio/Memory Loss.mp3",
        title: "Memory Loss - Francois Smith"
    },
    {
        src: "audio/Reve.mp3",
        title: "Reve - Francois Smith"
    }
];

let currentSong = 0;
const normalVolume = 0.4;
let isGifActive = false;

bgMusic.src = playlist[currentSong].src;
bgMusic.volume = normalVolume;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

function showSongTitle() {
    songTitle.textContent = playlist[currentSong].title;
    songTitle.style.opacity = "1";

    setTimeout(() => {
        songTitle.style.opacity = "0";
    }, 3000);
}

function playCurrentSong() {
    bgMusic.src = playlist[currentSong].src;
    bgMusic.volume = 0;
    bgMusic.play();
    musicBtn.textContent = "🔊";
    showSongTitle();

    let fadeIn = setInterval(() => {
        if (isGifActive) {
        bgMusic.volume = 0;
        clearInterval(fadeIn);
        return;
        }
        bgMusic.volume += 0.05;

        if (bgMusic.volume >= normalVolume) {
            bgMusic.volume = normalVolume;
            clearInterval(fadeIn);
        }
    }, 100);
}

function nextSong() {
    currentSong++;

    if (currentSong >= playlist.length) {
        currentSong = 0;
    }

    playCurrentSong();
}

musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "🔊";
        showSongTitle();
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🔇";
    }
});

bgMusic.addEventListener("ended", () => {
    nextSong();
});

nextBtn.addEventListener("click", () => {
    nextSong();
});
const profileImg = document.querySelector(".yuta");
const yutaBox = document.querySelector(".yuta-box");
const gifSound = document.querySelector("#gifSound");

function activateGif() {
    profileImg.src = profileImg.dataset.gif;
    profileImg.classList.add("active");
    isGifActive = true;
    bgMusic.volume = 0;
    gifSound.currentTime = 0;
    gifSound.play();
}

function deactivateGif() {
    profileImg.src = profileImg.dataset.static;
    profileImg.classList.remove("active");
    isGifActive = false;
    bgMusic.volume = normalVolume;
    gifSound.pause();
    gifSound.currentTime = 0;
}
yutaBox.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

yutaBox.addEventListener("mouseenter", () => {
    activateGif();
});

yutaBox.addEventListener("mouseleave", () => {
    deactivateGif();
});

yutaBox.addEventListener("touchstart", (event) => {
    event.preventDefault();
    activateGif();
}, { passive: false });

yutaBox.addEventListener("touchend", () => {
    deactivateGif();
});
const langBtn = document.querySelector("#langBtn");
const mainTitle = document.querySelector("#mainTitle");
const authorTitle = document.querySelector("#authorTitle");
const introText = document.querySelector("#introText");
const aboutTitle = document.querySelector("#aboutTitle");
const aboutText = document.querySelector("#aboutText");
const projectsTitle = document.querySelector("#projectsTitle");
const projectsText = document.querySelector("#projectsText");
const contactsTitle = document.querySelector("#contactsTitle");

let currentLang = "en";

const texts = {
    en: {
        button: "🇬🇧",
        mainTitle: "My first project",
        authorTitle: "By: Fabrizio",
        introText: "This is a paragraph used as an example to make use of programming html, CSS and JS. Thanks for reading.",
        aboutTitle: "About me",
        aboutText: "I'm a simple person living a good life, that enjoys programming while listening to relaxing music. Decided to start being a programmer after several years of trying to find my own profession, and this one is the one im actually looking forward to.",
        projectsTitle: "My projects",
        projectsText: "One of my own projects is to create virtual life through this method, what does this means? AI, yes, it's one of my motivations. I really dislike the use of AI as a tool to fix everything and replacing human labour, instead, I encourage the use of it as a real tool to solve real issues, like a mathematical equation.",
        contactsTitle: "My contacts"
    },

    es: {
        button: "🇪🇸",
        mainTitle: "Mi primer proyecto",
        authorTitle: "Por: Fabrizio",
        introText: "Este es un párrafo usado como ejemplo para practicar HTML, CSS y JS. Gracias por leer.",
        aboutTitle: "Sobre mí",
        aboutText: "Soy una persona simple viviendo una buena vida, que disfruta programar mientras escucha música relajante. Decidí empezar a ser programador después de varios años intentando encontrar mi propia profesión, y esta es la que realmente me entusiasma seguir.",
        projectsTitle: "Mis proyectos",
        projectsText: "Uno de mis proyectos es crear vida virtual mediante este método. ¿Qué significa esto? IA. Sí, es una de mis motivaciones. Sin embargo, me disgusta mucho el uso de la IA como método para arreglar todo y reemplazar el trabajo humano; en cambio, apoyo su uso como una herramienta real para resolver problemas reales, como una ecuación matemática.",
        contactsTitle: "Mis contactos"
    }
};

function changeLanguage() {
    if (currentLang === "en") {
        currentLang = "es";
    } else {
        currentLang = "en";
    }

    mainTitle.textContent = texts[currentLang].mainTitle;
    authorTitle.textContent = texts[currentLang].authorTitle;
    introText.textContent = texts[currentLang].introText;
    aboutTitle.textContent = texts[currentLang].aboutTitle;
    aboutText.textContent = texts[currentLang].aboutText;
    projectsTitle.textContent = texts[currentLang].projectsTitle;
    projectsText.textContent = texts[currentLang].projectsText;
    contactsTitle.textContent = texts[currentLang].contactsTitle;
    langBtn.textContent = texts[currentLang].button;
}

langBtn.addEventListener("click", () => {
    changeLanguage();
});