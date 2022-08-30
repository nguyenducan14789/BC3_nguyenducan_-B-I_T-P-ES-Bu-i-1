
let str = document.querySelector(".heading").innerHTML;
console.log(str);
let char = [...str];
console.log(char);
let hv = (arr) => {
    

    let output ="";
    for(let i = 0; i < arr.length; i++){
        let key = arr[i];
        output += `
        <span>${key}</span>
        `
    }
    document.querySelector("#render").innerHTML = output;
};
hv(char);