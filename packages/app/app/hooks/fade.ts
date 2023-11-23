import { useContext } from "react";
import { FadeContext } from "../contexts/fade";


export default function useFade() {
    const { isFaded } = useContext(FadeContext);

    return isFaded;
}
