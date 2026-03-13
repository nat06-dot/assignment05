'use client'
import { useState } from 'react'

export default function InteractiveCard({ children, venueName }: { children: React.ReactNode, venueName: string }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            // ใช้ transition เพื่อให้ตอนชี้เมาส์เงาค่อยๆ เปลี่ยนอย่างนุ่มนวล
            className={`w-1/5 h-[300px] rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 ${isHovered
                // โฮเวอร์: เงาเข้มและกว้างขึ้นรอบทิศทาง (0px 0px)
                ? 'shadow-[0_0_25px_rgba(0,0,0,0.2)] bg-neutral-200'
                // ปกติ: เงาบางๆ รอบทิศทาง (0px 0px)
                : 'shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-white'
                }`}
            onClick={() => alert(`You Select ${venueName}`)}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            {children}
        </div>
    );
}