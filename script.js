//comment
//https://api.giphy.com/v1/gifs/translate?api_key=xKkoxzLGlzTGBu6bMztCXmleIcTcslSR&s=rickandmorty


//example using .then, can also use .catch to handle errors
/*const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=xKkoxzLGlzTGBu6bMztCXmleIcTcslSR&s=acid', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
});
*/
//example using async and await, both methods are used for async code
const img = document.querySelector('img');

async function getAcidGIF() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=xKkoxzLGlzTGBu6bMztCXmleIcTcslSR&s=acid', {mode: 'cors'});
    const acidData = await response.json();
        img.src = acidData.data.images.original.url;
}

getAcidGIF();


