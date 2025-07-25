document.addEventListener("DOMContentLoaded", function () {
  // Create the button
  const btn = document.createElement("div");
  btn.id = "backToTopBtn";
  btn.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/7604/7604589.png" />';
  document.body.appendChild(btn);

  // Add styles
  const css = `
    #backToTopBtn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
    }

    #backToTopBtn img {
      width: 24px;
      height: 24px;
    }

    #backToTopBtn.show {
      display: flex;
    }
  `;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);

  // Show/hide on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 15) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // Scroll to top on click
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
