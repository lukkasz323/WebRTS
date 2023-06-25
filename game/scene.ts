import { Entity } from "./entities.js";
import { MouseState, initMouseState } from "./types.js";

export class Scene {
    mouse: MouseState = initMouseState();
    entities: Entity[] = [];

    constructor() {
    }
}

