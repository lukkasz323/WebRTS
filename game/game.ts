import { Scene } from "./scene.js";

export class Game {
    run() {
        const scene = new Scene();
        setInterval(() => this.#gameLoop(scene));
    }

    #gameLoop(scene: Scene) {
        this.#update(scene);
        this.#draw(scene);
    }
    
    #update(scene: Scene) {
        console.log(scene);
    }
    
    #draw(scene: Scene) {
        console.log(scene.debug);
    }
}