var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1;
    });
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0;
    });
    elem.addEventListener("mousemove", function (event) {
        elem.childNodes[3].style.left = event.clientX + "px";
        elem.childNodes[3].style.top = event.clientY + "px";
    });
});
