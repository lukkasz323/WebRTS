import { Bounds, Circle } from "./types.js";

export function rectCircleColliding(rect: Bounds, circle: Circle): boolean {
    const distX = Math.abs(circle.x - rect.x - rect.w / 2);
    const distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if (distX > (rect.w / 2 + circle.r)) { return false; }
    if (distY > (rect.h / 2 + circle.r)) { return false; }

    if (distX <= (rect.w / 2)) { return true; } 
    if (distY <= (rect.h / 2)) { return true; }

    var dx = distX-rect.w / 2;
    var dy = distY-rect.h / 2;
    return (dx * dx + dy * dy) <= (circle.r * circle.r);
}