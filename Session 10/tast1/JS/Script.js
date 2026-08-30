var degree = prompt("Enter your degree");
if (degree == null || degree == "") {
    alert("Please enter your degree");
}
else if (degree >= 100) {
    console.log("Invalid degree");
}
else if (degree >= 90) {
    console.log("Excellent");
}
else if (degree >= 80) {
    console.log("Very Good");
}
else if (degree >= 70) {
    console.log("Good");
}
else {
    console.log("Failed");
}