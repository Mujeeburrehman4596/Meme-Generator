document.getElementById('generateMeme').addEventListener('click', function() {
    const topTextInput = document.getElementById('topTextInput').value;
    const bottomTextInput = document.getElementById('bottomTextInput').value;
    const imageInput = document.getElementById('imageInput').files[0];

    const topText = document.getElementById('topText');
    const bottomText = document.getElementById('bottomText');
    const memeImage = document.getElementById('memeImage');

    // Update text
    topText.textContent = topTextInput || "Top Text";
    bottomText.textContent = bottomTextInput || "Bottom Text";

    // Update image if an image is selected
    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            memeImage.src = e.target.result;
        };
        reader.readAsDataURL(imageInput);
    }
});

document.getElementById('downloadMeme').addEventListener('click', function() {
    const memeContainer = document.getElementById('memeContainer');

    // Use html2canvas to capture the meme as an image
    html2canvas(memeContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});
