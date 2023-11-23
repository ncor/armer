"use client";

import {
    CAPS_LOCK,
    DELETE_KEYS,
    F_KEYS,
    KEYMAP,
    MODIFIERS,
    SHIFT_EXTENSIONS,
    UNPRINTABLE_KEYS,
} from "@/lib/keyboard/constants";
import { useEffect, useState } from "react";
import useKeystroke from "../hooks/keystroke";
import useFade from "../hooks/fade";
import useModifiers from "../hooks/modifiers";
import { motion } from "framer-motion";


export default function CasterInputBox() {
    const { isFaded, toggleFade } = useFade();
    const keystroke = useKeystroke();
    const { modifiers, applyModifiers, applyCase } = useModifiers();
    const [ input, setInput ] = useState<string>('');
    const [ isPrevHotkey, togglePrevHotkey ] = useState<boolean>(false);
    const [ deletedInput, setDeletedInput ] = useState<string>('');

    const reset = (starterInput?: string) => {
        setInput(starterInput || '');
        setDeletedInput('');
    };

    useEffect(() => {
        if (!keystroke) return;

        if (isFaded) return reset();

        let { key } = keystroke;

        if (
            key != CAPS_LOCK &&
            !MODIFIERS.includes(key) &&
            !UNPRINTABLE_KEYS.includes(key)
        ) {
            const isDeleteKey = DELETE_KEYS.includes(key);

            if (!F_KEYS.includes(key) && !isDeleteKey) {
                key = KEYMAP[key] || key;
                
                if (modifiers.isAnyModifierPressed) {
                    togglePrevHotkey(true);
                    return reset(applyModifiers(key));
                }

                key = applyCase(key);
            }

            if (isPrevHotkey) {
                togglePrevHotkey(false);
                if (isDeleteKey) toggleFade(true);
                return reset(isDeleteKey ? '' : key);
            }

            setInput(prevInput => {
                if (isDeleteKey) {
                    setDeletedInput(prev => {
                        if (prevInput.length > 0) {
                            return prevInput[prevInput.length - 1] + prev;
                        } else {
                            toggleFade(true);
                            return '';
                        }
                    });
                    
                    return prevInput.slice(0, prevInput.length - 1);
                } else {
                    setDeletedInput(prev => prev.slice(key.length));
                }

                return prevInput + key;
            });
        }
    }, [ keystroke, isFaded ]);

    /**
     * Based on "i" symbol width.
     */
    if (input.length > 24)
        setInput(input.slice(input.length - 24));

    const fadeStyles = isFaded ? 'opacity-0' : '';

    return (
        <div className={
            `overflow-hidden w-full min-h-[80px] flex justify-end text-5xl p-4 px-6 bg-black bg-opacity-75 rounded-3xl 
            transition-all duration-100 ${fadeStyles}`
        }>
            <div className="flex mx-auto whitespace-nowrap">
                {
                    input && [ ...input ].map((stroke, i) =>
                        <motion.div
                            key={ i }
                            animate={{ y: [ 5, 0 ], opacity: [ 0, 1 ] }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                            { stroke }
                        </motion.div>
                    )
                }
                {
                    deletedInput.length > 0 &&
                    <p className="opacity-25">{ deletedInput }</p>
                }
            </div>
        </div>
    );
}
