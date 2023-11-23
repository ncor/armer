import { Keystroke } from "@/lib/keyboard/types";
import { createContext } from "react";


export type IFadeContext = {
    isFaded: boolean,
};

export const FadeContext = createContext<IFadeContext>({
    isFaded: true
});
