import { Keystroke } from "@/lib/keyboard/types";
import { createContext } from "react";


export type IFadeContext = {
    isFaded: boolean,
    toggleFade: (toggle: boolean) => any,
};

export const FadeContext = createContext<IFadeContext>({
    isFaded: true,
    toggleFade: (toggle: boolean) => {}
});
