import style from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className = {style.banner}>
            <Image src={'/img/Gemini_Generated.jpg'}
                alt='Gemini_Generated'
                fill={true}
                style={{ objectFit:"cover"}}/>
            <div className={style.bannerText}>
                <h1>where every event finds its venue</h1>
            </div>
        </div>
    )
}