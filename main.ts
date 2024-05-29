let a = 0
let ab = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 12)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    ab = randint(1, 12)
    basic.showNumber(a * b)
})
input.onButtonPressed(Button.B, function () {
    b = randint(1, 12)
    basic.showNumber(b)
})
