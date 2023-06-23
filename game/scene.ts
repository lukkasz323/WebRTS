import { Entity } from "./entities.js";
import { Team } from "./enums.js";

export class Scene {
    entities: Entity[] = [];
    mouse: {x: number, y: number, down: boolean} = {x: 0, y: 0, down: false}; 

    constructor() {
        this.entities.push(new Entity(32, 32, 16, Team.Blue));
    }
}