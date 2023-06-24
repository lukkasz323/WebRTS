import { Scene } from "./scene.js";

export function event_onmousemove(e: MouseEvent, scene: Scene, canvas: HTMLCanvasElement) {
    const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();

    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}

export function event_onmousedown(e: MouseEvent, scene: Scene) {
    scene.mouse.isDown = true;
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
}

export function event_onmouseup(e: MouseEvent, scene: Scene) {
    scene.mouse.isDown = false;
}