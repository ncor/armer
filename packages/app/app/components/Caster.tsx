'use client';

import CasterInputBox from "./CasterInputBox";
import CasterModifiers from "./CasterModifiers";
import useFade from "../hooks/fade";


export default function Caster() {
    return <div
        className="grid gap-[2px] w-[250px] text-white transition-all duration-200"
    >
        <CasterInputBox/>
        <CasterModifiers/>
    </div>;
}
