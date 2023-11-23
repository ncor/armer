'use client';

import { ReactNode, useEffect, useState } from "react";
import { SocketContext } from "../contexts/socket";
import { KeystrokeContext } from "../contexts/keystroke";
import { Keystroke } from "@/lib/keyboard/types";
import { ModifiersContext } from "../contexts/modifiers";
import { addKeystrokeHandler, socket } from "../socket";
import { FadeContext } from "../contexts/fade";


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

    const [ isFaded, toggleFaded ] = useState<boolean>(true);
    const [ fadeOutTimeout, setFadeOutTimeout ] = useState<NodeJS.Timeout>();

    const fadeIn = () => {
        toggleFaded(false);
        setFadeOutTimeout(timeout => {
            clearTimeout(timeout);
            return setTimeout(() => toggleFaded(true), 2000);
        });
    }

    const mountKeystrokeHandler = () => {
        addKeystrokeHandler(keystroke => {
            setKeystroke(keystroke);
            fadeIn();
        });
    }

    useEffect(() => {
        mountKeystrokeHandler();
    }, []);

    return <SocketContext.Provider value={{ socket }}>
        <KeystrokeContext.Provider value={{ keystroke }}>
            <ModifiersContext.Provider value={{
                isShiftPressed, toggleShift,
                isCtrlPressed, toggleCtrl,
                isAltPressed, toggleAlt,
                isMetaPressed, toggleMeta
            }}>
                <FadeContext.Provider value={{ isFaded }}>
                    { children }
                </FadeContext.Provider>
            </ModifiersContext.Provider>
        </KeystrokeContext.Provider>
    </SocketContext.Provider>
}
