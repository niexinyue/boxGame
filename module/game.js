import moveTo, { renden, isGameOver } from "./ui.js"
//ArrowRight
renden()
window.onkeydown = function(e) {
    if (e.key == "ArrowRight") {
        moveTo("right")
        renden()
    } else if (e.key == "ArrowLeft") {
        moveTo("left")
        renden()
    } else if (e.key == "ArrowUp") {
        console.log("up")
        moveTo("up")

        renden()
    } else if (e.key == "ArrowDown") {
        moveTo("down")
        renden()
    } else {
        return
    }
    isGameOver()
}