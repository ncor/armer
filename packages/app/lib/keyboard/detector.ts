'use server';

import { GlobalKeyboardListener, IGlobalKeyEvent } from "node-global-key-listener";
import { Keystroke, KeystrokeHandler, ToggleMap } from "./types";
import { CAPS_LOCK, DELETE_KEYS, MODIFIERS } from "./constants";


class KeystrokeDetector {
    public started: boolean = false;
    public previousToggleMap: ToggleMap = {};
    public keystrokeHandlers: KeystrokeHandler[] = [];

    constructor(
        public keyboard: GlobalKeyboardListener
    ) {}

    public on(callback: KeystrokeHandler) {
        this.keystrokeHandlers.push(callback);
        console.log('Added new socket to detector\'s handlers');
    }

    public unlisten(callback: KeystrokeHandler) {
        this.keystrokeHandlers =
            this.keystrokeHandlers.filter(handler => handler != callback);
        console.log('Removed handler from detector\'s handlers');
    }

    public listener(_: IGlobalKeyEvent, toggleMap: ToggleMap) {
        const filteredTogglePairs =Object.entries(toggleMap)
            .filter(([k, v]) =>
                (this.previousToggleMap[k] != v &&
                    (v || MODIFIERS.includes(k))) ||
                (DELETE_KEYS.includes(k) && v) ||
                (k == CAPS_LOCK && v)
            );
        const keystroke: Keystroke = {
            key: filteredTogglePairs?.[0]?.[0],
            isPressed: filteredTogglePairs?.[0]?.[1]
        };
    
        if (keystroke.key) {
            console.log('Detected keystroke:', keystroke);
            this.keystrokeHandlers.map(handler => handler(keystroke));
        }
    
        this.previousToggleMap = structuredClone(toggleMap);
    }

    public start() {
        if (this.started) return;

        this.keyboard.addListener((_: IGlobalKeyEvent, toggleMap: ToggleMap) => {
            this.listener(_, toggleMap)
        });

        console.log('Started keystroke detector');
    }
}

const keyboard = new GlobalKeyboardListener();
export const detector = new KeystrokeDetector(keyboard);

detector.start();
