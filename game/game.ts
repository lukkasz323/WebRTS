import { Entity } from "./entities.js";
import { Scene } from "./scene.js";

export class Game {
    run(canvas: HTMLCanvasElement) {
        const scene = new Scene();
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        setInterval(() => this.#gameLoop(scene, canvas, ctx));
    }

    #gameLoop(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.#update(scene);
        this.#draw(scene, canvas, ctx);
    }
    
    #update(scene: Scene) {
    }
    
    #draw(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
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
}