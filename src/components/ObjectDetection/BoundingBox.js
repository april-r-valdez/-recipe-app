export const drawBox = (detections, ctx) => {
    detections.forEach(element => {
        // Get all prediction classes
        const [x, y, width, height] = element['bbox'];
        const text = element['class'];

        // Style
        const color = 'red';
        ctx.strokeStyle = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;

        // Rectangle
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
};