import { Entity } from "./entities.js";
export class Scene {
    constructor() {
        this.entities = [];
        this.entities.push(new Entity());
    }
}
