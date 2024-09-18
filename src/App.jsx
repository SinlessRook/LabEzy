
import Code from "./components/Pages/Code"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [subject, setSubject] = useState('DS')
  return (
    <>
    <Routes>
        <Route path="/LabEzy/" element={<><Header currentSUB={subject} changedSUB={setSubject}/> <Hero currentSUB={subject}/></>} />
        <Route path="/LabEzy/Code/:file/:module" element={<><Header currentSUB={subject} changedSUB={setSubject}/> <Code/></>} />
      </Routes>
      
      
    </>
  )
}

export default App
