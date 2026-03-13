
import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard"

interface props {

}

export default function Card({ venueName, imgSrc }: { venueName: string, imgSrc: string }) {
    return (
        <InteractiveCard venueName={venueName}>
            <div className={`${styles.card} rounded-lg shadow-lg`}>
                <div className={styles.cardimg}>
                    <Image src={imgSrc}
                        alt='product picture'
                        fill={true}
                        style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.cardtext}>
                    {venueName}
                </div>
            </div>
        </InteractiveCard>
    );
}