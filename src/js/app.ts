declare var require: any
require('../css/main.css')

import Game from './Game'

class App {
  private _game: Game

  constructor(game: Game) {
    this._game = game
    this.gameLoop = this.gameLoop.bind(this)
  }

  public setup(): void {
    // Any setup that is required that only runs once before game loads goes here

    this.gameLoop()
  }

  private gameLoop(): void {
    this._game.clear()
    requestAnimationFrame(this.gameLoop)

    this._game.render()
  }
}

window.onload = () => {
  let app = new App(new Game())

  app.setup()
}
