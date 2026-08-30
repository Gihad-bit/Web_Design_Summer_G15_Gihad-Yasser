var courses = ["html", "css", "js"];
var course = prompt("Enter course name");
  if (courses.includes(course)) {
    console.log("Found");
  } else {
    courses.push(course);
    console.log(courses);
  }