'use client';

import { ReactNode, useEffect, useState } from "react";
import { KeystrokeContext } from "../contexts/keystroke";
import { Keystroke } from "@/lib/keyboard/types";
import { ModifiersContext } from "../contexts/modifiers";
import { addKeystrokeHandler } from "../socket";
import { FadeContext } from "../contexts/fade";
import { CAPS_LOCK, MODIFIERS } from "@/lib/keyboard/constants";
import { getRandomSound } from "../sounds";


export type ProvidersProps = {
    children: ReactNode
}

export default function Providers({
    children
}: ProvidersProps) {
    const [ keystroke, setKeystroke ] = useState<Keystroke>();

    const [ isShiftPressed, toggleShift ] = useState<boolean>(false);
    const [ isCtrlPressed, toggleCtrl ] = useState<boolean>(false);
    const [ isAltPressed, toggleAlt ] = useState<boolean>(false);
    const [ isMetaPressed, toggleMeta ] = useState<boolean>(false);
    const [ isCapsActive, toggleCaps ] = useState<boolean>(false);

    const isAnyModifierPressed =
        isShiftPressed || isCtrlPressed ||
        isAltPressed || isMetaPressed;
    const isOnlyShiftPressed =
        isShiftPressed && !isCtrlPressed &&
        !isAltPressed && !isMetaPressed;

    const [ isFaded, toggleFade ] = useState<boolean>(true);
    const [ fadeOutTimeout, setFadeOutTimeout ] = useState<NodeJS.Timeout>();

    const handleModifier = (keystroke: Keystroke) => {
        if (MODIFIERS.slice(0, 2).includes(keystroke.key))
            toggleShift(keystroke.isPressed);
        if (MODIFIERS.slice(2, 4).includes(keystroke.key))
            toggleCtrl(keystroke.isPressed);
        if (MODIFIERS.slice(4, 6).includes(keystroke.key))
            toggleAlt(keystroke.isPressed);
        if (MODIFIERS.slice(6, 8).includes(keystroke.key))
            toggleMeta(keystroke.isPressed);
        if (keystroke.key == CAPS_LOCK)
            toggleCaps(prev => !prev)
    }

    const fadeIn = () => {
        toggleFade(false);
        setFadeOutTimeout(timeout => {
            clearTimeout(timeout);
            return setTimeout(() => toggleFade(true), 2000);
        });
    }

    const playKeystrokeSound = (key: string) =>
        getRandomSound().play();

    const mountKeystrokeHandler = () => {
        addKeystrokeHandler(keystroke => {
            setKeystroke(keystroke);
            handleModifier(keystroke);

            if (
                !MODIFIERS.includes(keystroke.key) &&
                keystroke.key != CAPS_LOCK &&
                keystroke.isPressed
            ) {
                playKeystrokeSound(keystroke.key);
                fadeIn();
            }
        });
    }

    useEffect(() => {
        mountKeystrokeHandler();
    }, []);

    return <KeystrokeContext.Provider value={{ keystroke }}>
        <ModifiersContext.Provider value={{
            isShiftPressed, toggleShift,
            isCtrlPressed, toggleCtrl,
            isAltPressed, toggleAlt,
            isMetaPressed, toggleMeta,
            isCapsActive, toggleCaps,
            isAnyModifierPressed,
            isOnlyShiftPressed
        }}>
            <FadeContext.Provider value={{ isFaded, toggleFade }}>
                { children }
            </FadeContext.Provider>
        </ModifiersContext.Provider>
    </KeystrokeContext.Provider>;
}
