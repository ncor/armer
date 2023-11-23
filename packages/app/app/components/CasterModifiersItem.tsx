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

    return <div className={ `flex-1 text-center padding-2 bg-black bg-opacity-75 p-2 transition-all duration-200 ${toggleStyle}` }>
        { children }
    </div>
}
