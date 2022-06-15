//Speaker waves

//Run speaker animation on mouseenter
const speaker = document.querySelector(".speaker-svg-container");
const tl = gsap.timeline({ defaults: { duration: 0.3 } });
gsap.set("#speaker-group", { transformOrigin: "top left" });

speaker.addEventListener("mouseenter", () => {
  tl.fromTo(
    ".wave",
    { x: 0 },
    {
      x: 10,
      y: -10,
      scale: 1.25,
      opacity: 0.5,
      stagger: { each: 0.05, repeat: 5, yoyo: true }
    }
  );
  gsap.set("#speaker", { transformOrigin: "left 75%" });
  tl.fromTo(
    "#speaker",
    { x: 0 },
    {
      scaleY: 1.1,
      yoyo: true,
      repeat: 5
    },
    "<"
  );
});

