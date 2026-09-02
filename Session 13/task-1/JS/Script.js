var users = JSON.parse(localStorage.getItem("users")) || [];
users = users.filter(function(user) {
    return user.name !== "" && user.email !== "";
});
localStorage.setItem("users", JSON.stringify(users));
function createUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var user = {
        name: name,
        email: email
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
function displayUsers() {
    var usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(function(user) {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        h3.innerText = user.name;
        h4.innerText = user.email;
        div.appendChild(h3);
        div.appendChild(h4);
        div.classList.add("alert", "alert-primary");
        usersContainer.appendChild(div);
    });
}