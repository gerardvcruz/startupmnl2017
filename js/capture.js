$(function() {
    // Grab elements, create settings, etc.
    var video = $('#video');

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    }

    // Elements for taking the snapshot
    var canvas = $('#canvas');
    var context = canvas.getContext('2d');
    var video = $('#video');

    // Trigger photo take
    $('#snap').addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
    });
});
