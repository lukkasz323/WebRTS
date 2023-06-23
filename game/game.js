import { Scene } from "./scene.js";
export class Game {
    run(canvas) {
        const scene = new Scene();
        const ctx = canvas.getContext("2d");
        setInterval(() => gameLoop(scene, canvas, ctx));
        canvas.onmouseup = (e) => event_onmouseup(e, scene);
        canvas.onmousedown = (e) => event_onmousedown(e, scene, canvas);
    }
}
function gameLoop(scene, canvas, ctx) {
    update(scene);
    draw(scene, canvas, ctx);
}
function update(scene) {
    console.log(scene.mouse);
}
function draw(scene, canvas, ctx) {
    // Background
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Entities
    for (const entity of scene.entities) {
        ctx.fillStyle = entity.team;
        ctx.arc(entity.x, entity.y, entity.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
function event_onmousedown(e, scene, canvas) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
    scene.mouse.down = true;
}
function event_onmouseup(e, scene) {
    scene.mouse.down = false;
}
