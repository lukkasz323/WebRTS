import { Game } from "./game/game.js";
const canvas = document.getElementById("game-canvas");
const game = new Game();
game.run(canvas);
