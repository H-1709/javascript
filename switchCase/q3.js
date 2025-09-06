// Implement a program that prompts the user for their favorite programming language.Based on the input, display a 
// message indicating whether it is a compiled language,interpreted language,or an unknown language using
// a switch case statement.

function checkLanguage(lang) {
    let language = lang.toLowerCase();
    switch (language) {
        case "c":
        case "c++":
        case "java":
        case "rust":
        case "go":
            console.log("it is a compiled language.");
            break;

        case "python":
        case "javascript":
        case "ruby":
        case "php":
            console.log("it is an interpreted language.");
            break;

        default:
            console.log("Unknown language:");
    }
}
checkLanguage("Python");     
