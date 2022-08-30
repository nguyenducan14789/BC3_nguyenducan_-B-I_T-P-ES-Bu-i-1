// console.log("aaaa")


let arrColor = ["pallet", "viridian", "pewter", "cerulean", "vermilion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let renderButton = (arr) => {
    let output = "";
    for (let index = 0; index < arrColor.length; index++) {
        let color = arr[index];

        output += `
        <button class="color-button ${color}" style="background: ${color}; color: #fff;" onclick="changeColor('${color}')"></button>
        `
    }
    document.querySelector("#colorContainer").innerHTML = output;
}


window.changeColor = (arr) => {
    let output = `
    <div id="house" class="house ${arr}">
    <div class="house-base">
        <div class="house-base-detail"></div>
        <div class="house-door-wrapper">
            <div class="house-door">
                <div  class="house-door-window"></div>
                <div class="house-door-detail"></div>
            </div>
        </div>
        <div class="house-window-wrapper">
            <div class="house-window house-window-left"></div>
            <div class="house-window house-window-right"></div>
        </div>
    </div>
    <div  class="house-sandwich"></div>
    <div class="house-upper">
        <div class="house-upper-detail"></div>
        <div class="house-upper-shadow"></div>
        <div class="house-window"></div>
        <div class="house-window-wrapper">
            <div class="house-window house-window-left"></div>
            <div class="house-window house-window-right"></div>
        </div>
    </div>
    <div  class="house-roof">
        <div class="house-roof-side house-roof-side-left"></div>
        <div class="house-roof-side house-roof-side-right"></div>
        <div class="house-roof-detail"></div>
    </div>
</div>
    `;
    document.querySelector("#house").innerHTML = output;
}
renderButton(arrColor);