var five = require('johnny-five');
var board = new five.Board();
var button, led;

board.on("ready", function() {

  button = new five.Button(2);
  led = new five.Led(11); 

  board.repl.inject({
    button: button
  });

  button.on("down", function() {
    console.log("down");
    if(led.isOn) {
      led.off();
    } else {
      led.on();
    }
  });

  button.on("hold", function() {
    console.log("hold");
  });

  button.on("up", function() {
    console.log("up");
  });
});


// board.on('ready', function() {
//   var led = new five.Led(11); 
//   led.blink(500); //intervalo de 500ms
// });

// board.on("ready", function() {

//   var led = new five.Led(11);

//   led.fadeIn();

//   this.wait(5000, function() {
//     led.fadeOut();
//   });
// });

// board.on("ready", function() {

//   var led = new five.Led(11);

//   led.pulse({
//     easing: "linear",
//     duration: 3000,
//     cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
//     keyFrames: [0, 10, 0, 50, 0, 255],
//     onstop: function() {
//       console.log("Animation stopped");
//     }
//   });

//   this.wait(12000, function() {
//     led.stop().off();
//   });
// });

