import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Fix for notifyRouteChange error (likely from browser extensions)
if (typeof window !== 'undefined' && !(window as any).notifyRouteChange) {
  (window as any).notifyRouteChange = () => {}
}

// Chipify-safe base path resolution:
// - Uses a shared global to avoid duplicate identifier errors if the bundle executes twice.
// - Uses `var` so redeclaration is harmless.
// - Falls back to Vite's BASE_URL and strips trailing slash.
// eslint-disable-next-line no-var
var __chipifyBasePath = (globalThis as any).__chipifyBasePath
if (!__chipifyBasePath) {
  __chipifyBasePath = ((import.meta as any).env?.BASE_URL ?? '').replace(/\/$/, '')
  ;(globalThis as any).__chipifyBasePath = __chipifyBasePath
}
const basePath = __chipifyBasePath

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
