import gsap from 'gsap'
import { TextPlugin, ScrollTrigger } from 'gsap/all.js';
gsap.registerPlugin(TextPlugin, ScrollTrigger)
const createCursorFollower = () => {
  const $el = document.querySelector('.cursor');

  window.addEventListener('mousemove', (e) => {
    const { target, x, y } = e;
    const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
    gsap.to($el, {
      x: x + 3,
      y: y + 3,
      duration: 0.7,
      ease: 'power4', 
      opacity: isTargetLinkOrBtn ? 0.6 : 1,
      transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
    });
  });

  document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
      duration: 0.7,
      opacity: 0,
    });
  });
};

createCursorFollower()


let tl = gsap.timeline({ repeatDelay: 0});
let t2 = gsap.timeline({ repeatDelay: 0});

tl.from('.text', {
	opacity:0,
	x:500,
})
tl.to('.text', {
	opacity:1,
	x:0,
})
t2.from('.supText', {
	x: -500,
	opacity:0,
})
t2.to('.supText', {
	opacity:1,
	x:0,

})
gsap.to('.img-1',
{
x:-30,
duration:2,
ease:'elastic',
repeat:-1,
})

gsap.to('.img-2',{
	rotate:360,
	duration:4,
	repeat:-1,
	ease:'linear',

})

gsap.to('.title-client',{
  duration:1,
  text:'Our client',
  delimiters:'',
  opacity:1,
})

gsap.to('.text-client',{
  duration:1,
  opacity:1,
  scale:1
})

gsap.to('.boxes-left',{
  y:30,
  duration:1,
  repeat:-1,
  ease:'ease',
  yoyo:true
})

gsap.to('.boxes-right',{
  y:-30,
  duration:1,
  repeat:-1,
  ease:'ease',
  yoyo:true
})


gsap.to('.circle',{
  scrollTrigger:{
    trigger:'.circle',
    start:'center center',
    scrub:1,
  },
   y:650,
    x:850,
})
gsap.to('.rectangle',{
  scrollTrigger:{
    trigger:'.rectangle',
    scrub:1,
  },
  scale:2,
})

gsap.to('.rectangle-great',{
  scrollTrigger:{
    trigger:'.rectangle-great',
    start:'center center',
    scrub:1,
  },
  rotate:360,
  xPercent:200,
  yPercent:100
  
})

let t3 = gsap.timeline({scrollTrigger:{
    trigger:'.title-great',
      start:'bottom bottom',
      end:'center center',
    scrub:1,
  }
})

t3.to('.title-great',{
opacity:1,
duration:3
})

t3.to('.text-great',{
opacity:1,
duration:3
})

t3.to('.video',{
  scale:1.1,
  rotate:3
})

let target = document.querySelector('.target')

gsap.utils.toArray('.photo').forEach(photo =>{
let hover = gsap.to(photo,{
    x:photo.dataset['transformx'],
    y:photo.dataset['transformy'],
    scale:photo.dataset['scale'],
    paused:true
    })
      target.addEventListener('mouseenter',() => {
    hover.play()
  })

    target.addEventListener('mouseleave',() => {
   hover.reverse()
  })
})

gsap.to('.slider-img',{
    x:-500,
      scrollTrigger:{
 scrub:1,
    start:'top center',
    trigger:'.slider-wrapper',
}
    
})

gsap.to('.slider-content',{
    x:700,
   scrollTrigger:{
 scrub:1,
    start:'top center',
    trigger:'.slider-wrapper',
}
})
















