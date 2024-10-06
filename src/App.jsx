import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './component/Navbar'
import { Hero } from './component/Hero'
import { Analytics } from './component/Analytics'
import { Newsletter } from './component/Newsletter'
import { Cards } from './component/Cards'
import { Footer } from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Analytics></Analytics>
        <Newsletter></Newsletter>
        <Cards></Cards>
        <Footer></Footer>
    </>
  )
}

export default App
