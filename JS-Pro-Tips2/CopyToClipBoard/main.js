// How to copy things to clipboard

const copyToClipBoard =(str)=>{
    const element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element)
}

const handleCopy =()=>{
    let text = document.querySelector("#text");
    copyToClipBoard(text.innerText);
}