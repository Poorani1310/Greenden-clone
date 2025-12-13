var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menuicon");
var close = document.getElementById("close");

menu.addEventListener("click", function(){
    sidenav.style.right = 0;
});

close.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})

