// Implement a function called gradeCalculator that takes a numerical score as input and returns the
//  corresponding letter grade based on the following scale: 90-100 (A), 80-89 (B), 70-79 (C), 60-69 (D), below 60 (F).


function gradeCalculator(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else if (score < 60) {
        return "F";
    } else {
        return "Invalid Score";
    }
}
console.log(gradeCalculator(95));  
console.log(gradeCalculator(85));  
console.log(gradeCalculator(72));  
console.log(gradeCalculator(66));  
console.log(gradeCalculator(40));  
