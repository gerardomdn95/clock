// alert("Bienvenida");

setInterval(() => {
    var currentTime = new Date().toLocaleTimeString();
    time.innerText = currentTime;
}, 1000);

function Result(x) {
    var celebration = "url('image.celebration.png')";
    var explosion = "url('image.explotion.png')";
    if(x == 1) {
        alert("Correcto");
        document.body.style.backgroundImage = celebration;
    } else {
        alert("💥💥💥💥💥💥");
        document.body.style.backgroundImage = explosion;
    }
}