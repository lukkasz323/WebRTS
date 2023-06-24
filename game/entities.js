export class Entity {
    constructor(x, y, r, team) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.team = team;
        this.isSelected = false;
        this.isInSelectionBox = false;
    }
}
