export function setEvents(scene, canvas) {
    canvas.oncontextmenu = () => false;
    canvas.onmousemove = (e) => event_onmousemove(e, scene, canvas);
    canvas.onmouseup = (e) => event_onmouseup(e, scene);
    canvas.onmousedown = (e) => event_onmousedown(e, scene);
}
function event_onmousemove(e, scene, canvas) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    scene.mouse.x = e.x - canvasBoundingClientRect.x + 1;
    scene.mouse.y = e.y - Math.floor(canvasBoundingClientRect.y);
}
function event_onmousedown(e, scene) {
    scene.mouse.isDown = true;
    scene.mouse.downX = scene.mouse.x;
    scene.mouse.downY = scene.mouse.y;
}
function event_onmouseup(e, scene) {
    scene.mouse.isDown = false;
    for (const entity of scene.entities) {
        if (entity.isInSelectionBox) {
            entity.isSelected = true;
        }
    }
}
