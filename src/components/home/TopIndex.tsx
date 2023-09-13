import { index } from '@/lib/index';
import styles from './home.module.scss';
import IndexBox from '../Index/IndexBox';

export default function TopIndex() {
    return (
        <div className={styles['container']}>
            <div className={styles['index-container']}>
            {index.map((item, key) => {
                return (
                    <a href={item.url} className='link' key={key}>
                        <IndexBox
                            icon={item.icon}
                            title={item.title}
                            background={item.background}
                        />
                    </a>
                )
            })}
            </div>
        </div>
    );
}
