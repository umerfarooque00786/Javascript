const accountId = 12345;
let accountEmail = "umerfarooque00786@gmail.com";
var accountPassword = "12345";
accountCity = "Karachi";
let accountState;

// accountId = 2; // This will cause an error because 'const' cannot be reassigned

accountEmail = "h1@cloud@yopmail.com";
accountPassword = "098765";
accountCity = "Hyderabad";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
