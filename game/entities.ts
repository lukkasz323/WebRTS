import { Team } from "./enums"

export class Entity {
    x: number
    y: number
    radius: number
    team: Team

    constructor(x: number, y: number, radius: number, team: Team) {
        this.x = x
        this.y = y
        this.radius = radius
        this.team = team
    }
}