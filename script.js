let clickCount = 0;

// Ads links (2 clicks required)
const adLinks = [
  "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556",
  "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556"
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
