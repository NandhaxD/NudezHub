



var IMAGES = [
 "https://te.legra.ph/file/0ca5e90b88d4fb8eef549.jpg",
          "https://te.legra.ph/file/6278eff353887daddebb2.jpg",
          "https://graph.org/file/dd585189ffd3a4235f4a6.jpg",
          "https://graph.org/file/66674a8a82bfdea946849.jpg",
          "https://graph.org/file/e6191cb260b1e37e7d4d5.jpg",
          "https://graph.org/file/5500df4f42b55c22bb644.jpg",
          "https://graph.org/file/d91436f1e26a596d7ec6e.jpg",
          "https://graph.og/file/4f474f24fbc5984e9535e.jpg",
          "https://graph.org/file/b11698ff09758f1419c21.jpg",
          "https://graph.org/file/c1f6a80bdf5c88c894341.jpg",
          "https://graph.org/file/088a7154389742f8408d4.jpg",
          "https://graph.org/file/5605e7d70fbb129373f5a.jpg",
          "https://graph.org/file/94cf471de65d23ceb7970.jpg",
          "https://graph.org/file/87ccac3096c1352f1e479.jpg",
          "https://graph.org/file/5453aa234a167895cc2aa.jpg",
          "https://graph.org/file/a9f6b570a62e2652e4b25.jpg",
          "https://graph.org/file/c4502806d6812b3e358f9.jpg",
          "https://graph.org/file/6ff10a6598ab8f2b93b85.jpg",
          "https://graph.org/file/a60b1d15700794b81176f.jpg",
          "https://graph.org/file/99851fe3adcb6fed95144.jpg",
          "https://graph.org/file/51c2162407d7c3ee5fd1d.jpg",
          "https://graph.org/file/3c49e94613fa521c43b23.jpg",
          "https://graph.org/file/92ff8235464bae00969be.jpg",
          "https://graph.org/file/2965a4e0acee2b8809aa9.jpg",
          "https://graph.org/file/faa350b61d7477fe7caa3.jpg",
          "https://graph.org/file/d074ae3453b9bfb86ff5c.jpg",
          "https://graph.org/file/41fb44ca09cef382e0cca.jpg",
          "https://graph.org/file/a46a5f01ffabc1cb60b58.jpg",
          "https://graph.org/file/3ebe28b1499b0950adb5d.jpg",
          "https://graph.org/file/291ae4ca58eea370042a5.jpg",
          "https://graph.org/file/834dea05eb803abe7ba34.jpg",
          "https://graph.org/file/3634d9ad192c418077912.jpg",
          "https://graph.org/file/beb529ae5d7d8a5aa224f.jpg",
          "https://graph.org/file/10aef6c9d02a35a03c0f9.jpg",
          "https://graph.org/file/f3348aadab3f52485734f.jpg",
          "https://graph.org/file/b6446e30f1a52ee45fdad.jpg",
          "https://graph.org/file/808497f62b3cdaf81005b.jpg",
          "https://graph.org/file/a052438e354d703fd684d.jpg",
          "https://graph.org/file/589203cab2af2627d1dc2.jpg",
          "https://graph.org/file/54ae0961b204ec76495b6.jpg",
          "https://graph.org/file/db6c256958bcdd37aa037.jpg",
          "https://graph.org/file/752137643c3e712270fdc.jpg",
          "https://graph.org/file/14203c880c8b11c0adc9a.jpg",
          "https://graph.org/file/7ebc34698bfa1d586a7f6.jpg",
          "https://graph.org/file/5655efc66810592e6c604.jpg",
          "https://graph.org/file/e576103c0998477fdf297.jpg",
          "https://graph.org/file/e576103c0998477fdf297.jpg",
          "https://graph.org/file/17857d752288d1045e080.jpg",
          "https://graph.org/file/f44c47d8f054b879815c8.jpg",
          "https://graph.org/file/24f29bde75317c21b1495.jpg",
          "https://graph.org/file/4ad8b51bb10e38e2c35d2.jpg",
          "https://graph.org/file/389bedd6f364d199178a4.jpg",
          "https://graph.org/file/ad4d5e8cecfe4514b8864.jpg",
          "https://graph.org/file/aa2706a3adef6157b9635.jpg",
          "https://graph.org/file/8b076842455540ff87cf4.jpg",
]

var imageList = document.querySelector('.image-list');
var imageLimit = document.getElementById('searchQuery');

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
    if (!imageLimit) {
        console.error('Search query input element not found');
        return;
    }

    const limit = Number(imageLimit.value);
    if (limit <= 0) {
        console.error('Invalid limit. Please enter a positive integer.');
        return;
    }

    // Clear the existing list
    imageList.innerHTML = '';

    const randomSample = getRandomSample(IMAGES, limit);
    randomSample.forEach((item, index) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `<img src="${item}" alt="Image ${index}">`;
        imageList.appendChild(newLi);
    });
}

window.onload = function() {
    document.querySelector('button').addEventListener('click', search);
}
