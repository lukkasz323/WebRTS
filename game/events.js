import { MouseButton, Team } from "./enums.js";
import { Entity } from "./entities.js";
export function setEvents(scene, canvas) {
    document.oncontextmenu = () => false;
    document.onmousemove = (e) => event_onmousemove(e, scene, canvas);
    document.onmouseup = (e) => event_onmouseup(e, scene);
    document.onmousedown = (e) => event_onmousedown(e, scene);
}
function event_onmousemove(e, scene, canvas) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}
function event_onmousedown(e, scene) {
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
    if (e.button === MouseButton.Left) {
        scene.mouse.isButtonDown.left = true;
    }
    if (e.button === MouseButton.Right) {
        scene.mouse.isButtonDown.right = true;
        // "Move" order
        for (const entity of scene.entities) {
            if (entity.isSelected) {
                const x = scene.mouse.x - entity.x;
                const y = scene.mouse.y - entity.y;
                entity.move(x, y);
            }
        }
        // Debug
        if (e.altKey) {
            scene.entities.push(new Entity(scene.mouse.downX, scene.mouse.downY, 16, Team.Blue));
        }
    }
}
function event_onmouseup(e, scene) {
    if (e.button === MouseButton.Left) {
        scene.mouse.isButtonDown.left = false;
        // Clear selection
        if (!e.shiftKey) {
            for (const entity of scene.entities) {
                entity.isSelected = false;
            }
        }
        // Apply selection
        for (const entity of scene.entities) {
            if (entity.isInSelectionBox) {
                entity.isSelected = true;
            }
        }
    }
    else if (e.button === MouseButton.Right) {
        scene.mouse.isButtonDown.right = false;
    }
}
