    const wrapper = document.querySelector('.carousel-wrapper');
    const dots = document.querySelectorAll('.carousel-dot');

    let currentIndex = 0;

    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + '%';
        wrapper.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            updateDots();
        });
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        updateCarousel();
        updateDots();
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds




    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
const tl=gsap.timeline();
tl.from('.nab',{
    opacity:0,
    delay:1,
    duration:1
})
tl.from(".caro",{
    opacity:0,
    duration:1
})
tl.from('.Mainsec',{
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:".Mainsec",
        scroller:"body",
        start:"top 100%",
        end:"top -100%",
        scrub:1
    }
})
tl.from('.aboutbtn',{
    x:100,
    scrollTrigger:{
        trigger:".aboutbtn",
        scroller:"body",
        start:"top 100%",
        end:"top -100%",
        scrub:1
    }
})
tl.from('.h12',{
    scale:2,
    scrollTrigger:{
        trigger:".h12",
        scroller:"body",
        start:"top 100%",
        end:"top -100%",
        scrub:1
    }
})
tl.from('.card1',{
    scale:2,
    scrollTrigger:{
        trigger:".card1",
        scroller:"body",
        start:"top 100%",
        end:"top -30%",
        scrub:1
    }
})
tl.from('.mapfeed',{
    scale:2,
    scrollTrigger:{
        trigger:".mapfeed",
        scroller:"body",
        start:"top 100%",
        end:"top -30%",
        scrub:1
    }
})
tl.from('footer',{
    opacity:0,
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        start:"top 120%",
        end:"top -10%",
        scrub:1
    }
})