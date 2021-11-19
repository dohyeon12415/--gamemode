input.onButtonPressed(Button.AB, function () {
    Gamemode += 1
    if (Gamemode == 1) {
        basic.showString("GM1")
        input.onButtonPressed(Button.A, function () {
            Count1 += 1
        })
input.onButtonPressed(Button.B, function () {
            basic.showNumber(randint(1, Count1))
    Count1 = 0
        })
basic.forever(function () {
            basic.showNumber(Count1)
        })
    } else if (Gamemode == 2) {
        basic.showString("GM2")
        input.onButtonPressed(Button.A, function () {
            Lose2 = randint(10, 50)
        })
input.onButtonPressed(Button.B, function () {
            Count2 += 1
            if (Count2 == Lose2) {
                basic.showString("LOSE")
                Count2 = 0
            }
        })
basic.forever(function () {
            basic.showNumber(Count2)
        })
    } else if (Gamemode == 3) {
        basic.showString("GM3")
    } else if (Gamemode == 4) {
        basic.showString("GM4")
        Gamemode = 0
    }
})
let Gamemode = 0
basic.showString("Hi")
Gamemode = 0
let Lose2 = 1
let Count1 = 0
let Count2 = 0
