
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header.jsx'
import { Entry  } from "./components/Entry.jsx"
import { App }  from "./App.jsx"

createRoot(document.getElementById('root')).render(<App />)