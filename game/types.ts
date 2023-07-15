export type Vector = {
    x: number,
    y: number,
}

export type Bounds = {
    x: number,
    y: number,
    w: number,
    h: number,
};

export type Circle = {
    x: number,
    y: number,
    radius: number,
}

export type MouseState = ReturnType<typeof initMouseState>;
export const initMouseState = () => ({
    x: 0,
    y: 0,
    downX: 0,
    downY: 0,
    isButtonDown: {
        left: false, 
        right: false, 
    }
});