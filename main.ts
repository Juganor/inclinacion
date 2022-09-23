basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -5 && input.acceleration(Dimension.X) <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showString("NIVELADO")
    } else if (input.acceleration(Dimension.X) >= -100 && input.acceleration(Dimension.X) <= -5) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `)
        basic.showString("FALTA")
        basic.showNumber(0 - input.acceleration(Dimension.X))
    } else if (input.acceleration(Dimension.X) >= -1023 && input.acceleration(Dimension.X) < -100) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.showString("FALTA")
        basic.showNumber(0 - input.acceleration(Dimension.X))
    } else if (input.acceleration(Dimension.X) >= 5 && input.acceleration(Dimension.X) <= 100) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            `)
        basic.showString("FALTA")
        basic.showNumber(input.acceleration(Dimension.X) - 0)
    } else if (input.acceleration(Dimension.X) > 100 && input.acceleration(Dimension.X) < 1023) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.showString("FALTA")
        basic.showNumber(input.acceleration(Dimension.X) - 0)
    } else {
    	
    }
})
