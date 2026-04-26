import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'

const NAV_ITEMS = [
  { label: 'home', path: '/' },
  { label: 'gallery', path: '/gallery' },
  { label: 'about', path: '/about' },
]

function Taskbar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateStr = time.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' })

  return (
    <div className={styles.taskbar}>
      <button className={styles.startBtn}>
        <div className={styles.winLogo}>
          <span style={{ background: '#4fa3e0' }} />
          <span style={{ background: '#6abf40' }} />
          <span style={{ background: '#e85c2a' }} />
          <span style={{ background: '#f5c400' }} />
        </div>
      </button>

      <div className={styles.taskItems}>
        <button className={styles.taskItem}>
          <div className={styles.taskItemIcon}>
            <div className={styles.taskItemIconGrid}>
              <span style={{ background: '#4fa3e0' }} />
              <span style={{ background: '#6abf40' }} />
              <span style={{ background: '#e85c2a' }} />
              <span style={{ background: '#f5c400' }} />
            </div>
          </div>
          <span className={styles.taskItemLabel}>Revive Windows Desktop</span>
        </button>
      </div>

      <div className={styles.sysTray}>
        <div className={styles.clock}>
          <span>{timeStr}</span>
          <span>{dateStr}</span>
        </div>
        <div className={styles.showDesktop} title="Show desktop" />
      </div>
    </div>
  )
}

export default function Layout({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const activePath = pathname.startsWith('/apps/') ? '/gallery' : pathname

  return (
    <>
      <div className={styles.shell}>
        <div className={styles.win}>

          {/* Topbar */}
          <div className={styles.topbar} />

          {/* Navbar */}
          <div className={styles.navbar}>
            <div className={styles.dent} />
            <nav className={styles.mainnav}>
              {NAV_ITEMS.map(({ label, path }) => (
                <button
                  key={path}
                  className={`${styles.mn} ${activePath === path ? styles.active : ''}`}
                  onClick={() => navigate(path)}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Page content */}
          <div className={styles.body}>
            {children}
          </div>

          {/* Footer */}
          <div className={styles.winFooter}>
            <a
              className={styles.submitBtn}
              href="https://github.com/hlabadi/revivewindowsdesktop/issues/new"
              target="_blank"
              rel="noreferrer"
            >submit an app</a>
          </div>

        </div>
      </div>
      <Taskbar />
    </>
  )
}
