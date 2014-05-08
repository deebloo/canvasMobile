/*
** Drawer class. Accepts an object container height, width, and the appropriate states
*/
function Drawer(opts) {
  this.height = opts.height;
  this.width = opts.width;
  this.stage = opts.stage;
  this.data = opts.data;

  this.drawerOpen = false;

  // placeholder for the canvas layer
  this.drawerLayer;
}

/*
** Create method. creates and draws the drawer menu to the canvas and adds the canvas to the staage
*/
Drawer.prototype.create = function() {
  this.drawerLayer = new Kinetic.Layer(); // New layer for the drawer

  var drawerHeight = 0; // calculate the total height of the drawer

  /*
  ** var i in the food loop is set for the correct spacing for the menu items.
  ** itemCount is set to keep track of the number of times run.
  */
  var itemCount = 0;

  var layer = this.drawerLayer;

  /*
  ** Touch down and up effects.
  ** changes window location on mouse or touch uo
  */
  function mouseDownEvent() {
    this.fill('lightgrey');
    layer.draw();
  }

  function mouseUpEvent() {
    window.location = link;
    this.fill("grey");
    layer.draw();
  }

  for (var i = 0; i <= this.height * this.data.length + 1; i += this.height + 1) {
    drawerHeight += this.height + 1;

    var link = this.data[itemCount].link;

    // Create the rectangles for the drawer items
    var object = new Kinetic.Rect({
      x: 0,
      y: i,
      width: this.width,
      height: this.height,
      fill: "grey"
    });

    object.on("mousedown touchdown", mouseDownEvent);

    object.on("mouseup touchup", mouseUpEvent);

    // Create the text for the drawer items
    var text = new Kinetic.Text({
      x: 20,
      y: i + 10,
      text: this.data[itemCount].title,
      fontSize: 30,
      fontFamily: "Calibri",
      fill: "white"
    });

    layer.add(object); // add the shape to the layer
    layer.add(text);
    itemCount++;
  }

  this.drawerLayer.offsetX(this.width); // offset the drawer by the set width

  // set the canvas element to the height and width of the created drawer
  this.stage.attrs.width = this.width;
  this.stage.attrs.height = drawerHeight;

  this.stage.add(this.drawerLayer); // add the drawer to the stage
};

/*
** Slide method. Animates the drawer menu.
*/
Drawer.prototype.slideOut = function(opts) {
  /*
  ** Sets defaults for duration and easing.
  ** By default duration = 0.25s and easing = null
  */
  var duration = typeof opts !== "undefined" && typeof opts.duration !== "undefined" ? opts.duration : 0.25;
  var easing = typeof opts !== "undefined" && typeof opts.easing !== "undefined" ? opts.easing : null;

  // Options object for the drawer slide out
  var tweenOpts = {
    node: this.drawerLayer,
    duration: duration,
    y: 0,
    easing: Kinetic.Easings[easing]
  }

  // Handle whether the drawer is currently open or not
  if(this.drawerOpen === false) {
    this.drawerOpen = true;
    tweenOpts.x = this.width;
  } else {
    this.drawerOpen = false;
    tweenOpts.x = this.width - this.width - this.width;
  }

  // Create tween
  var tween = new Kinetic.Tween(tweenOpts);

  // Play tween
  tween.play();
};