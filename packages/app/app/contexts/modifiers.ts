import { createContext } from "react";


export type IModifiersContext = {
    isShiftPressed: boolean,
    isCtrlPressed: boolean,
    isAltPressed: boolean,
    isMetaPressed: boolean,
    isCapsActive: boolean,
    isAnyModifierPressed: boolean,
    isOnlyShiftPressed: boolean,
    toggleShift: (toggle: boolean) => any,
    toggleCtrl: (toggle: boolean) => any,
    toggleAlt: (toggle: boolean) => any,
    toggleMeta: (toggle: boolean) => any,
    toggleCaps: (toggle: boolean) => any
};

export const ModifiersContext = createContext<IModifiersContext>({
    isShiftPressed: false,
    isCtrlPressed: false,
    isAltPressed: false,
    isMetaPressed: false,
    isCapsActive: false,
    isAnyModifierPressed: false,
    isOnlyShiftPressed: false,
    toggleShift: (toggle: boolean) => {},
    toggleCtrl: (toggle: boolean) => {},
    toggleAlt: (toggle: boolean) => {},
    toggleMeta: (toggle: boolean) => {},
    toggleCaps: (toggle: boolean) => {}
});
