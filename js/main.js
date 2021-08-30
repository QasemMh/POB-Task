//NavBar:
let navbar = get(".navbar");
let menu = get(".navbar__menu");
let menuItem = document.querySelectorAll(".nav-item");
let toggle = true;

//Hide / Show Navbar
menu.addEventListener("click", hideShow2);

window.addEventListener("resize", () => {
  if (!(window.matchMedia("(max-width: 950px)").matches)) {
    navbar.classList.remove("active");
  }
 
});

function hideShow2() {
  navbar.classList.toggle("active");
}
//End NavBar

// slider:
let SliderItem, SliderCount, CurrentSlide, Next, Prev;

//get item of slider
SliderItem = Array.from(
  document.querySelectorAll(".slider-container .slider-item")
);

//slider items count
SliderCount = SliderItem.length;

//active slider
CurrentSlide = 1;

//next and prev
Next = get("#next");
Prev = get("#prev");

Next.onclick = NextSlide;
Prev.onclick = PrevSlide;

/********FUNCTIONS FOR SLIDER***********/
function NextSlide() {
  CurrentSlide < SliderCount ? CurrentSlide++ : (CurrentSlide = 1);
  TheChecker();
}
function PrevSlide() {
  CurrentSlide == 1 ? (CurrentSlide = SliderCount) : CurrentSlide--;
  TheChecker();
}

function TheChecker() {
  RemoveAllActive();

  //add active class on slider
  SliderItem[CurrentSlide - 1].classList.add("active");

  //add animation on P in active slider
  document
    .querySelectorAll(".slider .content p")
    [CurrentSlide - 1].classList.add("active");

  //Run Animation Fro active Slider
  if (CurrentSlide == 1) {
    animeTxt1();
  }
  if (CurrentSlide == 2) {
    animeTxt2();
  }
  if (CurrentSlide == 3) {
    animeTxt3();
  }
}

// unactive slide
function RemoveAllActive() {
  SliderItem.forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".slider .content p").forEach((e) => {
    e.classList.remove("active");
  });
}
//Run
TheChecker();
//change the slider every 5s.
setInterval(() => {
  NextSlide();
}, 5000);

// End Slider

//text anime. for silde 1
function animeTxt1() {
  // Wrap every letter in a span
  let textWrapper = document.querySelector(".slider-item .ml14 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml14 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
    })
    .add({
      targets: ".ml14 .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i,
    })
    .add({
      targets: ".ml14",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 3000,
    });
}

//text anime. for silde 2
function animeTxt2() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml5 .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml5 .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
    })
    .add({
      targets: ".ml5 .ampersand",
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".ml5 .letters-left",
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=300",
    })
    .add({
      targets: ".ml5 .letters-right",
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".ml5",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

//text anime. for silde 3, pure JS
function animeTxt3() {
  //Text Animation
  let text = get(".fancy");
  let strText = text.textContent;
  let splitText = strText.split("");

  text.textContent = "";
  for (let index = 0; index < splitText.length; index++) {
    text.innerHTML += `<span>${splitText[index]}</span>`;
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    let span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

//Typed JS, animation fro section 2, auto writing
const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  backSpeed: 40,
  typeSpeed: 40,
  fadeOut: true,
  loop: true,
  backDelay: 500,
  startDelay: 1000,
});

const typed2 = new Typed("#typed2", {
  stringsElement: "#typed-strings",
  backSpeed: 60,
  typeSpeed: 40,
  fadeOut: true,
  loop: true,
  backDelay: 1000,
  startDelay: 2000,
});

//
