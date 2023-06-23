import { Entity } from "./entities.js";
import { Team } from "./enums.js";
export class Scene {
    constructor() {
        this.entities = [];
        this.mouse = { x: 0, y: 0, down: false, downX: 0, downY: 0 };
        this.entities.push(new Entity(32, 32, 16, Team.Blue));
    }
}
