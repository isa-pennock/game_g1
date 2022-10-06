input.onButtonPressed(Button.A, function () {
    AL.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    AL.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    AL.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    AL.change(LedSpriteProperty.Y, -1)
})
let AL: game.LedSprite = null
AL = game.createSprite(0, 2)
basic.forever(function () {
	
})
