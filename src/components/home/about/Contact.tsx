import styles from '../home.module.scss';
import {GoArrowUpRight} from 'react-icons/go';

export default function Contact() {
    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Contact</p>
            </div>
            <div className={styles['text-container']}>
                <span>hasuro.developer00@gmail.com or <a href='https://twitter.com/HASURO_dev' className={styles['link']} target='_blank'>Twitter</a></span>
            </div>
        </div>
    )
}
