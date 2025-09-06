// Write a program that takes a string as input and performs different actions based on the first
// character using a switch case statement. If the first character is 'A', log "Action A performed." 
// If it is 'B', log "Action B performed." If it is 'C' or 'D', log "Action C or D performed." 
// For any other character, log "Invalid action."

function performAction(input) {
    let fCh = input.charAt(0); 

    switch (fCh) {
        case 'A':
            console.log("Action A performed.");
            break;
        case 'B':
            console.log("Action B performed.");
            break;
        case 'C':
        case 'D':
            console.log("Action C or D performed.");
            break;
        default:
            console.log("Invalid action.");
    }
}
performAction("Apple");   
