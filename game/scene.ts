import { Entity } from "./entities.js";
import { Team } from "./enums.js";

export class Scene {
    entities: Entity[] = [];
    mouse: MouseState = { x: 0, y: 0, isDown: false, downX: 0, downY: 0}; 

    constructor() {
        this.entities.push(new Entity(200, 200, 16, Team.Blue));
    }
}

type MouseState = {
    x: number, 
    y: number, 
    isDown: boolean, 
    downX: number, 
    downY: number, 
};