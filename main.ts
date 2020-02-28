controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 120))
    }
})
let list: Sprite[] = []
list = [sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c 3 3 3 3 3 3 3 3 3 3 6 6 6 . . . . . . . . 
. . . . . . c c 3 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 6 6 . . . . . . 
. . . . . c b 3 3 3 3 b b 3 3 3 3 b 5 b 3 3 3 3 3 3 b . . . . . 
. . . . e b 3 3 3 3 b 5 b 3 3 3 3 3 b 3 3 3 3 3 3 3 3 b . . . . 
. . . e b b 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 6 . . . 
. . e b 6 b b 3 3 3 3 3 3 3 3 3 b b 3 3 3 b 5 b 3 3 3 3 3 6 . . 
. . e 6 b b 5 b 3 3 3 3 3 3 3 3 b 5 b 3 3 3 b 3 3 b b 3 3 e . . 
. e 6 6 b 3 b 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3 3 b 5 b 3 3 e . 
. e 6 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b 3 3 e . 
e b 6 6 b 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b e 
e b 6 6 b b 3 3 3 b 5 b 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 b e 
f b 6 6 6 b 3 3 3 b b 3 3 3 3 3 3 3 3 3 b 5 b 3 3 3 3 3 3 3 b f 
f c b 6 6 6 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 b c f 
. f b b 6 6 6 6 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b f . 
. e f b b 6 6 6 6 6 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b f e . 
. 8 6 f c b b 6 6 6 6 6 b b b 3 3 3 3 3 3 3 3 3 3 3 b c c 6 8 8 
8 7 7 5 e f f c b b b b b b b b b b b b b b b b c f c 5 5 7 7 8 
8 7 7 5 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 6 6 7 8 
f 8 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 3 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 3 3 3 e e . 
. . f f 6 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e e . . 
. . . . f f b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e e . . . . 
. . . . . . f f e b b b b b b 3 3 3 3 3 3 3 3 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
. . . . . . . . . . . . e e 4 a a 6 6 2 e 2 e . . . . . . . . . 
. . . . . . . . . . e e 4 a a a 6 6 2 3 e 2 6 8 8 . . . . . . . 
. . . . . . . . . e 4 6 6 6 6 6 6 6 2 3 2 e 6 6 6 6 6 8 . . . . 
. . . . . . . . e 4 6 6 4 5 5 5 4 6 6 2 2 2 6 6 6 6 6 6 8 . . . 
. . . . . . . 4 4 4 8 6 4 4 4 4 4 6 6 6 6 6 6 6 6 6 6 6 8 . . . 
. . . . . . 4 a 2 2 e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . 
. . . . . 4 a 2 3 2 2 6 6 6 6 6 2 2 e 6 6 6 e e e e e 8 8 8 . . 
. . . . 4 a a 2 3 2 e 6 6 6 6 2 3 2 2 e 4 a a a a a a a 4 8 . . 
. . . 4 4 a 6 6 6 6 6 5 5 4 6 2 3 e 4 a a a a a a a a a a a 4 . 
. . . e 6 6 6 6 4 5 5 4 4 6 6 e 4 a a a a a a a a a a 4 a a 4 4 
. . e 4 6 6 6 6 4 4 4 6 6 6 e a a a a a a a a a a a a a a a a 4 
. . e a 6 6 8 6 6 6 6 6 6 e a a a a a a a a a a a a a a a a a e 
. e 4 a a 4 4 e 8 6 6 6 e a a a a a a a 4 a a a a a a a a a a e 
. e a a 4 e e e e 6 6 e a a a a a a a a a a a a a a a a a 4 a e 
. e a a e e 4 4 f e e a a a a a a a a a a a a a a a a a a a a e 
e 4 a 4 e e e e f e 4 a a a a a a a a a a a a a a a 4 a a a e . 
e a e 4 e e f f f e a a a a a a a a a a a a a a a a a a a e . . 
e a e e 4 e e f f 4 a a a a a a a a a a a a a a a a a a e . . . 
e a e e e e f f e a a a a a a a a a a a a a a a a a a e . . . . 
e a f f e f e e e a a a a a 4 a a a a a a a a a a 4 e . . . . . 
e a f f f f f f e a 4 a a a a a a a a a a 4 a a e e . . . . . . 
e a 4 e f e f f 4 a a a a a a a a a a a a a a e . . . . . . . . 
e a e e e f f e a a a a a a a a 4 a a a a e e . . . . . . . . . 
e 4 e e e f f f a a a a a a a a a a a a e . . . . . . . . . . . 
e 4 e f e f f f a a a a a a a a a a 4 e . . . . . . . . . . . . 
. e 4 e f f f e a a a a a a a a a e e . . . . . . . . . . . . . 
. e a 4 e e e e a a a 4 a a a 4 e . . . . . . . . . . . . . . . 
. . e a a 4 e e a a a a a a e e . . . . . . . . . . . . . . . . 
. . . e e a a 4 4 a a a e e . . . . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . 8 8 8 8 b b . . b b 8 8 8 8 8 . . . . . 
. . . . . . . . 8 b b 8 9 9 9 9 6 8 b 8 9 9 6 9 9 9 6 8 8 . . . 
. . . . . . . 8 b 6 6 9 9 9 9 9 6 b 6 9 9 6 9 9 9 9 9 9 9 8 . . 
. . . . . . . b 6 6 6 6 9 9 9 9 b 6 9 9 6 9 9 9 6 6 9 9 9 9 8 . 
. . . . . . 8 6 9 9 9 6 6 9 9 9 b 9 9 6 9 9 9 6 6 8 8 6 9 9 6 8 
. . . . . . 8 6 9 9 9 9 9 6 6 9 6 9 9 6 9 9 9 6 9 9 6 8 8 9 9 8 
. . . . b b 8 6 9 9 9 9 9 9 6 6 9 8 6 6 9 9 9 6 9 6 6 8 b 8 9 b 
. . . b 8 6 8 6 6 9 9 9 9 9 9 6 6 9 8 6 6 9 9 6 9 6 6 6 b b 6 b 
. . . 8 6 6 6 8 9 6 9 9 9 9 9 9 6 6 9 8 8 6 6 6 6 6 6 6 b . b . 
. . 8 9 9 9 9 9 6 9 6 6 6 9 9 9 9 6 6 9 9 6 6 6 6 6 6 8 8 . . . 
. . 8 9 9 9 9 9 9 6 9 9 9 6 6 9 9 9 6 6 9 9 9 9 6 6 8 8 9 8 . . 
. . b 6 6 6 9 9 9 9 6 6 6 9 9 6 6 9 9 9 6 9 9 9 9 9 9 9 9 8 . . 
. . 8 9 9 6 6 6 9 9 9 6 6 6 6 9 9 6 6 9 9 6 6 6 9 9 9 9 6 6 b . 
. . 8 9 9 9 9 6 6 9 9 9 6 6 6 6 9 9 6 6 9 9 9 6 6 6 6 6 6 6 b . 
. . . b 6 9 9 9 9 6 9 9 9 8 6 6 6 9 9 6 6 9 9 9 9 9 9 9 6 8 b . 
. . . 4 6 6 9 9 9 9 6 9 9 9 8 6 6 6 9 9 6 6 6 9 9 9 6 8 8 8 b . 
. . 4 6 b 6 6 6 6 9 9 6 9 9 9 8 8 6 6 6 6 6 6 6 6 6 6 6 6 b . . 
. 4 6 6 b 6 6 6 6 6 9 9 6 9 9 9 6 8 8 6 6 6 6 6 6 6 6 6 8 b . . 
. 4 6 6 6 b 1 1 6 6 6 9 9 6 6 9 9 9 6 8 8 8 6 6 6 6 8 b b . . . 
. 4 6 6 5 5 b 1 1 1 6 9 9 6 6 9 9 9 9 9 6 8 8 8 8 b b b . . . . 
. 4 4 5 5 5 5 b 1 1 1 6 9 9 6 6 6 6 9 9 9 9 9 9 6 6 b . . . . . 
. 4 4 5 5 5 5 5 b 6 1 6 8 9 9 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. 4 5 4 5 5 5 5 5 b b 1 6 8 9 9 9 6 6 6 6 6 6 6 9 9 8 . . . . . 
. 4 5 5 4 5 5 5 5 5 5 b 8 8 8 6 9 9 9 9 9 9 9 9 9 8 . . . . . . 
4 5 5 5 5 4 5 5 5 5 5 5 b b b 8 8 6 9 9 9 9 9 d 8 8 . . . . . . 
4 6 5 5 5 5 4 5 5 5 5 5 5 5 6 b b b 8 d 9 9 d 8 8 . . . . . . . 
4 6 6 5 5 5 5 4 5 5 5 5 5 6 6 6 6 6 4 8 8 8 8 . . . . . . . . . 
4 5 6 6 5 5 5 5 4 4 6 6 6 6 6 6 6 4 . . . . . . . . . . . . . . 
. 4 5 6 6 5 5 5 5 6 4 4 6 6 6 6 4 . . . . . . . . . . . . . . . 
. . 4 5 6 6 5 5 6 6 6 6 4 4 4 4 . . . . . . . . . . . . . . . . 
. . . 4 5 6 6 5 5 4 4 4 . . . . . . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . b b b . . . 
. . . . . . . . b e e 4 4 b . . 
. . . . . . b b e 3 2 e 4 a . . 
. . . . b b 4 4 e 2 2 e 4 4 a . 
. . b b 4 4 4 4 4 e e 4 4 4 a . 
b b 4 4 4 4 4 4 4 4 4 4 4 4 4 a 
b 4 4 4 d d d d 4 4 4 4 4 d d a 
b b b b b b b 3 d d d d d d 3 a 
b d 4 4 4 4 d b b b a a a a a a 
b 4 d d 4 4 4 4 4 4 4 d d d d a 
b 4 4 4 4 4 4 d 4 4 4 d d d d a 
b 4 d 4 4 4 4 4 4 4 4 4 b b b a 
b b b 3 d 4 4 4 4 4 4 4 d d b a 
. . . b b b 3 d 4 4 4 4 d d 3 a 
. . . . . . b b b b 3 d d d b a 
. . . . . . . . . . b b b a a . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . 6 6 7 7 7 7 8 
. . . . . . 8 8 8 7 7 8 8 6 8 8 
. . 8 8 8 8 c 6 6 8 8 . 8 7 8 . 
. 8 7 9 7 6 8 c 8 . . . 6 7 8 . 
8 6 7 6 6 6 6 6 c . . . 6 7 8 . 
8 6 6 6 6 6 6 6 c . . . 8 6 8 . 
8 6 8 8 6 6 6 6 8 8 8 8 c 6 8 . 
c 6 8 8 6 6 6 6 8 7 9 7 6 c 8 . 
. c 6 8 8 8 6 8 6 7 6 6 6 6 c . 
. . c 6 6 6 8 8 6 6 6 6 6 6 6 8 
. . . 8 c c 8 c 6 6 6 6 6 6 6 8 
. . . . . . . c 6 8 8 6 6 8 6 c 
. . . . . . . c 8 8 8 8 8 8 6 c 
. . . . . . . . c 8 6 6 6 6 c . 
. . . . . . . . . c c c c c . . 
`, SpriteKind.Player)]
