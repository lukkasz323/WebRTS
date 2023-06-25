export type Bounds = {
    x: number,
    y: number,
    w: number,
    h: number,
};

export type Circle = {
    x: number,
    y: number,
    r: number,
}

export type MouseState = ReturnType<typeof type_mouseState>;
export const type_mouseState = () => ({
    x: 0,
    y: 0,
    downX: 0,
    downY: 0,
    isButtonDown: {
        left: false, 
        middle: false, 
        right: false, 
        back: false, 
        forward: false,
    }
});