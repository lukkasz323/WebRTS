import { Scene } from "./scene.js";
import { rectCircleColliding } from "./utils.js";

export function update(scene: Scene) {
    // Entity selection box colliding
    for (const entity of scene.entities)
    {
        let x: number, y: number, w: number, h: number;

        const tempW = scene.mouse.x - scene.mouse.downX;
        if (tempW > 0) {
            x = scene.mouse.downX;
            w = scene.mouse.x - scene.mouse.downX;
        } else {
            x = scene.mouse.x;
            w = scene.mouse.downX - scene.mouse.x;
        }

        const tempH = scene.mouse.y - scene.mouse.downY;
        if (tempH > 0) {
            y = scene.mouse.downY;
            h = scene.mouse.y - scene.mouse.downY;
        } else {
            y = scene.mouse.y;
            h = scene.mouse.downY - scene.mouse.y;
        }

        if (scene.mouse.isDown && rectCircleColliding({x: x, y: y, w: w, h: h}, entity)) {
            entity.isInSelectionBox = true;
        }
        else {
            entity.isInSelectionBox = false;
        }
    }
}