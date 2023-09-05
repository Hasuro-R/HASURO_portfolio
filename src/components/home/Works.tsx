import { works } from '@/lib/work/works';
import styles from './home.module.scss';
import WorkBox from '../work/WorkBox';

export default function Works() {
    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Works</p>
            </div>
            <div className={styles['works-container']}>
            {works.map((item, key) => {
                return (
                    <WorkBox
                        title={item.title}
                        image={item.image}
                        url={item.url}
                        description={item.description}
                        techs={item.techs}
                        key={key}
                    />
                )
            })}
            </div>
        </div>
    );
}
