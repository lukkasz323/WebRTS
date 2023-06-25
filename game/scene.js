import { Entity } from "./entities.js";
import { Team } from "./enums.js";
import { type_mouseState } from "./types.js";
export class Scene {
    mouse = type_mouseState();
    entities = [];
    selectedEntities = [];
    constructor() {
        this.entities.push(new Entity(200, 200, 16, Team.Blue));
        this.entities.push(new Entity(300, 200, 16, Team.Blue));
        this.entities.push(new Entity(400, 300, 16, Team.Blue));
        this.entities.push(new Entity(500, 300, 16, Team.Blue));
    }
}
