input.onButtonPressed(Button.A, function () {
    PlayerADub += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    PlayersTie += 1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    PlayerBDub += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("WINS")
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showNumber(PlayerADub)
    basic.pause(2000)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.showNumber(PlayerBDub)
    basic.pause(2000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showNumber(PlayersTie)
    basic.pause(2000)
    basic.clearScreen()
})
let PlayersTie = 0
let PlayerBDub = 0
let PlayerADub = 0
PlayerADub = 0
PlayerBDub = 0
PlayersTie = 0
