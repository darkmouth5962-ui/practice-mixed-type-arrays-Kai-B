let profile = ["Madison", 22, "Subscribed", "New York", ['Fishing', 'Running']];

console.log("User Name: " + profile[0] + "\nUser Hobby: " + profile[4][1]);

profile[1] = 23;
profile[4][2] = "Swimming";
console.log(profile);