// Floating Hearts Function
function showHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("floating-heart");
        document.body.appendChild(heart);

        let x = Math.random() * window.innerWidth;
        let y = window.innerHeight + 20;
        let size = Math.random() * 15 + 10;
        let duration = Math.random() * 3 + 2;

        heart.style.left = `${x}px`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.animation = `floatUp ${duration}s linear`;

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}

// Auto-play Background Music with Browser Compatibility
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.createElement("audio");
    audio.id = "bg-music";
    audio.autoplay = true;
    audio.loop = true;
    audio.innerHTML = '<source src="assets/love-music.mp3" type="audio/mpeg">';
    document.body.appendChild(audio);

    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Music playing 🎶");
        }).catch(() => {
            console.log("Autoplay blocked. Playing after user interaction.");
            document.addEventListener("click", () => audio.play(), { once: true });
        });
    }
});

/* Floating Heart CSS */
const style = document.createElement('style');
style.innerHTML = `
    .floating-heart {
        position: fixed;
        bottom: 0;
        background: red;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        transform: rotate(-45deg);
        opacity: 0.7;
    }

    .floating-heart::before,
    .floating-heart::after {
        content: "";
        width: 15px;
        height: 15px;
        background: red;
        position: absolute;
        border-radius: 50%;
    }

    .floating-heart::before {
        top: -7px;
        left: 0;
    }

    .floating-heart::after {
        left: 7px;
        top: 0;
    }

    @keyframes floatUp {
        0% { transform: translateY(0) rotate(-45deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(-45deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
