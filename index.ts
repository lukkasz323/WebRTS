import { Game } from "./game/game.js";

const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
const game = new Game();
game.run(canvas);