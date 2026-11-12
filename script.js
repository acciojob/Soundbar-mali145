//your JS code here. If required.
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const buttons = document.getElementById("buttons");

let currentAudio = null;

// Create buttons
sounds.forEach(function(sound) {

    const button = document.createElement("button");

    button.className = "btn";
    button.innerText = sound;

    buttons.appendChild(button);

    button.addEventListener("click", function() {

        // Stop previous sound
        stopSound();

        // Create audio
        currentAudio = new Audio(`sounds/${sound}.mp3`);

        // Play audio
        currentAudio.play();

    });

});

// Stop function
function stopSound() {

    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

}

// Create stop button
const stopButton = document.createElement("button");

stopButton.className = "stop";
stopButton.innerText = "Stop";

buttons.appendChild(stopButton);

stopButton.addEventListener("click", stopSound);