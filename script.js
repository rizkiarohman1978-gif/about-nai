/* ============================================================
   IS YOUR DAY BIRTHDAY WEBSITE
   JAVASCRIPT
   ============================================================ */

/* ============================================================
   ELEMENT
   ============================================================ */

const introScreen = document.getElementById("introScreen");

const startButton = document.getElementById("startButton");

const birthdayMusic = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

const wishButton = document.getElementById("wishButton");

const webCount = document.getElementById("webCount");

const missionStatus = document.getElementById("missionStatus");

/* ============================================================
   START WEBSITE
   ============================================================ */

startButton.addEventListener("click", function () {
  introScreen.classList.add("hide");

  birthdayMusic.volume = 0.35;

  birthdayMusic.play().catch(function () {
    console.log("Music membutuhkan interaksi pengguna.");
  });
});

/* ============================================================
   MUSIC ON / OFF
   ============================================================ */

let musicPlaying = true;

musicButton.addEventListener("click", function () {
  if (musicPlaying) {
    birthdayMusic.pause();

    musicButton.innerHTML = "🔇 Music";

    musicPlaying = false;
  } else {
    birthdayMusic.play();

    musicButton.innerHTML = "🔊 Music";

    musicPlaying = true;
  }
});

/* ============================================================
   BIRTHDAY MISSION
   ============================================================ */

const hiddenWebs = document.querySelectorAll(".hidden-web");

let foundWebs = 0;

hiddenWebs.forEach(function (web) {
  web.addEventListener("click", function () {
    /*
     * Jangan hitung dua kali
     */

    if (web.classList.contains("found")) {
      return;
    }

    /*
     * Tambahkan jumlah web
     */

    foundWebs++;

    /*
     * Update counter
     */

    webCount.textContent = foundWebs;

    /*
     * Hilangkan web
     */

    web.classList.add("found");

    /*
     * Jika semua ditemukan
     */

    if (foundWebs === 5) {
      missionStatus.textContent = "MISSION COMPLETE! 🕷️";

      missionStatus.classList.add("complete");

      createConfetti();
    }
  });
});

/* ============================================================
   MAKE A WISH
   ============================================================ */

wishButton.addEventListener("click", function () {
  wishButton.innerHTML = "✨ WISH SENT! ✨";

  wishButton.style.background = "#e50914";

  createStars();
});

/* ============================================================
   CONFETTI
   ============================================================ */

function createConfetti() {
  const colors = ["#e50914", "#0645a5", "#ffffff", "#ffd400"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";

    confetti.style.width = "8px";

    confetti.style.height = "8px";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.top = "-10px";

    confetti.style.zIndex = "9998";

    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = 2 + Math.random() * 3;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",

          opacity: 1,
        },

        {
          transform: `translateY(110vh)
                         rotate(${Math.random() * 720}deg)`,

          opacity: 0,
        },
      ],

      {
        duration: duration * 1000,

        easing: "cubic-bezier(.2,.8,.3,1)",

        fill: "forwards",
      },
    );

    setTimeout(() => confetti.remove(), duration * 1000);
  }
}

/* ============================================================
   STAR EFFECT
   ============================================================ */

function createStars() {
  for (let i = 0; i < 30; i++) {
    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize = Math.random() * 20 + 10 + "px";

    star.style.zIndex = "100";

    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    star.animate(
      [
        {
          opacity: 0,

          transform: "scale(0)",
        },

        {
          opacity: 1,

          transform: "scale(1)",
        },

        {
          opacity: 0,

          transform: "scale(0)",
        },
      ],

      {
        duration: 1800,

        easing: "ease-in-out",
      },
    );

    setTimeout(() => star.remove(), 1800);
  }
}

/* ============================================================
   SCROLL ANIMATION
   ============================================================ */

const animatedElements = document.querySelectorAll(
  ".memory-card, .power-card, .comic-panel, .letter-card",
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";
      }
    });
  },

  {
    threshold: 0.15,
  },
);

animatedElements.forEach(function (element) {
  element.style.opacity = "0";

  element.style.transform = "translateY(50px)";

  element.style.transition = "0.8s ease";

  observer.observe(element);
});

/* ============================================================
   RANDOM WEB EFFECT
   ============================================================ */

setInterval(
  function () {
    const web = document.createElement("div");

    web.innerHTML = "🕸️";

    web.style.position = "fixed";

    web.style.top = Math.random() * 70 + "%";

    web.style.right = "-100px";

    web.style.fontSize = "30px";

    web.style.zIndex = "20";

    web.style.pointerEvents = "none";

    document.body.appendChild(web);

    web.animate(
      [
        {
          transform: "translateX(0) rotate(0deg)",

          opacity: 0,
        },

        {
          transform: "translateX(-120vw) rotate(360deg)",

          opacity: 1,
        },

        {
          transform: "translateX(-150vw) rotate(720deg)",

          opacity: 0,
        },
      ],

      {
        duration: 5000,

        easing: "linear",
      },
    );

    setTimeout(() => web.remove(), 5000);
  },

  12000,
);
