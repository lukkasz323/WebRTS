import { MouseButton, Team } from "./enums.js";
import { Entity } from "./entities.js";
export function setEvents(scene, canvas) {
    document.oncontextmenu = () => false;
    document.onmousemove = (e) => event_onmousemove(e, scene, canvas);
    document.onmouseup = (e) => event_onmouseup(e, scene);
    document.onmousedown = (e) => event_onmousedown(e, scene);
    document.onkeydown = (e) => event_onkeydown(e, scene);
}
function event_onmousemove(e, scene, canvas) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}
function event_onmousedown(e, scene) {
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
    if (e.button === MouseButton.Left) {
        scene.mouse.isButtonDown.left = true;
    }
    if (e.button === MouseButton.Right) {
        scene.mouse.isButtonDown.right = true;
        // "Move" order
        for (const entity of scene.entities) {
            if (entity.isSelected) {
                const offsetX = scene.mouse.x - entity.x;
                const offsetY = scene.mouse.y - entity.y;
                entity.move(offsetX, offsetY);
            }
        }
        // Debug
        if (e.altKey) {
            scene.entities.push(new Entity(scene.mouse.downX, scene.mouse.downY, 16, Team.Blue));
        }
    }
}
function event_onmouseup(e, scene) {
    if (e.button === MouseButton.Left) {
        scene.mouse.isButtonDown.left = false;
        // Clear selection
        if (!e.shiftKey) {
            scene.clearSelection();
        }
        // Apply selection
        for (const entity of scene.entities) {
            if (entity.isInSelectionBox) {
                entity.isSelected = true;
            }
        }
    }
    else if (e.button === MouseButton.Right) {
        scene.mouse.isButtonDown.right = false;
    }
}
function event_onkeydown(e, scene) {
    if (e.code === "Space") {
        // Select next entity
        while (true) {
            const nextEntity = scene.entities[scene.nextEntityIndex];
            if (nextEntity) {
                scene.clearSelection();
                nextEntity.isSelected = true;
            }
            break;
        }
    }
    // UNFINISHED
    // if (e.code === "Delete") {
    //     const selectedEntities = scene.entities.filter(e => e.isSelected)
    //     for (const  of object) {
    //     }
    //     for (let i = 0; i < scene.entities.length; i++) {
    //         const entity = scene.entities[i];
    //     }
    // }
}
