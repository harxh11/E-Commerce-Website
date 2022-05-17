document.querySelector(".nxt-btn").addEventListener("click",function(){
    document.querySelector(".product-cards-container").scrollLeft += document.querySelector(".product-cards-container").getBoundingClientRect().width;
});
document.querySelector(".pre-btn").addEventListener("click",function(){
    document.querySelector(".product-cards-container").scrollLeft -= document.querySelector(".product-cards-container").getBoundingClientRect().width;
});

document.querySelector(".nxt-btn1").addEventListener("click",function(){
    document.querySelector(".product-cards-container1").scrollLeft += document.querySelector(".product-cards-container").getBoundingClientRect().width;
});
document.querySelector(".pre-btn1").addEventListener("click",function(){
    document.querySelector(".product-cards-container1").scrollLeft -= document.querySelector(".product-cards-container").getBoundingClientRect().width;
});


document.querySelector(".nxt-btn2").addEventListener("click",function(){
    document.querySelector(".product-cards-container2").scrollLeft += document.querySelector(".product-cards-container").getBoundingClientRect().width;
});
document.querySelector(".pre-btn2").addEventListener("click",function(){
    document.querySelector(".product-cards-container2").scrollLeft -= document.querySelector(".product-cards-container").getBoundingClientRect().width;
});