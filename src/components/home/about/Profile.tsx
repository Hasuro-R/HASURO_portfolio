import styles from '../home.module.scss';

export default function Profile() {
    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Profile</p>
            </div>
            <div className={styles['text-container']}>
                <span>ものづくりが大好きな17歳</span>
                <span>主にWebアプリ開発（Next.js・Ruby on Rails）を中心に行ってきたが、最近はFlutterを用いたモバイルアプリ開発に挑戦中</span>
                <span>アプリ開発したり、魚捌いたり、スイーツ作ったり、趣味は多岐にわたる</span>
                <span>人生のモットーは【楽しく生きる！！】</span>
            </div>
        </div>
    );
}
