import { Entity } from "./entities.js";
import { Scene } from "./scene.js";

export class Game {
    run(canvas: HTMLCanvasElement) {
        const scene = new Scene();
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

        setInterval(() => gameLoop(scene, canvas, ctx), 1000 / 60);

        canvas.onmouseup = (e) => event_onmouseup(e, scene);
        canvas.onmousedown = (e) => event_onmousedown(e, scene);
        canvas.onmousemove = (e) => event_onmousemove(e, scene, canvas);
        canvas.oncontextmenu = (e) => false; 
    }
}

function gameLoop(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    update(scene);
    draw(scene, canvas, ctx);
    console.log(scene.mouse.x - scene.mouse.downX, scene.mouse.downX - scene.mouse.x);
}
    
function update(scene: Scene) {
    // Entity selection box colliding
    for (const entity of scene.entities)
    {
        let x: number, y: number, w: number, h: number;

        const tempW = scene.mouse.x - scene.mouse.downX;
        if (tempW > 0) {
            x = scene.mouse.downX;
            w = scene.mouse.x - scene.mouse.downX;
        } else {
            x = scene.mouse.x;
            w = scene.mouse.downX - scene.mouse.x;
        }

        const tempH = scene.mouse.y - scene.mouse.downY;
        if (tempH > 0) {
            y = scene.mouse.downY;
            h = scene.mouse.y - scene.mouse.downY;
        } else {
            y = scene.mouse.y;
            h = scene.mouse.downY - scene.mouse.y;
        }

        if (scene.mouse.isDown && rectCircleColliding({x: x, y: y, w: w, h: h}, entity)) {
            entity.isInSelectionBox = true;
        }
        else {
            entity.isInSelectionBox = false;
        }
    }
}
    
function draw(scene: Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    // Background
    ctx.fillStyle = "#111"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Entities
    for (const entity of scene.entities) {
        ctx.beginPath();
        ctx.arc(entity.x, entity.y, entity.r, 0, 2 * Math.PI)
        ctx.fillStyle = entity.team
        ctx.fill(); 
        if (entity.isInSelectionBox) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "white";
            ctx.stroke();
        }
    }

    // Selection box
    if (scene.mouse.isDown) {
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.strokeRect(
            scene.mouse.downX, 
            scene.mouse.downY, 
            scene.mouse.x - scene.mouse.downX,
            scene.mouse.y - scene.mouse.downY,
        );
    }
}

function event_onmousemove(e: MouseEvent, scene: Scene, canvas: HTMLCanvasElement) {
    const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();

    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}

function event_onmousedown(e: MouseEvent, scene: Scene) {
    scene.mouse.isDown = true;
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
}

function event_onmouseup(e: MouseEvent, scene: Scene) {
    scene.mouse.isDown = false;
}

export const pointCollides = (x, y, bounds) => 
    bounds.x <= x && x < bounds.x + bounds.w && 
    bounds.y <= y && y < bounds.y + bounds.h;
    
export const boundsCollide = (bounds1, bounds2) => 
    bounds1.x < bounds2.x + bounds2.w &&
    bounds1.y < bounds2.y + bounds2.h &&
    bounds1.x + bounds1.w > bounds2.x &&
    bounds1.y + bounds1.h > bounds2.y;

export const boundsOutOfGrid = (checkedBounds, gridScale) => 
    // Checks only positive coordinates!
    checkedBounds.x + checkedBounds.w > gridScale ||
    checkedBounds.y + checkedBounds.h > gridScale;

function rectCircleColliding(rect: Bounds, circle: Circle): boolean {
    const distX = Math.abs(circle.x - rect.x - rect.w / 2);
    const distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if (distX > (rect.w / 2 + circle.r)) { return false; }
    if (distY > (rect.h / 2 + circle.r)) { return false; }

    if (distX <= (rect.w / 2)) { return true; } 
    if (distY <= (rect.h / 2)) { return true; }

    var dx = distX-rect.w / 2;
    var dy = distY-rect.h / 2;
    return (dx * dx + dy * dy) <= (circle.r * circle.r);
}

type Bounds = {
    x: number,
    y: number,
    w: number,
    h: number,
};

type Circle = {
    x: number,
    y: number,
    r: number,
}