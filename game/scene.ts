import { Entity } from "./entities.js";

export class Scene {
    entities: Entity[]

    constructor() {
        this.entities = []
        this.entities.push(new Entity());
    }
}