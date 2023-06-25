import { Scene } from "./scene.js";
import { update } from "./update.js";
import { draw } from "./draw.js";
import { setEvents } from "./events.js";

export class Game {
    run(canvas: HTMLCanvasElement) {
        const scene = new Scene();
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

        setInterval(() => gameLoop(scene, canvas, ctx), 1000 / 60);
        setEvents(scene, canvas);
    }
}

function gameLoop(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    update(scene);
    draw(scene, canvas, ctx);
}