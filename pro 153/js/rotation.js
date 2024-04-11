AFRAME.registerComponent("island-rotation", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.8) {
            this.data.speedOfRotation += 0.08;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.8) {
            this.data.speedOfRotation -= 0.08;
          }
        }
      });
    },
    tick: function () {
      var islandRotation = this.el.getAttribute("rotation");
  
      islandRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: islandRotation.x,
        y: islandRotation.y,
        z: islandRotation.z,
      });
    },
  });
  
  
  
  AFRAME.registerComponent("diver-rotation", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var diverRotation = this.data.speedOfRotation;
        var diverPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (diverRotation.x < 30) {
            diverRotation.x += 3.5;
            this.el.setAttribute("rotation", diverRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (diverRotation.x > -8) {
            diverRotation.x -= 3.5;
            this.el.setAttribute("rotation", diverRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (diverRotation.z < 40) {
            diverRotation.z += 3.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y < 1) {
            diverPosition.y += 0.1;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (diverRotation.z > -5) {
            diverRotation.z -= 3.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y > -2) {
            diverPosition.y -= 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
      });
    },
  });
  