function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

 
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}
locomotiveAnimation()

function page1textAnimation(){
  var alltext=document.querySelectorAll(".page1-text h2")

alltext.forEach(function(elem){
  // console.log(elem.textContent);
  var splittedtext=elem.textContent.split("")
  // console.log(splittedtext);
  var clutter=""
  splittedtext.forEach(function(dets){
    clutter += `<span>${dets}</span>`
  })
  // console.log(clutter);
  elem.innerHTML=clutter

})


gsap.from(".page1-text h2 span",{
  y:700,
  // opacity:0,
  duration:0.7,
  delay:0.2,
  stagger:0.1
})

}
page1textAnimation()

function threadstreaching(){
  var mypath=`M 10 200 Q 600 200 1190 200`

  var finalpath=`M 10 200 Q 600 200 1190 200`


  var thread= document.querySelector("#thread")

  thread.addEventListener("mousemove",function(dets){

      var threadposition= dets.y - thread.getBoundingClientRect().y
      console.log(threadposition);
    mypath=`M 10 200 Q ${dets.x} ${threadposition} 1190 200`

    gsap.to("svg path",{
      attr:{d:mypath},
      // ease:power0
      
    })
  })
  thread.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
      attr:{d:finalpath},
      ease: "elastic.out(1,0.15)",
      duration:1
    })
  })

  

}
threadstreaching()

function scrollingIncursor(){
    var cursor= document.querySelector("#cursor")
  
    document.addEventListener("mousemove",function(dets){

     gsap.to(cursor,{
        x:dets.x,
        y:dets.y
      })
    })

  var allimages= document.querySelectorAll(".card-image")
  // console.log(cursor);

  var text=""

  allimages.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    text= elem.getAttribute("data-text")

   gsap.to(cursor,{
    width:"9vw",
    height:"1.5vw"
   })
   cursor.innerHTML=` <h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5> `
    
    
   })
   elem.addEventListener("mouseleave",function(){

    gsap.to(cursor,{
      width:"1vw",
      height:"1vw"
     })
     cursor.innerHTML="<h5></h5>"


   })
  })
}
scrollingIncursor()

function threadstreaching2(){
  var mypath=`M 10 100 Q 550 100 1090 100`

  var finalpath=`M 10 100 Q 550 100 1090 100`


  var thread2= document.querySelector("#thread2")

  thread2.addEventListener("mousemove",function(dets){

      var threadposition2= dets.y - thread2.getBoundingClientRect().y
      // console.log(threadposition);
    mypath=`M 10 100 Q ${dets.x} ${threadposition2} 1090 100`

    gsap.to("#svg2 path",{
      attr:{d:mypath},
      // ease:power0
      
    })
  })
  thread2.addEventListener("mouseleave",function(){
    gsap.to("#svg2 path ",{
      attr:{d:finalpath},
      ease: "elastic.out(1,0.15)",
      duration:1
    })
  })

  

}
threadstreaching2()

function MovingImage(){

var ElementContainer= document.querySelector("#page7-container")
// console.log(ElementContainer);
ElementContainer.addEventListener("mouseenter",function(){
  gsap.to("#moving-image",{
    opacity:1
  })
})


ElementContainer.addEventListener("mouseleave",function(){
  gsap.to("#moving-image",{
    opacity:0
  })
})

var allElement=document.querySelectorAll(".page7-box")
var movingImageDiv=document.querySelector("#moving-image")
var moveimg=document.querySelector("#moving-image img")
// console.log(moveimg);

allElement.forEach(function(elem){
  // console.log( elem.getAttribute("data-image"));
  elem.addEventListener("mouseenter",function(){
    var image=elem.getAttribute("data-image")
    // moveimg.setAttribute("src",image)

    gsap.to(moveimg,{
      attr:{src:image}
    })
  })
  ElementContainer.addEventListener("mousemove",function(dets){
    gsap.to(movingImageDiv,{
      left:`${dets.x - ElementContainer.getBoundingClientRect().x}`,
      top:`${dets.y - ElementContainer.getBoundingClientRect().y}`,
      duration:2,
      // ease:power1
      
    })
    // console.log(dets.y);
  })
 
})







}
MovingImage()

function page8TextAnimation(){

  var page8Text =document.querySelectorAll(".page8-text h2")
  // console.log(page8Text);
  page8Text.forEach(function(elem){
    var clutterpage8=""
    var splittedTextpage8=elem.textContent.split("")
    splittedTextpage8.forEach(function(dets){
      clutterpage8 +=`<span>${dets}</span>`
    })
    // console.log(clutterpage8);
    elem.innerHTML=clutterpage8
  })

  gsap.from(".page8-text h2 span",{
    opacity:0,
    delay:0.5,
    duration:0.8,
    y:600,
    stagger:0.1
  })
}

page8TextAnimation()

function page10Textanimation(){

  var page10text= document.querySelector("#page10-text h2").textContent

 var splittedpage10text= page10text.split("")
 console.log(splittedpage10text);
 var clutter=""
 splittedpage10text.forEach(function(dets){
  clutter += `<span>${dets}</span>`
  // console.log(dets);
 })
 document.querySelector("#page10-text h2").innerHTML=clutter

 gsap.from("#page10-text h2 span",{
  y:400,
  opacity:0,
  duration:0.4,
  delay:0.5,
  stagger:0.1
 })
}
page10Textanimation()