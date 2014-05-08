/*
** Drawer class. Accepts an object container height, width, and the appropriate states
*/
function Drawer(opts) {
  this.height = opts.height;
  this.width = opts.width;
  this.stage = opts.stage;
  this.data = opts.data;

  // placeholder for the canvas layer
  this.drawerLayer;
}

/*
** Create method. creates and draws the drawer menu to the canvas and adds the canvas to the staage
*/
Drawer.prototype.create = function() {
  this.drawerLayer = new Kinetic.Layer(); // New layer for the drawer

  var drawerHeight = 0; // calculate the total height of the drawer

  for (var i = 0; i <= this.height * this.data.length + 1; i += this.height + 1) {
    drawerHeight += this.height + 1;

    // Create the rectangles for the drawer items
    var object = new Kinetic.Rect({
      x: 0,
      y: i,
      width: this.width,
      height: this.height,
      fill: "grey"
    });

    var text = new Kinetic.Text({
      x: 20,
      y: i + 10,
      text: "test",
      fontSize: 30,
      fontFamily: "Calibri",
      fill: "white"
    });

    this.drawerLayer.add(object); // add the shape to the layer
    this.drawerLayer.add(text);
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
  var duration = typeof opts !== "undefined" && typeof opts.duration !== "undefined" ? opts.duration : .25;
  var easing = typeof opts !== "undefined" && typeof opts.easing !== "undefined" ? opts.easing : null;

    var tween = new Kinetic.Tween({
      node: this.drawerLayer,
      duration: duration,
      x: this.width,
      y: 0,
      easing: Kinetic.Easings[easing]
    });

    tween.play();
};