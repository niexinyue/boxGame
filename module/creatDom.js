import { deemHasWall } from "./deem.js"
/**
 * 
 * @param {0} info 把元素设为空白
 * @param {1} info 把元素设为用户
 * @param {2} info 把元素设为墙
 */


//根据不同数值，返回不同元素。
export default function(row, col, info) {
    const div = document.createElement("div")
    switch (info) {
        case 0:
            if (deemHasWall(row, col)) {
                div.classList = "target"
            }
            break;
        case 1:
            div.classList = "player";
            break;
        case 2:
            div.classList = "wall";
            break;
        case 3:
            div.classList = "box"
    }
    return div
}