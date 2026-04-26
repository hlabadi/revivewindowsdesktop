import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>

      <div className={styles.body}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What is this?</h2>
          <p>A curated gallery of beautiful apps.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How do I submit?</h2>
          <p>Open a pull request on GitHub with your app's metadata. Include a name, short description, category, and a square cover image. I review submissions as often as possible. You can also send me an email. Or open a GitHub issue.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What gets accepted?</h2>
          <p>Apps that are truly good looking, reasonably polished and have a vibe. No electron apps. The app does not have to be your app. Nostalgia is fine, but truly incredible would be to add new, living applications.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who runs this?</h2>
          <p>My name is <a href="https://hlabadi.com" target="_blank" rel="noreferrer">Henrik Labadi</a>, and I am a Windows Phone/Zune/Metro overall fan.</p>
        </section>
      </div>
    </div>
  )
}
