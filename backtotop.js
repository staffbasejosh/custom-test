(function waitForWrapper() {
  const target = document.querySelector(".desktop.with-contextual-toolbar.wow-header-activated.with-mega-menu #wrapper");
  if (target) {
    target.style.backgroundColor = "pink";
  } else {
    setTimeout(waitForWrapper, 100); // Try again in 100ms
  }
})();
console.log("Running script...");
