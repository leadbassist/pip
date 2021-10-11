const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// 1.prompt to select media stream, 2. pass to video element, 3.then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // start PIP
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

// on load
selectMediaStream();