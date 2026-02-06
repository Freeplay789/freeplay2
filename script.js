let clickCount = 0;
const adLink = "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556";

const mainBox = document.getElementById("main");
const successBox = document.getElementById("success");
const claimBtn = document.getElementById("claimBtn");

claimBtn.addEventListener("click", () => {
  clickCount++;

  if (clickCount <= 2) {
    // Open ad in new tab
    const newTab = window.open(adLink, "_blank");

    if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
      alert("Popup blocked! Please allow popups to claim your bonus.");
      return;
    }

    // 2-second delay after second click to show success
    if (clickCount === 2) {
      setTimeout(() => {
        mainBox.classList.add("hidden");
        successBox.classList.remove("hidden");
      }, 2000);
    }
  } else {
    mainBox.classList.add("hidden");
    successBox.classList.remove("hidden");
  }
});
