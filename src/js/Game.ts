import Player from './Player'
import Asteroid from './Asteroid'

export default class Game {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private width: number = 500
  private height: number = 500
  private player: Player
  private asteroids: Asteroid[] = []

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.player = new Player()
    this.asteroids = [
      new Asteroid(50),
      new Asteroid(150),
      new Asteroid(250),
      new Asteroid(350),
      new Asteroid(450)
    ]

    document.addEventListener('keydown', this.keyDownHandler.bind(this), false)
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false)
  }

  public render(): void {
    this.player.draw(this.ctx)
    this.updateAndDrawAsteroids()
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  private updateAndDrawAsteroids(): void {
    this.asteroids.forEach(asteroid => asteroid.update())
    this.asteroids.forEach(asteroid => asteroid.draw(this.ctx))
  }

  private addAsteroid(xCoord: number): void {
    this.asteroids.push(new Asteroid(xCoord))
  }

  private keyDownHandler(e: KeyboardEvent): void {
    if (e.keyCode === 39) {
      this.player.isMovingRight = true
    }
    if (e.keyCode === 37) {
      this.player.isMovingLeft = true
    }
  }

  private keyUpHandler(e: KeyboardEvent): void {
	if (e.keyCode === 39 && this.player.isMovingRight) {
	  this.player.stop()
	}
	if (e.keyCode === 37 && this.player.isMovingLeft) {
	  this.player.stop()
	}
      }
}
