
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
        <Route path="/LabEzy/" element={<><Header currentSUB={subject} changedSUB={setSubject} main_page={true}/> <Hero currentSUB={subject}/></>} />
        <Route path="/LabEzy/Code/:file/:module" element={<><Header currentSUB={subject} changedSUB={setSubject} main_page={false}/> <Code currentSUB={subject}/></>} />
      </Routes>
      
      
    </>
  )
}

export default App
