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
    run() {
        const scene = new Scene();
        setInterval(() => __classPrivateFieldGet(this, _Game_instances, "m", _Game_gameLoop).call(this, scene));
    }
}
_Game_instances = new WeakSet(), _Game_gameLoop = function _Game_gameLoop(scene) {
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_update).call(this, scene);
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_draw).call(this, scene);
}, _Game_update = function _Game_update(scene) {
    console.log(scene);
}, _Game_draw = function _Game_draw(scene) {
    console.log(scene.debug);
};
