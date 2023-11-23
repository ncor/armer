'use client';

import { F_KEYS, KEYMAP, MODIFIERS } from "@/lib/keyboard/constants";
import { IModifiersContext, ModifiersContext } from "../contexts/modifiers"
import { useContext, useEffect, useState } from "react"
import useKeystroke from "../hooks/keystroke";
import useFade from "../hooks/fade";


const applyModifiers = (modifiers: IModifiersContext, key: string) => {
    if (modifiers.isShiftPressed)
        key = '⇧' + key;
    else if (modifiers.isCtrlPressed)
        key = '⌃' + key;
    else if (modifiers.isAltPressed)
        key = '⌥' + key;
    else if (modifiers.isMetaPressed)
        key = '⌘' + key;

    return key;
}


export default function CasterInputBox() {
    const isFaded = useFade();
    const keystroke = useKeystroke();
    const modifiers = useContext(ModifiersContext);
    const [ input, setInput ] = useState<string>('');

    useEffect(() => {
        if (!keystroke) return;

        if (isFaded) return setInput('');

        if (!MODIFIERS.includes(keystroke.key)) {
            let { key } = keystroke;

            if (!F_KEYS.includes(key)) {
                if (KEYMAP[key] != undefined) {
                    key = KEYMAP[key];
                } else {
                    key = modifiers.isShiftPressed ? key : key.toLowerCase();
                }
            }

            key = applyModifiers(modifiers, key);
            
            setInput(prevInput => prevInput + key);
        }
    }, [ keystroke, isFaded ]);

    return <div
        className="overflow-hidden w-full h-[120px] flex justify-end text-[5em] px-4 pt-[52px] pb-[44px] mb-[2px] bg-black bg-opacity-75 rounded-t-3xl"
    >
        <div className="mx-auto whitespace-nowrap">{ input }</div>
    </div>
}
