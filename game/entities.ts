import { Team } from "./enums.js"
import { Vector } from "./types.js";
import { normalize } from "./utils.js";

export class Entity {
    x: number = 0;
    y: number = 0;
    radius: number = 0;
    team: Team = Team.Blue;
    isSelected: boolean = false;
    isInSelectionBox: boolean = false;
    isMoving: boolean = false;
    acceleration: Vector = { x: 0, y: 0 };

    constructor(x?, y?, radius?, team?) {
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

    move(x: number, y: number) {
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