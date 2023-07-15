import { Entity } from "./entities.js";
import { MouseState, initMouseState } from "./types.js";

export class Scene {
    mouse: MouseState = initMouseState();
    entities: Entity[] = [];
    nextEntityIndex: number = 0;

    constructor() {
    }

    clearSelection() {
        for (const entity of this.entities) {
            entity.isSelected = false;
        }
    }
}

