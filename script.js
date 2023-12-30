var cursor=document.querySelector(".cursor");
var blur=document.querySelector(".blur");
document.addEventListener("mousemove",function(dots){
    cursor.style.left=dots.x+"px";
    cursor.style.top=dots.y+"px";
    blur.style.top=dots.y-250+"px";
    blur.style.left=dots.x-250+"px";
})

gsap.to(".nav_content",{
    backgroundColor:"#000",
    height:"150px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav_content",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
    
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:3
    }
})

var select_h4=document.querySelectorAll(".nav_content h4");
select_h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.backgroundColor="transparent";
        cursor.style.border="1px solid white";

    

    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
       

    })

});
gsap.from(".about-us,.about_us_content",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from(".card",{
    scale:0.8,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:1,
    }

})
gsap.from(".colon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollerTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from(".colon2",{
    y:70,
    x:70,
    duration:1,
    scrollerTrigger:{
        trigger:".colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });

var h3_all=document.querySelectorAll("#f2 h3,#f3 h3,.direction");
h3_all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.backgroundColor="transparent";
        cursor.style.border="1px solid white";
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
    })

});
// var arrow=document.querySelector(".arrow");
//  arrow.addEventListener("mouseenter",function(){
//         cursor.style.scale=6;
//         cursor.style.backgroundColor="transparent";
//         cursor.style.border="1px solid white"
//     }
// )
// arrow.addEventListener("mouseleave",function(){
//     cursor.style.scale=1;
//     cursor.style.border = "0px solid #95C11E";
//     cursor.style.backgroundColor = "#95C11E";
// }
// )
var buttons=document.querySelectorAll(".buttons button");
buttons.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.backgroundColor="transparent";
        cursor.style.border="1px solid white";
        
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.backgroundColor="#95C11E";
        cursor.style.border="0px solid #95C11E";
       
    })
})



