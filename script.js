const imageList = document.querySelector('.image-list');
const imageLimit = document.getElementById('searchQuery');

// Function to get a random sample of size n from an array
function getRandomSample(arr, n) {
    const sample = [];
    const arrCopy = [...arr]; // create a copy of the original array
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * arrCopy.length);
        sample.push(arrCopy.splice(randomIndex, 1)[0]);
    }
    return sample;
}

function search() {
    const limit = Number(imageLimit.value);
    if (limit <= 0) {
        console.error('Invalid limit. Please enter a positive integer.');
        return;
    }

    fetch('./nude.json')
        .then(response => response.json())
        .then(data => {
            const texts = data; // assuming data is an array of strings
            const randomSample = getRandomSample(texts, limit);
            randomSample.forEach((item, index) => {
                const newLi = document.createElement('li');
                newLi.innerHTML = `<img src="${item}" alt="Image ${index}">`;
                imageList.appendChild(newLi);
            });
        })
        .catch(error => console.error('Error:', error));
}
