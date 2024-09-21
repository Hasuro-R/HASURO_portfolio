import styles from './footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.container}>Copyright ©︎ {currentYear} HASURO</div>
    )
}
