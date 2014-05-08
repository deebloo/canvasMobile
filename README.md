Mobile Canvas
============

HTML5 canvas components for mobile web apps using Kinetic JS.
Creates high performance GUI objects without needing you to touch the canvas yourself.

To initiate a drawer(this will create a canvas width a drawer drawn off scrren):
You can the slide the drawer out by calling slideOut().

'''
var myDrawer = new Drawer({
	height: 50,
    width: 275,
    stage: stage,
    data: dummyData
});

myDrawer.create();
'''