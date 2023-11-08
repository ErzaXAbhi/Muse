// Create GSAP timeline for the left div animation
const leftTimeline = gsap.timeline({ repeat: -1 });
leftTimeline.to("#leftDiv", { duration: 9, y: "100%", ease: "linear" });

// Create GSAP timeline for the right div animation
const rightTimeline = gsap.timeline({ repeat: -1 });
rightTimeline.to("#rightDiv", { duration: 9, y: "-100%", ease: "linear" });
