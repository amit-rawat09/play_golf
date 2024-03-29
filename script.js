let cursor = document.querySelector("#cursor");
let cursorblr = document.querySelector("#cursorblr");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  cursorblr.style.left = e.x - 200 + "px";
  cursorblr.style.top = e.y - 200 + "px";
});

let h4 = document.querySelectorAll("#nav h4");
h4.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #95c11e";
    cursor.style.backgroundColor = "transparent";
  });
  e.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    marker: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top  60%",
    end: "top58%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x:-70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top  55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x:70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    marker:true,
    start: "top  55%",
    end: "top 45%",
    scrub: 4,
  },
});
