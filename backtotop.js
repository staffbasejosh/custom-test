<script>
  console.log("✅ Script loaded");

  (function waitForWrapper() {
    const target = document.querySelector(".desktop.with-contextual-toolbar.wow-header-activated.with-mega-menu #wrapper");
    if (target) {
      console.log("🎯 Found target");
      target.style.setProperty("background-color", "pink", "important");
    } else {
      console.log("🔍 Waiting for target...");
      setTimeout(waitForWrapper, 200);
    }
  })();
</script>
