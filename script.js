function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


const catImage = document.getElementById('cat-img');
const catButton = document.querySelectorAll('.nav-links');


for (let i = 0; i < catButton.length; i++) {
    catButton[i].addEventListener('click', fetchCatImage);
}


function fetchCatImage() {
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            catImage.innerHTML = `<img src="${data.file}"/>`;
        })
}


















