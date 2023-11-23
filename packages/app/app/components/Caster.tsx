'use client';

import CasterInputBox from "./CasterInputBox";
import CasterModifiers from "./CasterModifiers";
import useFade from "../hooks/fade";


export default function Caster() {
    const isFaded = useFade();

    const fadeStyles = isFaded ? 'opacity-50' : '';

    return <div
        className={
            `w-[250px] text-white transition-all duration-200 ${fadeStyles}`
        }
    >
        <CasterInputBox/>
        <CasterModifiers/>
    </div>;
}
