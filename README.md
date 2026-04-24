# Revive Windows Desktop

A curated gallery of beautiful, native desktop apps — built to celebrate the golden age of personal software and push back against Electron-wrapped websites masquerading as applications.

## What it is

A blog and gallery site styled after the Zune desktop app aesthetic. Each listing is a real, native app worth knowing about.

## Stack

- **React 19** + **Vite**
- **React Router** for client-side routing
- **CSS Modules** for scoped styling
- No UI framework, no component library

## Project structure

```text
src/
├── components/
│   └── Layout.jsx          # Shell, navbar, Windows 7 taskbar
├── pages/
│   ├── Home.jsx            # Blog posts
│   ├── Gallery.jsx         # App grid + list + search
│   ├── AppPage.jsx         # Individual app detail page
│   └── About.jsx
├── data/
│   ├── apps.js             # App listings — add new apps here
│   └── posts.js            # Blog posts — add new posts here
public/
├── feed.xml                # RSS feed — update alongside posts.js
├── background.png          # Desktop wallpaper (Windows 7 default)
└── apps/                   # App screenshots (referenced in apps.js)
```

## Adding an app

Add an entry to `src/data/apps.js`:

```js
{
  title: 'App Name',
  summary: 'one-line description',
  description: 'Longer description shown on the individual page.',
  category: 'utilities', // media | utilities | dev tools | productivity | games | design
  image: '/apps/your-screenshot.png',
  projectUrl: 'yourapp.com',
  bg: '#1a2a3a', // fallback colour when no image
}
```

Drop the screenshot into `public/apps/`.

## Adding a post

Add an entry to `src/data/posts.js`:

```js
{
  date: 'May 1, 2026',
  isoDate: '2026-05-01T00:00:00Z',
  tag: 'announcement',
  title: 'Post title',
  body: 'Post body.',
}
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
