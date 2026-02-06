let clickCount = 0;
const adLinks = [
  "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556",
  "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556"
];

const mainBox = document.getElementById("main");
const successBox = document.getElementById("success");
const claimBtn = document.getElementById("claimBtn");

claimBtn.addEventListener("click", () => {
  if (clickCount < 2) {
    // Open ad in new tab reliably using user click
    window.open(adLinks[clickCount], "_blank");

    clickCount++;

    // After second click, show success automatically
    if (clickCount === 2) {
      setTimeout(() => {
        mainBox.classList.add("hidden");
        successBox.classList.remove("hidden");
      }, 1000); // 1 second delay
    }
  }
});
