function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleMenu() {
    var menu = document.getElementById('myLinks');
    if (menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

const imagesz = document.getElementById('cat-img');
const button = document.querySelectorAll('.nav-links');



let catButton = button[0]
let dogButton = button[1]
let foxButton = button[2]
let beachButton = button[3]
catButton.addEventListener('click', fetchCatImage);
dogButton.addEventListener('click', fetchDogImage);
foxButton.addEventListener('click', fetchFoxImage);
beachButton.addEventListener('click', fetchBeachImage);


// function fetchCatImage() {
//     fetch('https://aws.random.cat/meow')
//         .then(response => response.json())
//         .then(data => {
//             imagesz.innerHTML = `<img src="${data.file}"/>`;
//         })
// }

function fetchCatImage() {

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            let cats = data[0].url
            let catsImg = document.querySelector("img")
            catsImg.setAttribute('src', `${cats}`)
            console.log(data)
        })
        .catch(err => console.log(err))
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


function fetchBeachImage() {
    fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {
        imagesz.innerHTML = `
      <img class="beach-image" src="${response.url}" alt="beach image"/>
    `
    })
}


