gsap.to('nav',{
    backgroundColor: 'black',
    padding: '15px 118px',
    duration: 0.5,
    scrollTrigger:{
        trigger: 'nav',
        scroller: 'body',
        start: 'top -5%',
        end:' top -6%',
        scrub: 1
    }
})

gsap.to("main",{
    backgroundColor: '#000',
    scrollTrigger:{
        scroll: 'body',
        trigger: 'main',
        start: 'top -20%',
        end: 'top -90%',
        scrub: 2
    }
})

const cursor= document.querySelector('#cursor')
const body= document.querySelector('body')

body.addEventListener("mousemove",function(dets){
    gsap.to('#cursor', {
        x: dets.x-10,
        y: dets.y-10,
        duration: 0.2
    })
    gsap.to('#cursor-blur', {
        x: dets.x - 300,
        y: dets.y - 300,
        duration: 1.2
    })
})
