const tl = gsap.timeline({ defaults: { duration: 0.3 } });


gsap.set("#large-wave", { transformOrigin: "bottom left" });
gsap.set("#medium-wave", { transformOrigin: "bottom left" });
gsap.set("#small-wave", { transformOrigin: "bottom left" });
gsap.set("#speaker", { transformOrigin: "bottom left" });


tl.fromTo(
    "#small-wave",
    { x: 0 },
    {
      x: 20,
      scale: 1.25,
      yoyo: true,
      repeat: -1,
      opacity: 0.6,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
    }
  );
  tl.fromTo(
    "#medium-wave",
    { x: 0 },
    {
      x: 30,
      scale: 1.25,
      yoyo: true,
      repeat: -1,
      opacity: 0.5,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
    },
    "<"
  );
  tl.fromTo(
    "#large-wave",
    { x: 0 },
    {
      x: 40,
      scale: 1.25,
      yoyo: true,
      repeat: -1,
      opacity: 0.3,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
    },
    "<"
  );
  
  //Speaker
  gsap.set("#speaker", { transformOrigin: "bottom left" });
  tl.fromTo(
    "#speaker",
    { x: 0 },
    {
      scale: 1.1,
      yoyo: true,
      repeat: -1
    },
    "<"
  );
  