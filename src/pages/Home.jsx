import styles from './Home.module.css'
import { POSTS } from '../data/posts'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.heroLabel}>a gallery for beautiful apps</span>
        <h1 className={styles.heroTitle}>celebrating application design</h1>
      </div>
      <div className={styles.posts}>
        {POSTS.map((post, i) => (
          <article key={i} className={styles.post}>
            <div className={styles.postMeta}>
              <span className={styles.postDate}>{post.date}</span>
              <span className={styles.postTag}>{post.tag}</span>
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postBody}>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
