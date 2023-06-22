import { Entity } from "./entities.js";
import { Team } from "./enums.js";

export class Scene {
    entities: Entity[]

    constructor() {
        this.entities = []
        this.entities.push(new Entity(32, 32, 16, Team.Blue));
    }
}