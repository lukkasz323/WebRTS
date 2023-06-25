import { rectCircleColliding } from "./utils.js";
export function update(scene) {
    // Entity selection box colliding
    for (const entity of scene.entities) {
        let x, y, w, h;
        const tempW = scene.mouse.x - scene.mouse.downX;
        if (tempW > 0) {
            x = scene.mouse.downX;
            w = tempW;
        }
        else {
            x = scene.mouse.x;
            w = -tempW;
        }
        const tempH = scene.mouse.y - scene.mouse.downY;
        if (tempH > 0) {
            y = scene.mouse.downY;
            h = tempH;
        }
        else {
            y = scene.mouse.y;
            h = -tempH;
        }
        if (scene.mouse.isDown && rectCircleColliding({ x: x, y: y, w: w, h: h }, entity)) {
            entity.isInSelectionBox = true;
        }
        else {
            entity.isInSelectionBox = false;
        }
    }
}
