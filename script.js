function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



const imagesz = document.getElementById('cat-img');
const button = document.querySelectorAll('.nav-links');



let catButton = button[0]
let dogButton = button[1]
let foxButton = button[2]
catButton.addEventListener('click', fetchCatImage);
dogButton.addEventListener('click', fetchDogImage);
foxButton.addEventListener('click', fetchFoxImage);



function fetchCatImage() {
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            imagesz.innerHTML = `<img src="${data.file}"/>`;
        })
}

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            imagesz.innerHTML = `<img src="${data.message}"/>`;
        })
}


function fetchFoxImage() {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            imagesz.innerHTML = `<img src="${data.image}"/>`;
        })
}




