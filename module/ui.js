import { arr, rowNum, colNum } from "./map.js"
import creatDom from "./creatDom.js"
var gameDom = document.getElementsByClassName("game")[0];

function renden() {

    gameDom.innerHTML = "";
    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
            const dom = creatDom(row, col, arr[row][col])
            gameDom.appendChild(dom)
        }
    }
}
renden()