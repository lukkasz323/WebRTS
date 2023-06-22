var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Game_instances, _Game_gameLoop, _Game_update, _Game_draw;
import { Scene } from "./scene.js";
export class Game {
    constructor() {
        _Game_instances.add(this);
    }
    run(canvas) {
        const scene = new Scene();
        const ctx = canvas.getContext("2d");
        setInterval(() => __classPrivateFieldGet(this, _Game_instances, "m", _Game_gameLoop).call(this, scene, canvas, ctx));
    }
}
_Game_instances = new WeakSet(), _Game_gameLoop = function _Game_gameLoop(scene, canvas, ctx) {
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_update).call(this, scene);
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_draw).call(this, scene, canvas, ctx);
}, _Game_update = function _Game_update(scene) {
}, _Game_draw = function _Game_draw(scene, canvas, ctx) {
    // Background
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Entities
    for (const entity of scene.entities) {
        ctx.fillStyle = entity.team;
        ctx.arc(entity.x, entity.y, entity.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
};
