import styles from '../home.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <p className={styles.title}>Contact</p>
      </div>
      <div className={styles['text-container']}>
        <span>
          iam@hasuro.com or{' '}
          <a
            href="https://twitter.com/HASURO_dev"
            className={styles.link}
            target="_blank"
            rel="noopener"
          >
            Twitter
          </a>
        </span>
      </div>
    </div>
  )
}
