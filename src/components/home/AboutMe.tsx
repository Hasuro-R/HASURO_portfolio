import Link from 'next/link';
import ReadMoreButton from '../UI/button/ReadMoreButton';
import styles from './home.module.scss';
import { returnAge } from '@/lib/profile/returnAge';

export default function AboutMe() {
    const age = returnAge();

    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>About me</p>
                <Link href='/about'>
                    <ReadMoreButton />
                </Link>
            </div>
            <div className={styles['text-container']}>
                <span>ものづくりが大好きな{age}歳</span>
                <span>Next.jsやRuby on Railsを用いたWeb開発から始め、最近はSwiftUIやGoを用いたアプリ開発にも挑戦中</span>
                <span>現在はWebフロント・モバイル・バックエンドエンジニアの長期インターンに参加している</span>
                <span>アプリ開発したり、魚捌いたり、スイーツ作ったり、趣味は多岐にわたる</span>
                <span>人生のモットーは【楽しく生きる！！】</span>
            </div>
        </div>
    )
}
