import { Scene } from "./scene.js";
export class Game {
    run(canvas) {
        const scene = new Scene();
        const ctx = canvas.getContext("2d");
        setInterval(() => gameLoop(scene, canvas, ctx), 1000 / 60);
        canvas.onmouseup = (e) => event_onmouseup(e, scene);
        canvas.onmousedown = (e) => event_onmousedown(e, scene);
        canvas.onmousemove = (e) => event_onmousemove(e, scene, canvas);
    }
}
function gameLoop(scene, canvas, ctx) {
    update(scene);
    draw(scene, canvas, ctx);
}
function update(scene) {
    console.log(1);
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
    // Drag Box
    if (scene.mouse.down) {
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.strokeRect(scene.mouse.downX, scene.mouse.downY, scene.mouse.x - scene.mouse.downX, scene.mouse.y - scene.mouse.downY);
    }
}
function event_onmousemove(e, scene, canvas) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}
function event_onmousedown(e, scene) {
    scene.mouse.down = true;
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
}
function event_onmouseup(e, scene) {
    scene.mouse.down = false;
}
