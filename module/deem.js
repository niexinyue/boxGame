import { correct as cor } from "./map.js"

//判断这个位置是否有墙
//返回bool
export function deemHasWall(row, col) {
    for (value of cor) {
        if (value.col == col && value.row == row) {
            return true
        }
    }
}