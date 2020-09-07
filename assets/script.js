let font
let graphic

const waveInput = document.querySelector("input.wave")
const distXInput = document.querySelector("input.distx")
const distYInput = document.querySelector("input.disty")
const line1Input = document.querySelector("input.line1")
const line2Input = document.querySelector("input.line2")


function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")

}

function setup () {
    createCanvas(1200, 600)

    createCopy()
}

function draw () {
    background("#ebe2d8")
    
    const tileSize = 10

    for (let x = 0; x < 120; x = x + 1) {
        for (let y = 0; y < 60; y = y + 1) {
            const wave = waveInput.value
            const distX = distXInput.value
            const distY = distYInput.value
            const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.5) * distX
            const distortionY = sin(frameCount * wave + x * 0.5 + y * 1) * distY


            const sx = x * tileSize + distortionX
            const sy = y * tileSize + distortionY
            const sw = tileSize
            const sh = tileSize

            const dx = x * tileSize
            const dy = y * tileSize
            const dw = tileSize
            const dh = tileSize

            image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
        }
    }
}

function createCopy () {
    graphic = createGraphics(1200, 600)

    const text = line1Input.value + "\n" + line2Input.value

    graphic.fill("#ff0000")
    graphic.textSize(300)
    graphic.textAlign(CENTER, CENTER)
    graphic.textFont(font)
    graphic.textLeading(200)
    graphic.text(text, 600, 300)
}

line1Input.addEventListener("input", function () {
    createCopy()
})


line2Input.addEventListener("input", function () {
    createCopy()
})