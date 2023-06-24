import { Entity } from "./entities.js";
import { Team } from "./enums.js";
export class Scene {
    constructor() {
        this.entities = [];
        this.mouse = { x: 0, y: 0, isDown: false, downX: 0, downY: 0 };
        this.entities.push(new Entity(200, 200, 16, Team.Blue));
    }
}
