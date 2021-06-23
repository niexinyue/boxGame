import { arr, rowNum, colNum } from "./map.js"
import creatDom from "./creatDom.js"
var gameDom = document.getElementsByClassName("game")[0];

export function renden() {

    gameDom.innerHTML = "";
    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
            const dom = creatDom(row, col, arr[row][col])
            gameDom.appendChild(dom)
        }
    }
}

function searchI() {
    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
            if (arr[row][col] == 1) {
                return [row, col];
            }
        }
    }
}

//n:方向，num:距离的地方的东西是什么。
function deemNext(n, num) {
    let tempA = searchI()
    let row = tempA[0],
        col = tempA[1];
    if (n == "left") {
        col -= num
    } else if (n == "right") {
        col += num
    } else if (n == "up") {
        row -= num
    } else if (n == "down") {
        row += num
    }
    return [arr[row][col], row, col]
}
export default function moveTo(posi) {
    let user = deemNext(posi, 0);
    let temp = deemNext(posi, 2);
    const nowPo = deemNext(posi, 1);
    console.log("ui posi")
    if (nowPo[0] != 2 && temp[0] == 0) {
        arr[temp[1]][temp[2]] = arr[nowPo[1]][nowPo[2]];
        arr[nowPo[1]][nowPo[2]] = 1;
        arr[user[1]][user[2]] = 0
    }
    if (nowPo[0] == 0) {
        arr[nowPo[1]][nowPo[2]] = 1;
        arr[user[1]][user[2]] = 0
    }
}
let gamediv = document.getElementsByClassName("game")[0].getElementsByTagName("div")
export function isGameOver() {
    for (let i of gamediv) {
        if (i.classList == "target") {
            return
        }
    }
    alert("you are winner")
}