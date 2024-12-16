function Random () {
    UserRandom = Choices._pickRandom()
    if (UserRandom == "Rock") {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (UserRandom == "Paper") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    } else if (UserRandom == "Scissors") {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
function Reset () {
    Hearts = 3
    basic.clearScreen()
    basic.showString("Reset!")
}
function ShowScore () {
    basic.showNumber(Hearts)
}
let UserRandom = ""
let Choices: string[] = []
let Hearts = 0
Hearts = 3
Choices = ["Rock", "Paper", "Scissors"]
while (true) {
    if (Hearts <= 0) {
        basic.showIcon(IconNames.Sad)
        Reset()
    }
    if (input.buttonIsPressed(Button.A)) {
        Random()
    } else if (input.buttonIsPressed(Button.B)) {
        ShowScore()
    } else if (input.isGesture(Gesture.Shake)) {
        Hearts += 0 - 1
        basic.pause(100)
        ShowScore()
    } else if (input.logoIsPressed()) {
        Reset()
    }
}
