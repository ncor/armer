'use client';

import { ReactNode } from "react"


export type CasterModifiersItemProps = {
    isPressed: boolean
    children: ReactNode,
}

export default function CasterModifiersItem({
    isPressed, children
}: CasterModifiersItemProps) {
    const toggleStyle = isPressed ? 'text-white' : 'text-[rgba(255,255,255,0.5)]';

    if (isPressed) {
        return <div
            className="w-1/4 text-center text-xl padding-2 bg-black bg-opacity-75 p-2 transition-all duration-200 text-white rounded-3xl"
        >
            { children }
        </div>;
    }
}
