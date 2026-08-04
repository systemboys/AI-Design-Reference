const customScrolls = document.querySelectorAll("[data-custom-scroll]");

customScrolls.forEach((shell) => {
  const content = shell.querySelector(".custom-content");
  const thumb = shell.querySelector(".fake-thumb");

  function updateThumb() {
    const buttonSpace = 36;
    const trackHeight = shell.clientHeight - buttonSpace;
    const maxScroll = content.scrollHeight - content.clientHeight;
    const thumbHeight = Math.max(48, trackHeight * (content.clientHeight / content.scrollHeight));
    const maxThumbTravel = trackHeight - thumbHeight;
    const ratio = maxScroll > 0 ? content.scrollTop / maxScroll : 0;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${18 + maxThumbTravel * ratio}px)`;
  }

  content.addEventListener("scroll", updateThumb, { passive: true });
  window.addEventListener("resize", updateThumb);
  updateThumb();
});
