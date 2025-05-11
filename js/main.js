// Active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function Counter(id, start, end,duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval (() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    Counter("count1", 0, 1386,3000);
    Counter("count2", 100,5585,2500);
    Counter("count3", 0, 1540,3000);
    Counter("count4", 0, 7210,3000);
});