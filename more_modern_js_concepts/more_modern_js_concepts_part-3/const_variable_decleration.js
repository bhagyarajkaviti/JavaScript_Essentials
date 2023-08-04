//While declaring variables using const,
//  Initialization is mandatory
//  Once a value is initialized, then it can't be reassigned

//eg 1: Without Initialization:
const x;
x = 7;  // SyntaxError {"Const declarations require an initialization value (6:7)"}

//eg 2: Reassignment:
const a = 7;
a = 9;  // TypeError {"Assignment to constant variable."}