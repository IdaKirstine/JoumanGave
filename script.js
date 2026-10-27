
const welcome = document.getElementById("welcome");
const gift = document.getElementById("gift");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");

startButton.addEventListener("click", () => {
    welcome.classList.add("hidden");
    gift.classList.remove("hidden");
    showConfetti();
});

backButton.addEventListener("click", () => {
    gift.classList.add("hidden");
    welcome.classList.remove("hidden");

    document.querySelectorAll(".content-panel").forEach(panel => {
        panel.classList.add("hidden");
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".gift-card").forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);

        document.querySelectorAll(".content-panel").forEach(panel => {
            panel.classList.add("hidden");
        });

        target.classList.remove("hidden");
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
});

function showConfetti() {
    const symbols = ["♡", "♥", "✦", "✧", "★"];

    for (let i = 0; i < 32; i++) {
        const piece = document.createElement("span");

        piece.textContent = symbols[
            Math.floor(Math.random() * symbols.length)
        ];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.color = ["#ff69b4", "#d8c2ff", "#ff3f9f"][
            Math.floor(Math.random() * 3)
        ];
        piece.style.fontSize = 16 + Math.random() * 20 + "px";
        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        const animation = piece.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                {
                    transform: `translateY(${window.innerHeight + 60}px) rotate(500deg)`,
                    opacity: 0.2
                }
            ],
            {
                duration: 1800 + Math.random() * 1800,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        animation.onfinish = () => piece.remove();
    }
}
