import { initMouseState } from "./types.js";
export class Scene {
    mouse = initMouseState();
    entities = [];
    nextEntityIndex = 0;
    constructor() {
    }
    clearSelection() {
        for (const entity of this.entities) {
            entity.isSelected = false;
        }
    }
}
