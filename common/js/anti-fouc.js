document.body.style.opacity = 0;
window.addEventListener("load", function(){
    window.requestAnimationFrame(function(){
        document.body.style.opacity = 1;
    });
})
