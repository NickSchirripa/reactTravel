
import { Header } from './components/Header.jsx'
import { Entry  } from "./components/Entry.jsx"
import data from "../data.js"

export function App(){

const characterData = data.map((chars)=>{
    return(
        <Entry 
        img = {chars.img}
        alt = {chars.img.alt}
        country = {chars.country}
        name = {chars.name}
        text= {chars.text}
        birthday = {chars.date}
        />
    )
})

    return(
        <>
            <Header/>
            <main className='container'>
                {characterData}
            </main>
        </>
            )
        }