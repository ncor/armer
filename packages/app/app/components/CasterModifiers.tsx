'use client';

import CasterModifiersItem from "./CasterModifiersItem";
import { AnimatePresence, motion } from "framer-motion";
import useModifiers from "../hooks/modifiers";


export default function CasterModifiers() {
    const { modifiers } = useModifiers();

    return <AnimatePresence>
        {
            modifiers.isAnyModifierPressed &&
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="w-full flex gap-[2px] font-semibold"
            >
                <CasterModifiersItem isPressed={ modifiers.isCapsActive }>⇪</CasterModifiersItem>
                <CasterModifiersItem isPressed={ modifiers.isShiftPressed }>⇧</CasterModifiersItem>
                <CasterModifiersItem isPressed={ modifiers.isCtrlPressed }>⌃</CasterModifiersItem>
                <CasterModifiersItem isPressed={ modifiers.isAltPressed }>⌥</CasterModifiersItem>
                <CasterModifiersItem isPressed={ modifiers.isMetaPressed }>⌘</CasterModifiersItem>
            </motion.div>
        }
    </AnimatePresence>
}
