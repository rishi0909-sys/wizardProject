gsap.registerPlugin(ScrollTrigger);
function page1Animation() {
  let tl = gsap.timeline();
  tl.from("nav h1,nav h4,nav button", {
    y: -30,
    duration: 0.7,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}
page1Animation()
let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#section2 .services",
    scroller:"body",
    start:"top 55%",
    end:"top -50",
    scrub:2,
  },
})
tl2.from(".services",{
  x:300,
  opacity:0,
  duration:1
})
tl2.from(".elem.line1.left",{
  opacity:0,
  x:-300,
  duration:1.5
},"2","first")
tl2.from(".elem.line1.right",{
  opacity:0,
  x: 300,
  duration:1.5
},"2","first")
tl2.from(".elem.line2.left",{
  opacity:0,
  x:-300,
  duration:1.5
},"2","second")
tl2.from(".elem.line2.right",{
  opacity:0,
  x: 300,
  duration:1.5
},"2","second")
let tl3 =gsap.timeline({
  scrollTrigger:{
    trigger:"#section3",
    scroller:"body",
    start:"top 90%",
    end:"top -50",
    scrub:2,
    // markers:true,
  },
})
tl3.from(".article",{
  y:-300,
  opacity:0,
  duration:0.8
},"0.5")
let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:".Case-Study",
    scroller:"body",
    start:"top 90%",
    end:"top -50",
    scrub:2,
  },
})
tl4.from(".Case-Study",{
  y:-200,
  duration:1.2,
  opacity:0,
},"2")
tl4.from(".spec1",{
  x:-300,
  duration:1.2,
  opacity:0
})
tl4.from(".spec2",{
  y:-300,
  duration:1.2,
  opacity:0
},"3")
tl4.from(".spec3",{
  x:300,
  duration:1.2,
  opacity:0
},"4")