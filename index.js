// Navbar functionality

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() 
{
  mainNav.classList.toggle("active");
});

// Toggle box functionality

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) 
{
  coll[i].addEventListener("click", function() 
  {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") 
    {
      content.style.display = "none";
    } 
    else 
    {
      content.style.display = "block";
    }
  });
}