import { Team } from "./enums"

export class Entity {
    constructor(public x: number, public y: number, public radius: number, public team: Team) {}
  }