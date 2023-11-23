import { useContext } from "react";
import { FadeContext } from "../contexts/fade";


export default function useFade() {
    const fade = useContext(FadeContext);

    return fade;
}
