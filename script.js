const loader =
  document.getElementById("loader");

const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.getElementById("navLinks");

const envelope =
  document.getElementById("envelope");

const reassurance =
  document.getElementById("reassurance");

const loveButton =
  document.getElementById("loveButton");

const toast =
  document.getElementById("toast");

const lastThing =
  document.getElementById("lastThing");

const modal =
  document.getElementById("modal");

const closeModal =
  document.getElementById("closeModal");

const alwaysUs =
  document.getElementById("alwaysUs");

const petals =
  document.getElementById("petals");


/* -------------------
   LOADER
-------------------- */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        loader.classList.add(
          "hide"
        );

      },
      1000
    );

  }
);


/* -------------------
   MOBILE NAVIGATION
-------------------- */

menuButton.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle(
      "open"
    );

  }
);

document
  .querySelectorAll(
    ".nav-links a"
  )
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove(
            "open"
          );

        }
      );

    }
  );


/* -------------------
   SCROLL ANIMATION
-------------------- */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );

document
  .querySelectorAll(
    ".reveal"
  )
  .forEach(
    element => {

      observer.observe(
        element
      );

    }
  );


/* -------------------
   REASSURANCE ENVELOPE
-------------------- */

envelope.addEventListener(
  "click",
  () => {

    envelope.classList.toggle(
      "open"
    );

    reassurance.classList.toggle(
      "open"
    );

    createHeartBurst(
      8
    );

  }
);


/* -------------------
   RANDOM LOVE REASONS
-------------------- */

const reasons = [

  "I love the way you care.",

  "I love your heart.",

  "I love how you support me.",

  "I love your strength.",

  "I love our little moments.",

  "I love your smile.",

  "I love dreaming about our future.",

  "I love how you make ordinary days special.",

  "I love how deeply you love.",

  "I love you simply because you're you."

];


loveButton.addEventListener(
  "click",
  () => {

    const random =
      Math.floor(
        Math.random()
        *
        reasons.length
      );

    showToast(
      reasons[random]
      +
      " ❤️"
    );

    createHeartBurst(
      6
    );

  }
);


function showToast(
  message
) {

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2600
    );

}


/* -------------------
   FINAL MODAL
-------------------- */

lastThing.addEventListener(
  "click",
  () => {

    modal.classList.add(
      "open"
    );

    document.body.style.overflow =
      "hidden";

    createHeartBurst(
      12
    );

  }
);


closeModal.addEventListener(
  "click",
  closeFinalModal
);


alwaysUs.addEventListener(
  "click",
  () => {

    createHeartBurst(
      15
    );

    setTimeout(
      closeFinalModal,
      500
    );

  }
);


modal.addEventListener(
  "click",
  event => {

    if (
      event.target === modal
    ) {

      closeFinalModal();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeFinalModal();

    }

  }
);


function closeFinalModal() {

  modal.classList.remove(
    "open"
  );

  document.body.style.overflow =
    "";

}


/* -------------------
   PETALS
-------------------- */

function createPetal() {

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    return;

  }

  const petal =
    document.createElement(
      "span"
    );

  petal.classList.add(
    "petal"
  );

  petal.style.left =
    Math.random()
    *
    100
    +
    "vw";

  petal.style.animationDuration =
    8
    +
    Math.random()
    *
    7
    +
    "s";

  petal.style.setProperty(
    "--drift",
    (
      Math.random()
      *
      160
      -
      80
    )
    +
    "px"
  );

  petals.appendChild(
    petal
  );

  setTimeout(
    () => {

      petal.remove();

    },
    16000
  );

}


setInterval(
  createPetal,
  1800
);


/* -------------------
   HEART BURST
-------------------- */

function createHeartBurst(
  amount
) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement(
        "div"
      );

    heart.textContent =
      "♥";

    heart.style.position =
      "fixed";

    heart.style.left =
      (
        50
        +
        Math.random()
        *
        20
        -
        10
      )
      +
      "vw";

    heart.style.top =
      (
        70
        +
        Math.random()
        *
        10
      )
      +
      "vh";

    heart.style.zIndex =
      "999";

    heart.style.pointerEvents =
      "none";

    heart.style.color =
      i % 2 === 0
      ?
      "#d36e86"
      :
      "#f1bdc9";

    heart.style.fontSize =
      (
        16
        +
        Math.random()
        *
        20
      )
      +
      "px";

    heart.style.transition =
      "transform 1.2s ease, opacity 1.2s ease";

    document.body.appendChild(
      heart
    );

    requestAnimationFrame(
      () => {

        heart.style.transform =
          `
            translate(
              ${
                Math.random()
                *
                100
                -
                50
              }px,
              -${
                90
                +
                Math.random()
                *
                90
              }px
            )
            scale(
              ${
                1
                +
                Math.random()
              }
            )
          `;

        heart.style.opacity =
          "0";

      }
    );

    setTimeout(
      () => {

        heart.remove();

      },
      1300
    );

  }

}