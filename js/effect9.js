// Wrap every letter in a span
console.log("hellothere");
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
setTimeout(() => {
anime.timeline()
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  
  }); }, 1000);