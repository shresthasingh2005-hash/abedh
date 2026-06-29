import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Navbar scroll effect
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled')
  } else {
    navbar?.classList.remove('scrolled')
  }
})

// Setup the Scroll-Triggered Crossfade and Parallax
// The hero section is 300vh. 
// We have 3 images: img-1 (visible), img-2 (hidden), img-3 (hidden)
// Scroll 0-33%: img-1 scales up slightly
// Scroll 33-66%: img-2 fades in, img-1 scales more
// Scroll 66-100%: img-3 fades in, img-2 scales more

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1, // Smooth scrubbing
  }
})

// Setup initial state for new text blocks
gsap.set('.scroll-text-1', { y: 50, opacity: 0 })
gsap.set('.scroll-text-2', { x: 50, opacity: 0 })

// 1. Initial fade out of main hero text
tl.to('.hero-content', { opacity: 0, y: -50, duration: 1 }, 0)

// 1b. Image 1 scale
tl.to('.img-1', { scale: 1.05, duration: 2 }, 0)

// 2. Transition to Image 2 (Gold Saree)
tl.to('.img-2', { opacity: 1, duration: 1 }, 1)
tl.to('.img-1', { opacity: 0, duration: 1 }, 1) // Crossfade out previous
tl.to('.img-2', { scale: 1.05, duration: 2 }, 1)

// 2b. Bring in Text Block 1
tl.to('.scroll-text-1', { opacity: 1, y: 0, duration: 0.8 }, 1.2)
tl.to('.scroll-text-1', { opacity: 0, y: -50, duration: 0.8 }, 2.5) // Fade out later

// 3. Transition to Image 3 (Green Saree)
tl.to('.img-3', { opacity: 1, duration: 1 }, 3)
tl.to('.img-2', { opacity: 0, duration: 1 }, 3)
tl.to('.img-3', { scale: 1.05, duration: 2 }, 3)

// 3b. Bring in Text Block 2
tl.to('.scroll-text-2', { opacity: 1, x: 0, duration: 0.8 }, 3.2)
tl.to('.scroll-text-2', { opacity: 0, x: -50, duration: 0.8 }, 4.5) // Fade out at very end

