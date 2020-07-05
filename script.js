const url = "https://api.thecatapi.com/v1/images/search"

fetch(url)

    .then(res => res.json())
    .then(convertedResponse => {
        // let body = document.querySelector('body')
        // let h1 = document.createElement('h1')
        // h1.innerHTML = convertedResponse.results[0].name
        // body.appendChild(h1)
        let navLinks = document.querySelectorAll('.nav-links')
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", handleClick)
        }
        function handleClick(e) {
            ajax_get('https://api.thecatapi.com/v1/images/search', function (data) {

                var html = '<img src="' + data[0]["url"] + '">';
                document.querySelector("#image").innerHTML = html;

            });
        }



    })
    .catch(err => {
        console.log("Something went wrong", err)
    })



function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}





