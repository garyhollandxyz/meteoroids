import Coords from './Coords'
export default class Asteroid {
  private coords: Coords
  private width: number
  private height: number

  constructor(xCoord: number) {
    this.coords = { x: xCoord, y: 0 }
  }

  public update(): void {
    this.coords.y++
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    const { coords } = this
    ctx.strokeStyle = 'white'
    ctx.fillRect(coords.x, coords.y, this.width, this.height)
  }

  public getFullCoords(): Coords[] {
    const { coords } = this
    return [
      coords,
      { x: coords.x + this.width, y: coords.y },
      { x: coords.x, y: coords.y + this.height },
      { x: coords.x + this.width, y: coords.y + this.height }
    ]
  }
}
