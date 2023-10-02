// Short conditionals
const captain = "Shakib";

// Instead of doing this
if(captain === "Shakib"){
    console.log("we like him");
}

// We can use && 
captain === "Shakib" && console.log("we like him");

// And instead of doing this
if (captain !== "Shakib"){
    console.log("We want him");
}

// We can use ||
captain === "Shakib" || console.log("We want him");