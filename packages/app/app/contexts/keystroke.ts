import { Keystroke } from "@/lib/keyboard/types";
import { createContext } from "react";


export type IKeystrokeContext = {
    keystroke?: Keystroke
};

export const KeystrokeContext = createContext<IKeystrokeContext>({});
