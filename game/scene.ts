import { Entity } from "./entities.js";
import { Team } from "./enums.js";
import { MouseState, type_mouseState } from "./types.js";

export class Scene {
    mouse: MouseState = type_mouseState();
    entities: Entity[] = [];
    selectedEntities: Entity[] = []

    constructor() {
        this.entities.push(new Entity(200, 200, 16, Team.Blue));
        this.entities.push(new Entity(300, 200, 16, Team.Blue));
        this.entities.push(new Entity(400, 300, 16, Team.Blue));
        this.entities.push(new Entity(500, 300, 16, Team.Blue));
    }
}

