import Coords from './Coords'

export default class Player {
  public isMovingLeft: boolean = false
  public isMovingRight: boolean = false
  private coords: Coords[] = Player.defaultCoords

  static defaultCoords = [
    { x: 250, y: 240 },
    { x: 240, y: 260 },
    { x: 260, y: 260 }
  ]

  static leftMostCoords = [
    { x: -10, y: 240 },
    { x: -20, y: 260 },
    { x: 0, y: 260 }
  ]

  static rightMostCoords = [
    { x: 510, y: 240 },
    { x: 500, y: 260 },
    { x: 520, y: 260 }
  ]

  public draw(ctx: CanvasRenderingContext2D): void {
    this.update()
    const { coords } = this
    ctx.beginPath()
    ctx.moveTo(coords[0].x, coords[0].y)
    ctx.lineTo(coords[1].x, coords[1].y)
    ctx.lineTo(coords[2].x, coords[2].y)
    ctx.closePath()
    ctx.fillStyle = 'white'
    ctx.fill()
  }

  public moveLeft(): void {
    this.isMovingRight = false
    this.isMovingLeft = true
  }

  public moveRight(): void {
    this.isMovingLeft = false
    this.isMovingRight = true
  }

  public stop(): void {
    this.isMovingLeft = false
    this.isMovingRight = false
  }

  private update(): void {
    console.log(this.coords[2])
    if (this.isMovingLeft) {
      const newCoords = this.coords.map(coord => ({ ...coord, x: coord.x - 3 }))
      this.coords = this.coords[2].x <= 0 ? Player.rightMostCoords : newCoords
    }

    if (this.isMovingRight) {
      const newCoords = this.coords.map(coord => ({ ...coord, x: coord.x + 3 }))
      this.coords = newCoords[1].x >= 500 ? Player.leftMostCoords : newCoords
    }
  }
}
