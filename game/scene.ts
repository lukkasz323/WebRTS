import { Entity } from "./entities.js";
import { Team } from "./enums.js";

export class Scene {
    entities: Entity[] = [];
    mouse: MouseState = { x: 0, y: 0, down: false, downX: 0, downY: 0}; 

    constructor() {
        this.entities.push(new Entity(32, 32, 16, Team.Blue));
    }
}

type MouseState = {
    x: number, 
    y: number, 
    down: boolean, 
    downX: number, 
    downY: number, 
}