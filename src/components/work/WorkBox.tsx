import Image from 'next/image';
import styles from './work.module.scss';
import { returnTech } from '@/lib/work/returnTech';

export default function WorkBox({
    title, image, url, description, techs,
}: {
    title: string, image: any, url: string, description: string, techs: string[],
}) {
    return (
        <a href={url} target='_blank' className='link'>
            <div className={styles['container']}>
                <Image src={image} alt={`${title}の画像`} width={240} height={126} className={styles['top-image']} />
                <div className={styles['under-box']}>
                    <p className={styles['title']}>{title}</p>
                    <div className={styles['description-box']}>{description}</div>
                    <div className={styles['techs-container']}>
                    {techs.map((item, key) => {
                        return (
                            <div className={styles['tech-box']} style={{backgroundColor: returnTech(item).color}}>{returnTech(item).text}</div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </a>
    )
}
