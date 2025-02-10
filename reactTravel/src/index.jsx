
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header.jsx'
import { Entry  } from "./components/Entry.jsx"


createRoot(document.getElementById('root')).render(
 <>
  <Header/>
  <main className='container'>
  <Entry/>
  </main>
</>
)
