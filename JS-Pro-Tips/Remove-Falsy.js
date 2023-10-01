// Remove falsy values from any array

const friendList = ["Aman","",NaN, "Noman",false,"Tarit",0,"Fuad"]
const friends = friendList.filter(Boolean);
console.log(friends); //[ 'Aman', 'Noman', 'Tarit', 'Fuad' ]