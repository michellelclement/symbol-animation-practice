//Speaker waves
const tl = gsap.timeline({ defaults: { duration: 0.3 } });

gsap.set("#speaker-group", { transformOrigin: "bottom left" });

tl.fromTo(
  ".wave",
  { x: 0 },
  { x: 20, scale: 1.25, opacity: 0.5, stagger: { each: 0.1, repeat: -1, yoyo: true } }
);
