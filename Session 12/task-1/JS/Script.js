function createUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var h4 = document.createElement("h4");

    h3.innerText = name;
    h4.innerText = email;

    div.appendChild(h3);
    div.appendChild(h4);

    div.classList.add("alert", "alert-primary");

    var divContainer = document.getElementById("divContainer");

    divContainer.appendChild(div);
}