import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import AppPage from './pages/AppPage'
import { APPS } from './data/apps'

function AppPageWrapper() {
  const slug = useLocation().pathname.split('/apps/')[1]
  const app = APPS.find(a => a.title.toLowerCase().replace(/\s+/g, '-') === slug)
  if (!app) return <div style={{ padding: 40 }}>App not found.</div>
  return <AppPage app={app} />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/apps/:slug" element={<AppPageWrapper />} />
      </Routes>
    </Layout>
  )
}
