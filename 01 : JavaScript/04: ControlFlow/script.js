// // if else, else-if

// if (condition) {
//   // Code to execute if the condition is true
// } else {
//   // Code to execute if the condition is false
// }

// // switch case

// switch (expression) {
//   case value1:
//     // Code to execute if expression === value1
//     break;
//   case value2:
//     // Code to execute if expression === value2
//     break;
//   // ... more case statements
//   default:
//     // Code to execute if no case matches the expression
//     break;
// }
// early return pattern

function getGrade(score) {
    if (90 <= score && score <= 100) return "A";
    else if (80 <= score && score <= 89) return "B";
    else if (70 <= score && score <= 79) return "B";
    else if (60 <= score && score <= 69) return "C";
    else if (50 <= score && score <= 59) return "D";
    else if (0 <= score && score <= 49) return "Fail";
    else return "invalid marks";
}

// rockPaperScissors logic
function rps(user, computer){
    if(user === computer) return "draw";

    if(user === "rock" && computer === "scissor") return "user";
    if(user === "paper" && computer === "rock") return "user";
    if(user === "scissor" && computer === "paper") return "user";
    
    return "computer";
}

rps("rock", "scissor");
