var btn = document.getElementById("changeImg");

btn.addEventListener("click", (e) => {
    var img = btn.previousElementSibling;
    if (img.src.includes("1.jpeg")) {
        img.src = "img/2.jpeg";
    } else {
        img.src = "img/1.jpeg";
    }
});