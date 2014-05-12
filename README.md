Mobile Drawer Canvas
============
This is an experiment with the html5 canvas and Kinetic JS.

HTML5 canvas components for mobile web apps using Kinetic JS.
Creates high performance GUI objects without needing you to touch the canvas yourself.

To initiate a drawer(this will create a canvas width a drawer drawn off screen):
You can the slide the drawer out by calling slideOut().
```JS    
//create stage to hold your drawer
var stage = new Kinetic.Stage({
    container: 'container',
    width: window.screen.availWidth,
    height: window.screen.availHeight
});
    
//create the drawer object
var myDrawer = new Drawer({
    height: 50,
    width: 275,
    stage: stage,
    data: dummyData //feed data an array of objects. Ex: {title: "home", link: "http://www.google.com"}
});
    
//draw the drawer to the screen
myDrawer.create();
    
//slide the drawer out on click
var slideButtonOut = document.getElementById("slide-out");

slideButtonOut.addEventListener("click", function() {
    myDrawer.slideOut({ duration: 0.85, easing: "BounceEaseOut" });
});
```
