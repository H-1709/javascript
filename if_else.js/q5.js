// Implement a program that determines the season based on the month of the year. The program should take a month number 
// as input (1-12) and display the corresponding season: 1-3 (Winter), 4-6 (Spring), 7-9 (Summer), 10-12 (Autumn).

function findSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log("Winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Spring");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Summer");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month. Please enter a number between 1 and 12.");
    }
}
findSeason(2);  

