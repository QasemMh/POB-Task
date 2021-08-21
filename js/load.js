let $ = function (selector) {
  return document.querySelector(selector);
};

//loading page
function loadingPage() {
  let ml4 = {};
  ml4.opacityIn = [0, 0.1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 4;
  ml4.durationIn = 500;
  ml4.durationOut = 700;
  ml4.delay = 0;

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml4 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".load",
      opacity: 0,
      duration: 500,
      easing: "easeOutExpo",
    });
}

//Run loading page
loadingPage();
//remove  Loading page after finish
setTimeout(() => {
  $(".load").style.display = "none";
}, 3700);

//Loading page progress Line
let loader = $(".loader");
let item = $(".line");
const lengthOfLine = item.dataset.line;
let counter = 0;
let x = setInterval(run, 35);

function run() {
  counter++;
  loader.innerHTML = counter + "%";
  item.style.width = counter + "%";
  if (counter >= lengthOfLine) {
    clearInterval(x);
  }
}
//end
