let h1=document.getElementsByClassName("main");
h1[0].addEventListener("click",(e)=>{ /// rememberrr javascript event names are always lower case dont write Click
    window.location.href="https://www.youtube.com/watch?v=Rc_i5TKdmhs"    
})
// var articles=document.getElementById("cards");
// var scroll=document.getElementsByTagName("aside")
// scroll[0].addEventListener("click",(e)=>{
//     // articles.style.transform=`translateX(100px)`;
//     //now this translate will only work oncee
//     //The issue is that you're applying a fixed translateX(100px) or translateX(-100px) transformation, but after the first click, the transform property is already set to that value. Subsequent clicks don’t add another 100px shift; they just set it again.
//     articles.classList.add("rowjs1");
//     setTimeout(()=>{
//         articles.classList.remove("rowjs1");
//     },1000)
// })
// scroll[1].addEventListener("click",(e)=>{
//     // articles.style.transform=`translateX(-100px)`;
//     articles.classList.add("rowjs2");
//     setTimeout(()=>{
//         articles.classList.remove("rowjs2");
//     },1000)
// })

//Instead of adding/removing classes for animation, modify the transform: translateX() value dynamically using JavaScript. also adding remoivng classes for animation causes multiple keyframs which slows down our website
let articles = document.getElementById("cards");
let scroll = document.getElementsByTagName("aside");

let currentTranslateX = 0; // Track current position
const moveAmount = 400; // How much to move per click

const container = document.querySelector(".imagg"); // Parent container
const maxScroll = articles.scrollWidth - container.clientWidth; // Max allowed scroll the leftover area which we can scroll
//scrollWidth is a property that returns the total width of an element's content, including the parts that are hidden due to overflow
//clientWidth is a property in JavaScript that returns the visible width of an element excluding scrollbar, border, and margin but including padding.

// articles.scrollWidth: Total width of all cards combined.
//  container.clientWidth: Width of the visible area (what the user sees)
// maxScroll: The maximum amount we can scroll before reaching the last card.

// You have a container (#cards) that holds multiple cards inside.

// clientWidth of #cards → Width of the visible portion (viewport of the slider).
// scrollWidth of #cards → Width of all cards combined (full content, even the hidden ones).



scroll[0].addEventListener("click", () => {
    if (currentTranslateX < 0) { // Prevent scrolling past the first card
        currentTranslateX += moveAmount;
        articles.style.transform = `translateX(${currentTranslateX}px)`;
    }
});

scroll[1].addEventListener("click", () => {
    if (Math.abs(currentTranslateX) < maxScroll) { // Prevent scrolling past last card
        currentTranslateX -= moveAmount;
        articles.style.transform = `translateX(${currentTranslateX}px)`;
    }
});



//now we also wanna add resitrictions to scrolling left and right that To prevent scrolling beyond the first or last card  
      //Check the container's width (cards) and the parent container's width (imagg).
      // Restrict translation if you're at the start (0px) or at the maximum allowed negative translation.
        
       // Clicking left arrow (<) moves right, stops at first card.
       //  Clicking right arrow (>) moves left, stops at last card.
       //  No infinite scrolling beyond available cards!

// How This Works
    //     maxScroll: Calculates the maximum allowed translation.
    //    Left Arrow Restriction (<): Prevents moving right if at the first card (currentTranslateX >= 0).
    //    Right Arrow Restriction (>): Prevents moving left if at the last card (Math.abs(currentTranslateX) >= maxScroll). maxsroll stores negative value