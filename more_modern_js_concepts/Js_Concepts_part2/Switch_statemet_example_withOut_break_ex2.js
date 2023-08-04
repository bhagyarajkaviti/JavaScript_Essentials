let a = 9;
 let b = 6;
 let operation = "add";
 switch (operation) {
    case "add":
        console.log(`a + b = ${a + b}`);
    case "sub":
        console.log(`a - b = ${a - b}`);
        break;
    default:
        console.log("Invalid operation");
 }