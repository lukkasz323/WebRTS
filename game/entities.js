export class Entity {
    x;
    y;
    r;
    team;
    isSelected = false;
    isInSelectionBox = false;
    constructor(x, y, r, team) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.team = team;
    }
}
