import { Keystroke, KeystrokeHandler } from "@/lib/keyboard/types";
import { io } from "socket.io-client";


export const socket = io('http://localhost:8080');

const keystrokeHandlers: KeystrokeHandler[] = [];

export const addKeystrokeHandler = (callback: KeystrokeHandler) => {
    keystrokeHandlers.push(callback);
}

socket.on('keystroke', (keystroke: Keystroke) => {
    keystrokeHandlers.map(handler => handler(keystroke));
});
