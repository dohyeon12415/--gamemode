input.onButtonPressed(Button.AB, function () {
    Gamemode += 1
    if (Gamemode == 1) {
        basic.showString("GM1")
        input.onButtonPressed(Button.A, function () {
            Count1 += 1
                basic.showNumber(Count1)
        })
input.onButtonPressed(Button.B, function () {
            basic.showNumber(randint(1, Count1))
    Count1 = 0
    basic.pause(1200)
    basic.showNumber(Count1)
        })
    } else if (Gamemode == 2) {
        basic.showString("GM2")
        input.onButtonPressed(Button.A, function () {
            Lose2 = randint(5, 30)
        })
input.onButtonPressed(Button.B, function () {
            Count2 += 1
    basic.showNumber(Count2)
            if (Count2 == Lose2) {
                basic.showString("LOSE")
                basic.showNumber(Lose2)
                basic.pause(1000)
                Count2 = 0
            }
        })
    } else if (Gamemode == 3) {
        basic.showString("GM3")
        basic.pause(1000)
        for (let index = 0; index < 2; index++) {
            basic.showNumber(Win3)
        }
        input.onButtonPressed(Button.A, function () {
            Count3 = Count3 + randint(1, 5)
            basic.showNumber(Count3)
        })
input.onButtonPressed(Button.B, function () {
            Count3 = Count3 - randint(1, 5)
            basic.showNumber(Count3)
            if (Count3 == Win3) {
               basic.showString("WIN")
               basic.pause(1000)
               Win3 = randint(30, 70)
               Count3 = 50
                for (let index2 = 0; index2 < 2; index2++) {
                    basic.showNumber(Win3)
            }}
        })
    } else if (Gamemode == 4) {
        Win3 = randint(30, 70)
        Count3 = 50
        basic.showString("GM4")
        input.onButtonPressed(Button.A, function () {
            NUMBER1 = randint(0, 9)
            NUMBER2 = randint(1, 9)
            Mark = randint(1, 4)
            basic.showNumber(NUMBER1)
            basic.showNumber(NUMBER2)
        })
input.onButtonPressed(Button.B, function () {
            if (Mark == 1) {
                Result = NUMBER1 + NUMBER2
            } else if (Mark == 2) {
                Result = NUMBER1 - NUMBER2
            } else if (Mark == 3) {
                Result = NUMBER1 * NUMBER2
            } else {
                Result = NUMBER1 / NUMBER2
            }
    for (let index22 = 0; index22 < 2; index22++) {
        basic.showNumber(Result)
            
        }
})
    } else if (Gamemode == 5) {
        Gamemode = 0
    }
})
let Gamemode = 0
let Win3 = 0
let Count3 = 0
let NUMBER1 = 0
let NUMBER2 = 0
let Mark = 0
let Result = 0
let Count1 = 0
let Count2 = 0
basic.showString("Hi")
Gamemode = 0
let Lose2 = 1
Count3 = 50
Win3 = randint(30, 70)
