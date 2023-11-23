export type ToggleMap = {
    [key: string]: boolean
};

export type Keystroke = {
    key: string,
    isPressed: boolean
};

export type KeystrokeHandler = (keystroke: Keystroke) => any;
