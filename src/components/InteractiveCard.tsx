'use client'
import { useState } from 'react'

export default function InteractiveCard({ children, venueName }: { children: React.ReactNode, venueName: string }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={isHovered
                ? 'w-1/5 h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-2xl bg-neutral-200'
                : 'w-1/5 h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-lg bg-white'}
            onClick={() => alert(`You Select ${venueName}`)}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            {children}
        </div>
    );
}