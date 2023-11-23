import { Keymap } from "./types";


export const MODIFIERS = [
    'LEFT SHIFT',
    'RIGHT SHIFT',
    'LEFT CTRL',
    'RIGHT CTRL',
    'LEFT ALT',
    'RIGHT ALT',
    'LEFT META',
    'RIGHT META'
];

export const CAPS_LOCK = 'CAPS LOCK';

export const F_KEYS = [
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
    'F7', 'F28', 'F9', 'F10', 'F11', 'F12'
];

export const DELETE_KEYS = [
    'BACKSPACE', 'DELETE'
];

export const UNPRINTABLE_KEYS = [
    'PRINT SCREEN', 'SCROLL LOCK'
];

export const KEYMAP: Keymap = {
    'ESCAPE': '⎋',
    'TAB': '⇥',
    'CAPS LOCK': '⇪',
    'SPACE': '␣',
    'RETURN': '⏎',
    'BACKSPACE': '⌫',
    'DELETE': '⌦',
    'HOME': '⇱',
    'END': '⇲',
    'INS': '⎀',
    'PAGE UP': '⇡',
    'PAGE DOWN': '⇣',
    'UP ARROW': '↑',
    'DOWN ARROW': '↓',
    'LEFT ARROW': '←',
    'RIGHT ARROW': '→',
    'SECTION': '~',
    'MINUS': '-',
    'EQUALS': '=',
    'SQUARE BRACKET OPEN': '[',
    'SQUARE BRACKET CLOSE': ']',
    'BACKSLASH': '\\',
    'SEMICOLON': ';',
    'QUOTE': '\'',
    'COMMA': ',',
    'DOT': '.',
    'FORWARD SLASH': '/'
};

export const SHIFT_EXTENSIONS: Keymap = {
    'SECTION': '`',
    '1': '!',
    '2': '@',
    '3': '#',
    '4': '$',
    '5': '%',
    '6': '^',
    '7': '&',
    '8': '*',
    '9': '(',
    '0': ')',
    'MINUS': '_',
    'EQUALS': '+',
    'SQUARE BRACKET OPEN': '{',
    'SQUARE BRACKET CLOSE': '}',
    'SEMICOLON': ':',
    'QUOTE': '"',
    'COMMA': '<',
    'DOT': '>',
    'FORWARD SLASH': '?'
};
