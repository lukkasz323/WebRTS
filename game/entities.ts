import { Team } from "./enums.js"
import { Vector } from "./types.js";
import { normalize } from "./utils.js";

export class Entity {
    isSelected: boolean = false;
    isInSelectionBox: boolean = false;
    isMoving: boolean = false;
    acceleration: Vector = { x: 0, y: 0 };

    constructor(
        public x: number, 
        public y: number, 
        public r: number, 
        public team: Team,
    ) {}

    update() {
        if (this.isMoving) {
            this.x += this.acceleration.x;
            this.y += this.acceleration.y;
        }
    }

    move(x: number, y: number) {
        this.acceleration = normalize({ x, y });
        this.isMoving = true;
    }
}