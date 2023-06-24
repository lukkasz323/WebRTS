import { Team } from "./enums"

export class Entity {
    isSelected: boolean = false;
    isInSelectionBox: boolean = false;

    constructor(
        public x: number, 
        public y: number, 
        public r: number, 
        public team: Team,
    ) {}
}