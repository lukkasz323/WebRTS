export function normalize(vector) {
    const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    if (magnitude === 0) {
        return vector; // Avoid division by zero
    }
    return {
        x: vector.x / magnitude,
        y: vector.y / magnitude,
    };
}
export function rectCircleColliding(rect, circle) {
    const distX = Math.abs(circle.x - rect.x - rect.w / 2);
    const distY = Math.abs(circle.y - rect.y - rect.h / 2);
    if (distX > (rect.w / 2 + circle.radius)) {
        return false;
    }
    if (distY > (rect.h / 2 + circle.radius)) {
        return false;
    }
    if (distX <= (rect.w / 2)) {
        return true;
    }
    if (distY <= (rect.h / 2)) {
        return true;
    }
    var dx = distX - rect.w / 2;
    var dy = distY - rect.h / 2;
    return (dx * dx + dy * dy) <= (circle.radius * circle.radius);
}
