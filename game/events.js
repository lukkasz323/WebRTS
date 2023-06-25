import { MouseButton } from "./enums.js";
export function setEvents(scene, canvas) {
    canvas.oncontextmenu = () => false;
    canvas.onmousemove = (e) => event_onmousemove(e, scene, canvas);
    canvas.onmouseup = (e) => event_onmouseup(e, scene);
    canvas.onmousedown = (e) => event_onmousedown(e, scene);
}
function event_onmousemove(e, scene, canvas) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}
function event_onmousedown(e, scene) {
    if (e.button === MouseButton.Left) {
        scene.mouse.isButtonDown.left = true;
        scene.mouse.downX = scene.mouse.x;
        scene.mouse.downY = scene.mouse.y;
    }
    else if (e.button === MouseButton.Right) {
    }
}
function event_onmouseup(e, scene) {
    if (e.button === MouseButton.Left) {
        scene.mouse.isButtonDown.left = false;
        if (!e.shiftKey) {
            for (const entity of scene.entities) {
                entity.isSelected = false;
            }
        }
        for (const entity of scene.entities) {
            if (entity.isInSelectionBox) {
                entity.isSelected = true;
            }
        }
    }
}
