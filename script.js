let clickCount = 0;

// Ads links (2 clicks required)
const adLinks = [
  "https://www.profitableratecpmnetwork.com/wehnemb3?key=36e929074d145c402bc795798e679b4f",
  "https://www.profitableratecpmnetwork.com/zcxbzih317?key=d3f217b8171e228b55c474ac6594857c"
];

document.addEventListener("DOMContentLoaded", () => {
  const mainBox = document.getElementById("main");
  const successBox = document.getElementById("success");
  const claimBtn = document.getElementById("claimBtn");

  claimBtn.addEventListener("click", () => {
    if(clickCount < adLinks.length){
      // Open ad in new tab
      window.open(adLinks[clickCount], "_blank");
      clickCount++;

      // After 2nd click, show success
      if(clickCount === adLinks.length){
        setTimeout(() => {
          mainBox.classList.add("hidden");
          successBox.classList.remove("hidden");
        }, 1000);
      }
    }
  });
});

