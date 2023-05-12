function gretting(){
    let userName = "Sergio";

    function displayUserName(){
       return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = gretting();
console.log(g);
console.log(g());
