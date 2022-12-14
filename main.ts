joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    joystickbit.Vibration_Motor(100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (Shoot.get(LedSpriteProperty.Y) <= 0) {
            Shoot.delete()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Shoot: game.LedSprite = null
let Player: game.LedSprite = null
let Enemy: game.LedSprite = null
game.setLife(4)
game.setScore(0)
Enemy = game.createSprite(0, 0)
Player = game.createSprite(2, 4)
basic.forever(function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P12,
    EventBusValue.MES_DPAD_BUTTON_C_UP
    )
})
