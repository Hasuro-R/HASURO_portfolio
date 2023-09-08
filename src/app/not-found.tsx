import { urls } from '@/lib/url/urls';
import styles from './page.module.scss';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function notFoundPage() {
    return (
        <div className={styles['container']}>
            <p className={styles['title']}>Not Found</p>
            {urls.map((item, key) => {
                return (
                    <Link href={item.link} className={styles['url-box']} key={key}>
                        <p className={styles['url']}>{item.title}</p>
                        <span className={styles['url-arrow']}><IoMdArrowForward /></span>
                    </Link>
                )
            })}
        </div>
    )
}
