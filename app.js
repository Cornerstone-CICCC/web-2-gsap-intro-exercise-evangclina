//solution one timeline
const timeline = gsap.timeline({repeat:-1})

timeline.from(".box.red",{x: -200, y:-200, duration: .5, delay:.5})
        .from(".box.green", {x: 200, y:-200, duration: .5})
        .from(".box.blue", {x:200, y: 200, duration: .5})
        .from(".box.yellow", {x: -200, y:200, duration: .5})
        .to(".box.red", {borderRadius: "50%", duration: 2,  x: "100vw", left: -200, backgroundColor: "green"})
        .to(".box.green", {borderRadius: "50%", duration: 2,  y: "100vh", top: -200, backgroundColor: "blue", delay: -2})
        .to(".box.blue", {borderRadius: "50%", duration: 2,  x: 0, left:0, backgroundColor: "yellow", delay: -2})
        .to(".box.yellow", {borderRadius: "50%", duration: 2,  y: 0, top:0, backgroundColor: "red", delay: -2})
        .to(".box.red",{x: "100vw", left: 0, duration: 1})
        .to(".box.green", {x:200, duration: 1, delay: -1})
        .to(".box.blue", {x:-200, duration: 1, delay: -1})
        .to(".box.yellow", {x:-200, duration: 1, delay: -1})



// multiple timelines solution
// const redTL = gsap.timeline({repeat: -1})
// const greenTL = gsap.timeline({repeat: -1})
// const blueTL = gsap.timeline({repeat: -1})
// const yellowTL = gsap.timeline({repeat: -1})

// redTL.from(".box.red",{x: -200, y:-200, duration: .5, delay: .5})
//      .to(".box.red", {borderRadius: "50%", duration: 2,  x: "100vw", left: -200, backgroundColor: "green", delay: 2})
//      .to(".box.red",{x: "100vw", left: 0, duration: 1})
 

// greenTL.from(".box.green", {x: 200, y:-200, duration: .5, delay: 1})
//        .to(".box.green", {borderRadius: "50%", duration: 2,  y: "100vh", top: -200, backgroundColor: "blue", delay: 1.5})
//        .to(".box.green", {x:200, duration: 1})

// blueTL.from(".box.blue", {x:200, y: 200, duration: .5, delay: 1.5})
//       .to(".box.blue", {borderRadius: "50%", duration: 2,  x: 0, left:0, backgroundColor: "yellow", delay: 1})
//       .to(".box.blue", {x:-200, duration: 1})

// yellowTL.from(".box.yellow", {x: -200, y:200, duration: .5, delay: 2})
//         .to(".box.yellow", {borderRadius: "50%", duration: 2,  y: 0, top:0, backgroundColor: "red", delay: .5})
//         .to(".box.yellow", {x:-200, duration: 1})


// redTL.repeat()
// greenTL.play()
// blueTL.play()
// yellowTL.play()

