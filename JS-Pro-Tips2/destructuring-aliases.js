// How to destructure object by aliases

const language = {
    name: "JavaScript",
    founded: 1995,
    founder: "Brandan Eich"
};
const {name: languageName, founder: founderName} = language;
console.log(languageName, founderName);