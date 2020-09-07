let font

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup () {
    createCanvas(1200, 600)

    fill("#ff0000")
    textSize(300)
    
    textAlign(CENTER, CENTER)
    textFont(font)
    textLeading(200)
    text("Good\nMorning", 600, 300)
}

function draw () {

}