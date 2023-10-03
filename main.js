gsap.timeline({
    scrollTrigger: {
        trigger: ".gallery-container",
        start: "top top",
        end: () => innerHeight * 4,
        scrub: true,
        pin: ".gallery",
        anticipatePin: 1
    }
})
    .set(".galleryBlock:not(.centerBlock)", { autoAlpha: 0 })
    .to(".galleryBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
    .from(".gallery-layer", {
        scale: 3.333,
        ease: "none"
    })


const size = Math.max(innerWidth, innerHeight);
gsap.set('.galleryBlock', { backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})` });


const bigImg = new Image;

bigImg.addEventListener("load", function () {
    gsap.to(".center-layer .centerBlock", { autoAlpha: 1, duration: 0.5 });
});

bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
