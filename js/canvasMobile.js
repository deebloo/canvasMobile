function Drawer(opts) {
  this.height = opts.height;
  this.width = opts.width;
  this.stage = opts.stage;

  var drawerLayer;

  this.create = function() {
    drawerLayer = new Kinetic.Layer();

    var drawerHeight = 0;

    for (var i = 0; i <= this.height * 10 + 1; i += this.height + 1) {
      drawerHeight += this.height + 1;

      var object = new Kinetic.Rect({
        x: 0,
        y: i,
        width: this.width,
        height: this.height,
        fill: "grey"
      });

      drawerLayer.add(object); // add the shape to the layer
    }

    drawerLayer.offsetX(this.width);

    this.stage.attrs.width = this.width;
    this.stage.attrs.height = drawerHeight;

    this.stage.add(drawerLayer);
  };

  this.slideOut = function(opts) {
    var duration = typeof opts !== "undefined" && typeof opts.duration !== "undefined" ? opts.duration : .25;
    var easing = typeof opts !== "undefined" && typeof opts.easing !== "undefined" ? opts.easing : null;

    var tween = new Kinetic.Tween({
      node: drawerLayer,
      duration: duration,
      x: this.width,
      y: 0,
      easing: Kinetic.Easings[easing]
    });

    tween.play();
  };
}