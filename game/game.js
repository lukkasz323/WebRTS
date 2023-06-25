import { Scene } from "./scene.js";
import { update } from "./update.js";
import { draw } from "./draw.js";
import { event_onmousemove, event_onmousedown, event_onmouseup } from "./events.js";
export class Game {
    run(canvas) {
        const scene = new Scene();
        const ctx = canvas.getContext("2d");
        setInterval(() => gameLoop(scene, canvas, ctx), 1000 / 60);
        canvas.onmouseup = (e) => event_onmouseup(e, scene);
        canvas.onmousedown = (e) => event_onmousedown(e, scene);
        canvas.onmousemove = (e) => event_onmousemove(e, scene, canvas);
        canvas.oncontextmenu = (e) => false;
    }
}
function gameLoop(scene, canvas, ctx) {
    update(scene);
    draw(scene, canvas, ctx);
}
