import Coords from './Coords'
export default class Asteroid {
  private coords: Coords

  constructor(xCoord: number) {
    this.coords = { x: xCoord, y: 0 }
  }

  public update(): void {
    this.coords.y++
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    const { coords } = this
    ctx.strokeStyle = 'white'
    ctx.fillRect(coords.x, coords.y, 10, 10)
  }
}
