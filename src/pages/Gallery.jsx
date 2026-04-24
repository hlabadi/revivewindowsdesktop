import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Gallery.module.css'
import { APPS } from '../data/apps'

const CATEGORIES = ['all', 'media', 'utilities', 'dev tools', 'productivity', 'games', 'design']

export default function Gallery() {
  const navigate = useNavigate()
  const onSelectApp = (app) => navigate(`/apps/${app.title.toLowerCase().replace(/\s+/g, '-')}`)
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = APPS
    .filter(a => activeCategory === 'all' || a.category === activeCategory)
    .filter(a => a.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className={styles.page}>

      {/* Sub-navigation */}
      <div className={styles.subnav}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`${styles.sn} ${activeCategory === cat ? styles.snActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <div className={styles.searchWrap}>
          <input
            className={styles.search}
            type="text"
            placeholder="SEARCH"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button className={styles.searchClear} onClick={() => setQuery('')}>×</button>
          )}
        </div>
      </div>

      <div className={styles.content}>

        {/* Left column: app list */}
        <aside className={styles.leftcol}>
          <div className={styles.lcHeader}>
            <span className={styles.lcLabel}>{filtered.length} apps a-z</span>
          </div>
          <div className={styles.lcScroll}>
            {filtered.map(app => (
              <div
                key={app.title}
                className={styles.lcItem}
                onClick={() => onSelectApp(app)}
              >
                {app.title}
              </div>
            ))}
          </div>
        </aside>

        {/* Center: tile grid */}
        <main className={styles.centercol}>
          <div className={styles.ccHeader}>
            <span className={styles.ccLabel}>{filtered.length} apps</span>
            <span className={styles.ccSort}>by name</span>
          </div>
          <div className={styles.grid}>
            {filtered.map(app => (
              <div
                key={app.title}
                className={styles.tile}
                onClick={() => onSelectApp(app)}
              >
                <div className={styles.tileImg} style={{ background: app.bg }}>
                  {app.image
                    ? <img src={app.image} alt={app.title} className={styles.tileImgPhoto} />
                    : app.title.slice(0, 3)
                  }
                </div>
                <div className={styles.tileMeta}>
                  <div className={styles.tileTitle}>{app.title}</div>
                  <div className={styles.tileSub}>{app.summary}</div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>

    </div>
  )
}
