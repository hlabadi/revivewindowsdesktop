import { useNavigate } from 'react-router-dom'
import styles from './AppPage.module.css'

export default function AppPage({ app }) {
  const navigate = useNavigate()
  const onBack = () => navigate('/gallery')
  return (
    <div className={styles.page}>
      {app.image && (
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${app.image})` }}
        />
      )}

      <div className={styles.content}>
        <div className={styles.body}>
          <button className={styles.back} onClick={onBack}>← gallery</button>

          <p className={styles.category}>{app.category}</p>
          <h1 className={styles.title}>{app.title}</h1>
          <p className={styles.summary}>{app.summary}</p>

          {app.description && (
            <p className={styles.description}>{app.description}</p>
          )}

          {app.projectUrl && (
            <a
              className={styles.link}
              href={`https://${app.projectUrl.replace(/^https?:\/\//, '')}`}
              target="_blank"
              rel="noreferrer"
            >
              visit project
            </a>
          )}
        </div>

        {app.image && (
          <div className={styles.screenshot}>
            <img src={app.image} alt={app.title} />
          </div>
        )}
      </div>
    </div>
  )
}
