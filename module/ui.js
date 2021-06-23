import { arr, rowNum, colNum } from "./map.js"
import creatDom from "./creatDom.js"

function renden() {
    const gameDom = document.getElementsByClassName("game")[0];
    gameDom.innerHTML = "";
    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
            const dom = creatDom(row, col, arr[row][col])
            gameDom.appendChild(dom)
        }
    }
}
console.log(arr)