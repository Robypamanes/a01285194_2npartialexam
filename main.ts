let year_of_birth = 0
let count_of_baby_boom = 0
let count_of_millenial = 0
let average_year_of_birth = 0
let numbers_of_a_dice = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        year_of_birth = randint(1949, 2010)
        basic.showNumber(year_of_birth)
        if (year_of_birth >= 1949 && year_of_birth <= 1968) {
            basic.showString("Baby Boom")
            count_of_baby_boom += 1
        } else if (year_of_birth >= 1969 && year_of_birth <= 1980) {
            basic.showString("X generation")
        } else if (year_of_birth >= 1981 && year_of_birth <= 1993) {
            basic.showString("millenial")
            count_of_millenial += 1
        } else if (year_of_birth >= 1994 && year_of_birth <= 2010) {
            basic.showString("Z generation")
        }
    }
    average_year_of_birth = year_of_birth / 20
    basic.showString("average year of birth")
    basic.showNumber(average_year_of_birth)
    basic.showString("millenial")
    basic.showNumber(count_of_millenial)
    basic.showString("baby boomers")
    basic.showNumber(count_of_baby_boom)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(0)
        basic.showNumber(1)
        basic.showNumber(2)
        basic.showNumber(3)
        basic.showNumber(4)
        basic.showNumber(5)
        basic.clearScreen()
        numbers_of_a_dice = randint(1, 6)
        basic.showNumber(numbers_of_a_dice)
        if (numbers_of_a_dice == 6 || numbers_of_a_dice == 3) {
            basic.showString("win")
            music.playMelody("D D E E F F E - ", 120)
        } else if (numbers_of_a_dice == 1) {
            basic.showString("lose")
            music.playMelody("C - - - - - - - ", 120)
        } else if (numbers_of_a_dice == 2) {
            basic.showString("lose")
            music.playMelody("C - - - - - - - ", 120)
        } else if (numbers_of_a_dice == 4) {
            basic.showString("lose")
            music.playMelody("C - - - - - - - ", 120)
        } else if (numbers_of_a_dice == 5) {
            basic.showString("lose")
            music.playMelody("C - - - - - - - ", 120)
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 0
        y += 0
        for (let index = 0; index <= 4; index++) {
            led.plot(0, 0)
            basic.pause(200)
            led.plot(1, 0)
            basic.pause(200)
            led.plot(2, 0)
            basic.pause(200)
            led.plot(3, 0)
            basic.pause(200)
            led.plot(4, 0)
        }
    }
})
