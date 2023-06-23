import { Entity } from "./entities.js";
import { Scene } from "./scene.js";

export class Game {
    run(canvas: HTMLCanvasElement) {
        const scene = new Scene();
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

        setInterval(() => gameLoop(scene, canvas, ctx));

        canvas.onmouseup = (e) => event_onmouseup(e, scene);
        canvas.onmousedown = (e) => event_onmousedown(e, scene, canvas);
    }
}

function gameLoop(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    update(scene);
    draw(scene, canvas, ctx);
}
    
function update(scene: Scene) {
    console.log(scene.mouse);
}
    
function draw(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    // Background
    ctx.fillStyle = "#111"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Entities
    for (const entity of scene.entities) {
        ctx.fillStyle = entity.team
        ctx.arc(entity.x, entity.y, entity.radius, 0, 2 * Math.PI)
        ctx.fill(); 
    }
}

function event_onmousedown(e: MouseEvent, scene: Scene, canvas: HTMLCanvasElement) {
    const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();

    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
    scene.mouse.down = true;
}

function event_onmouseup(e: MouseEvent, scene: Scene) {
    scene.mouse.down = false;
}