import { useContext } from "react";
import { IModifiersContext, ModifiersContext } from "../contexts/modifiers";


export default function useModifiers() {
    const modifiers = useContext(ModifiersContext);

    const applyModifiers = (key: string) => {
        if (modifiers.isOnlyShiftPressed)
            return key;

        if (modifiers.isShiftPressed)
            key = '⇧' + key;
        if (modifiers.isCtrlPressed)
            key = '⌃' + key;
        if (modifiers.isAltPressed)
            key = '⌥' + key;
        if (modifiers.isMetaPressed)
            key = '⌘' + key;
    
        return key;
    }

    const applyCase = (key: string) => {
        return modifiers.isShiftPressed || modifiers.isCapsActive
            ? key
            : key.toLowerCase();
    }

    return { modifiers, applyModifiers, applyCase };
}
