import { Scene } from "./scene.js";
import { update } from "./update.js";
import { draw } from "./draw.js";
import { setEvents } from "./events.js";
export class Game {
    run(canvas) {
        const scene = new Scene();
        const ctx = canvas.getContext("2d");
        setInterval(() => gameLoop(scene, canvas, ctx), 1000 / 60);
        setEvents(scene, canvas);
    }
}
function gameLoop(scene, canvas, ctx) {
    update(scene);
    draw(scene, canvas, ctx);
}
