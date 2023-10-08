// Compare two array by value

const hasSameElement = (a, b) =>{
    return a.length === b.length && a.every((v,i)=> v ===b[i])
}

console.log(hasSameElement([1,2],[1,2]))