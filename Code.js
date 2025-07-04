// prompt ask user input for Name, Address, Age, Class Role, and Course usi g prompt browser dialog pop up
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = Number(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// Calculate how many times to repeat the name
let repeatCount = Math.floor(age / 4);

if (course === "BSCS") {
  // once the user selected BSCS course alrt is gonas trigger
  alert("Course: BSCS");

  //Class role under BSCS
  if (classRole === "Officer") {
    alert("Role: Officer");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    alert("Role: Student");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    alert("Role: Teacher");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else {
    // If the role is not found, use a default
    alert("Role not found, using default.");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  }

} else if (course === "BSM") {
  // use esle if tosearch for the course is not found yet
  alert("Course: BSM");

  if (classRole === "Officer") {
    alert("Role: Officer");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    alert("Role: Student");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    alert("Role: Teacher");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else {
    alert("Role not found, using default.");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  }

} else if (course === "BAEL") {
  // User selected BAEL course
  alert("Course: BAEL");

  if (classRole === "Officer") {
    alert("Role: Officer");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    alert("Role: Student");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    alert("Role: Teacher");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  } else {
    alert("Role not found, using default.");
    for (let i = 0; i < repeatCount; i++) {
      console.log(name);
    }
  }

} else {
  // If the course is not recognized fallback message
  alert("Course not found.");
  console.log("Invalid course selected.");
}
