import { Scene } from "./scene.js";

export function setEvents(scene: Scene, canvas: HTMLCanvasElement) {
    canvas.oncontextmenu = () => false; 
    canvas.onmousemove = (e) => event_onmousemove(e, scene, canvas);
    canvas.onmouseup = (e) => event_onmouseup(e, scene);
    canvas.onmousedown = (e) => event_onmousedown(e, scene);
}

function event_onmousemove(e: MouseEvent, scene: Scene, canvas: HTMLCanvasElement) {
    const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();

    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}

function event_onmousedown(e: MouseEvent, scene: Scene) {
    scene.mouse.isDown = true;
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
}
function event_onmouseup(e: MouseEvent, scene: Scene) {
    scene.mouse.isDown = false;

    for (const entity of scene.entities) {
        if (entity.isInSelectionBox) {
            entity.isSelected = true;
        }
    }
}