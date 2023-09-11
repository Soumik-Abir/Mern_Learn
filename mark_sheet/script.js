function StudentMarksheet() {
    const subjects = [
        { name: 'Math', id: 'math', marks: 0 },
        { name: 'Science', id: 'science', marks: 0 },
        { name: 'English', id: 'english', marks: 0 },
        { name: 'History', id: 'history', marks: 0 },
        { name: 'Geography', id: 'geography', marks: 0 }
    ];

    function calculateDivision(percentage) {
        if (percentage >= 60) {
            return "1st Division";
        } else if (percentage >= 45) {
            return "2nd Division";
        } else if (percentage >= 30) {
            return "3rd Division";
        } else {
            return "Fail";
        }
    }

    function getMarks() {
        for (let subject of subjects) {
            let marks = parseInt(prompt(`Enter marks for ${subject.name}:`));

            if (!isNaN(marks) && marks >= 0 && marks <= 100) {
                subject.marks = marks;
            } else {
                console.log(
                    "Invalid input for marks. Please enter a number between 0 and 100."
                );
                return false;
            }
        }
        return true;
    }

    function displayResult() {
        let totalMarks = 0;

        for (let subject of subjects) {
            totalMarks += subject.marks;

            let percentage = (subject.marks / 100) * 100;
            let division = calculateDivision(percentage);

            document.getElementById(`${subject.id}Marks`).textContent = subject.marks;
            document.getElementById(`${subject.id}Percentage`).textContent = `${percentage}%`;
            document.getElementById(`${subject.id}Division`).textContent = division;
        }
    }

    return {
        getMarks: getMarks,
        displayResult: displayResult
    };
}

const student = StudentMarksheet();

if (student.getMarks()) {
    student.displayResult();
} else {
    console.log("Invalid input. Please try again.");
}




// class StudentMarksheet {
//   constructor() {
//       this.subjects = [
//           { name: 'Math', id: 'math', marks: 0 },
//           { name: 'Science', id: 'science', marks: 0 },
//           { name: 'English', id: 'english', marks: 0 },
//           { name: 'History', id: 'history', marks: 0 },
//           { name: 'Geography', id: 'geography', marks: 0 }
//       ];
//   }

//   calculateDivision(percentage) {
//       if (percentage >= 60) {
//           return "1st Division";
//       } else if (percentage >= 45) {
//           return "2nd Division";
//       } else if (percentage >= 30) {
//           return "3rd Division";
//       } else {
//           return "Fail";
//       }
//   }

//   getMarks() {
//       for (let subject of this.subjects) {
//           let marks = parseInt(prompt(`Enter marks for ${subject.name}:`));

//           if (!isNaN(marks) && marks >= 0 && marks <= 100) {
//               subject.marks = marks;
//           } else {
//               console.log(
//                   "Invalid input for marks. Please enter a number between 0 and 100."
//               );
//               return false;
//           }
//       }
//       return true;
//   }

//   displayResult() {
//       let totalMarks = 0;

//       for (let subject of this.subjects) {
//           totalMarks += subject.marks;

//           let percentage = (subject.marks / 100) * 100;
//           let division = this.calculateDivision(percentage);

//           document.getElementById(`${subject.id}Marks`).textContent = subject.marks;
//           document.getElementById(`${subject.id}Percentage`).textContent = `${percentage.toFixed(0)}%`;
//           document.getElementById(`${subject.id}Division`).textContent = division;
//       }
//   }
// }

// const student = new StudentMarksheet();

// if (student.getMarks()) {
//   student.displayResult();
// } else {
//   console.log("Invalid input. Please try again.");
// }
