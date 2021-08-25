var convertBtn = document.getElementById('convert');
var inputUrl = document.getElementById('link');

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${inputUrl.value}`);
    sendURL(inputUrl.value);
});

function sendURL() {
    
}