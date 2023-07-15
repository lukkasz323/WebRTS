import { Team } from "./enums.js";
import { normalize } from "./utils.js";
export class Entity {
    x = 0;
    y = 0;
    radius = 0;
    team = Team.Blue;
    isSelected = false;
    isInSelectionBox = false;
    isMoving = false;
    acceleration = { x: 0, y: 0 };
    constructor(x, y, radius, team) {
        this.x = x;
        this.y = y;
        this.radius = radius;
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
export class Unit extends Entity {
    constructor() {
        super(0, 0, 0, Team.Blue);
    }
}
const a = new Unit();
console.log(JSON.stringify(a));
