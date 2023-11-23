'use client';

import { useContext, useEffect } from "react";
import CasterModifiersItem from "./CasterModifiersItem";
import { ModifiersContext } from "../contexts/modifiers";
import { MODIFIERS } from "@/lib/keyboard/constants";
import useKeystroke from "../hooks/keystroke";


export default function CasterModifiers() {
    const keystroke = useKeystroke();
    const modifiers = useContext(ModifiersContext);

    useEffect(() => {
        if (!keystroke) return;

        if (MODIFIERS.slice(0, 2).includes(keystroke.key))
            modifiers.toggleShift(keystroke.isPressed);
        if (MODIFIERS.slice(2, 4).includes(keystroke.key))
            modifiers.toggleCtrl(keystroke.isPressed);
        if (MODIFIERS.slice(4, 6).includes(keystroke.key))
            modifiers.toggleAlt(keystroke.isPressed);
        if (MODIFIERS.slice(6, 8).includes(keystroke.key))
            modifiers.toggleMeta(keystroke.isPressed);
    }, [ keystroke ]);

    return <div className="caster-modifiers w-full flex gap-[2px] text-[1.25em] font-semibold">
        <CasterModifiersItem isPressed={ modifiers.isShiftPressed }>⇧</CasterModifiersItem>
        <CasterModifiersItem isPressed={ modifiers.isCtrlPressed }>⌃</CasterModifiersItem>
        <CasterModifiersItem isPressed={ modifiers.isAltPressed }>⌥</CasterModifiersItem>
        <CasterModifiersItem isPressed={ modifiers.isMetaPressed }>⌘</CasterModifiersItem>
    </div>
}
