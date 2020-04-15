function autoCloseAds() {
  const adCloseBtn = document.querySelector(".ytp-ad-overlay-close-container");
  const adCloseVideoBtn = document.querySelector(".ytp-ad-skip-button");

  if (adCloseBtn) adCloseBtn.click();
  if (adCloseVideoBtn) adCloseVideoBtn.click();

  setTimeout(autoCloseAds, 1000);
}
autoCloseAds();
console.info("autoclosead is running");
