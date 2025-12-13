var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menuicon");
var close = document.getElementById("close");

menu.addEventListener("click", function(){
    sidenav.style.right = 0;
});

close.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})

var search = document.getElementById("search");
var pdt_container = document.getElementById("pdt_container");

var h1List = pdt_container.querySelectorAll("h1")

search.addEventListener("keyup", function()
{
    var searchvalue = event.target.value.toUpperCase();
    for(count=0; count<h1List.length; count=count+1)
    {
        if(h1List[count].textContent.toUpperCase().indexOf(searchvalue) < 0)
        {
            h1List[count].parentElement.style.display = "none";
        }
        else
        {
            h1List[count].parentElement.style.display = "block";
        }
    }
})