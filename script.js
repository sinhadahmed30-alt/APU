const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

btn.onclick = () => {
  surprise.scrollIntoView({
    behavior: "smooth"
  });

  btn.innerText = "🎉 Surprise Opened!";

  confetti();
};


function confetti() {

  for (let i = 0; i < 80; i++) {

    const piece = document.createElement("span");

    piece.innerHTML = "🎉";
    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-30px";
    piece.style.fontSize = Math.random() * 20 + 15 + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";

    document.body.appendChild(piece);

    const fall = piece.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform:
            translateY(110vh) rotate(${Math.random() * 720}deg),
          opacity: 0
        }
      ],
      {
        duration: Math.random() * 2000 + 2000,
        easing: "linear"
      }
    );

    fall.onfinish = () => {
      piece.remove();
    };
  }
}