$(function() {
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");

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
  var video = document.getElementById("video");

  // Trigger photo take
  video.addEventListener("click", function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  });
});
