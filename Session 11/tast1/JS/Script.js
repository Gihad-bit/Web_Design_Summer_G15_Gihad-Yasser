var courses = ["html", "css", "js"];
var course = prompt("Enter course name");
var index = courses.findIndex(function (item) { 
    return item === course; 
});
if (index >= 0) {
    console.log("Found");
} else {
    courses.push(course);
    console.log(courses);
}


console.log(html)
console.log(c++)