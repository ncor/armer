import { useContext } from "react";
import { KeystrokeContext } from "../contexts/keystroke";


export default function useKeystroke() {
    const { keystroke } = useContext(KeystrokeContext);

    return keystroke;
}
