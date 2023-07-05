let cursor = document.querySelector('.cursor');
var btn = document.querySelector('#btn');
let tl = gsap.timeline();
window.addEventListener("mousemove" ,function(det){
    cursor.style.top = det.y + "px";
    cursor.style.left = det.x + "px";
})

btn.addEventListener('click',function(){
    tl.reverse();
})
tl.from('.wrapper ',{
    duration:3,
    scale:0.2,
    ease:'expo.easeInOut',
    opacity:0

})
tl.from('.whiteline',{
    duration:2,
    width:0,
    ease:'expo.easeInOut',

},'-=1')
tl.from('.blackcard',{
    duration:2,
    y:50,
    ease:'expo.easeInOut',
    opacity:0

})
tl.from('.main h2',{
    duration:2,
    x:50,
    ease:'expo.easeInOut',
    opacity:0
},'-=2')

tl.from('.linelm h4,#btn',{
    duration:2,
    y:30,
    x:50,
    ease:'expo.easeInOut',
    opacity:0
},'-=3')
tl.from('.linelm ,.line',{
    duration:2,
    y:30,
    ease:'expo.easeInOut',
    opacity:0
})