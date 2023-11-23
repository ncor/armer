import { useContext } from "react";
import { ModifiersContext } from "../contexts/modifiers";


export default function useKeystroke() {
    const modifiers = useContext(ModifiersContext);

    return modifiers;
}
