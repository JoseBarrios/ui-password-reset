let _hidden = 0;

const elements = document.querySelectorAll("body > *:not(.anti-fouc-exempt)");
elements.forEach(element => {
    element.style.opacity = _hidden;
})

window.addEventListener("load", function(){
    window.requestAnimationFrame(fadeinBody);
})

function fadeinBody(){
    _hidden += 0.1;
    const hasOpacity = _hidden < 1;
    elements.forEach(element => { element.style.opacity = _hidden; })
    if(hasOpacity){ window.requestAnimationFrame(fadeinBody); }
}
