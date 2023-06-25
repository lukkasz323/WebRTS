import { normalize } from "./utils.js";
export class Entity {
    x;
    y;
    r;
    team;
    isSelected = false;
    isInSelectionBox = false;
    isMoving = false;
    acceleration = { x: 0, y: 0 };
    constructor(x, y, r, team) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.team = team;
    }
    update() {
        if (this.isMoving) {
            this.x += this.acceleration.x;
            this.y += this.acceleration.y;
        }
    }
    move(x, y) {
        this.acceleration = normalize({ x, y });
        this.isMoving = true;
    }
}
