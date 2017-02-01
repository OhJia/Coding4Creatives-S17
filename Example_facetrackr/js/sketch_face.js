/***************************************************************************
  
  Modified code example from 
  https://github.com/auduno/clmtrackr

****************************************************************************/

/********** check and set up video/webcam **********/

// function enablestart() {
//   var startbutton = document.getElementById('startbutton');
//   startbutton.value = "start";
//   startbutton.disabled = null;
// }

var vid = document.getElementById('video');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

// check for camerasupport
if (navigator.getUserMedia) {
  // set up stream
  
  var videoSelector = {video : true};
  if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
    var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
    if (chromeVersion < 20) {
      videoSelector = "video";
    }
  };

  navigator.getUserMedia(videoSelector, function( stream ) {
    if (vid.mozCaptureStream) {
      vid.mozSrcObject = stream;
    } else {
      vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
    }
    vid.play();
  }, function() {
    //insertAltVideo(vid);
    alert("There was some problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.");
  });
} else {
  //insertAltVideo(vid);
  alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
}

//vid.addEventListener('canplay', enablestart, false);

/********** end check and set up video/webcam **********/

var ctracker = new clm.tracker();
ctracker.init(pModel);
ctracker.start(vid);


var canvasInput = document.getElementById('canvas');
var cc = canvasInput.getContext('2d');
function drawLoop() {
  requestAnimationFrame(drawLoop);
  cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
  ctracker.draw(canvasInput);
}

drawLoop();


			