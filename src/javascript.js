var audio = document.getElementById('backgroundAudio');
    var soundToggle = document.getElementById('checkboxInput');

    soundToggle.addEventListener('change', function() {
    if (soundToggle.checked) {
        audio.play();
    } else {
        audio.pause();
    }
    });