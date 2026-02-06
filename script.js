let clickCount = 0;

const adLinks = [
  "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556",
  "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556"
];

document.addEventListener("DOMContentLoaded", () => {
  const mainBox = document.getElementById("main");
  const successBox = document.getElementById("success");
  const claimBtn = document.getElementById("claimBtn");

  claimBtn.addEventListener("click", () => {
    if (clickCount < adLinks.length) {
      window.open(adLinks[clickCount], "_blank");
      clickCount++;

      if (clickCount === adLinks.length) {
        setTimeout(() => {
          mainBox.classList.add("hidden");
          successBox.classList.remove("hidden");
        }, 1000);
      }
    }
  });
});
