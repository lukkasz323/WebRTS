export function draw(scene, canvas, ctx) {
    // Background
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Entities
    for (const entity of scene.entities) {
        ctx.beginPath();
        ctx.arc(entity.x, entity.y, entity.r, 0, 2 * Math.PI);
        ctx.fillStyle = entity.team;
        ctx.fill();
        if (entity.isSelected) {
            ctx.lineWidth = 4;
            ctx.strokeStyle = "green";
            ctx.stroke();
        }
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
        ctx.strokeRect(scene.mouse.downX, scene.mouse.downY, scene.mouse.x - scene.mouse.downX, scene.mouse.y - scene.mouse.downY);
    }
}
