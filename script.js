let clickCount = 0;

// Ads links (2 clicks required)
const adLinks = [
  "https://www.effectivegatecpm.com/dvxike6iw?key=cbe35442dff8973325cc02db1c66af9e",
  "https://www.effectivegatecpm.com/dvxike6iw?key=cbe35442dff8973325cc02db1c66af9e"
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

