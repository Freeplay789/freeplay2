let clickCount = 0;

const adLink = "https://www.effectivegatecpm.com/w8grsbmi3?key=bad7a3a33307c1c056108ce6671cb556";

function handleClick() {
  clickCount++;

  if (clickCount <= 2) {
    // Sirf 2 baar ad link open
    window.open(adLink, "_blank");
  } else {
    // 3rd time congratulations screen
    document.getElementById("main").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
  }
}

function goBack() {
  clickCount = 0;
  document.getElementById("success").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
}
