$(function() {
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");
  // Let's mirror the video so it looks like a normal selfie cam
  video.style.cssText =
    "-moz-transform: scale(-1, 1); \
     -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); \
     transform: scale(-1, 1); filter: FlipH;";

  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });
  }

  // Elements for taking the snapshot
  var context = canvas.getContext("2d");
  context.translate(video.videoWidth, 0);
  context.scale(-1, 1);

  var video = document.getElementById("video");
  var pictures = [];

  // Trigger photo take
  video.addEventListener("click", function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    pictures.push(canvas.toDataURL('image/png'));
  });
});
