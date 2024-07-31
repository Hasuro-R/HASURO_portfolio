import { profileIntroduction } from '@/lib/profile/profileIntroduction';
import styles from '../home.module.scss';

export default function Profile() {
    const profile = profileIntroduction();

    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Profile</p>
            </div>
            <div className={styles['text-container']}>
                {profile.split('\n').map((item, key) => {
                    return <span key={key}>{item}</span>
                })}
            </div>
        </div>
    );
}
