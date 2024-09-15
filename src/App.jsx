
import Header from "./components/Header"
import Hero from "./components/Hero"
import { useState } from 'react'
function App() {
  const [subject, setSubject] = useState('DS')
  return (
    <>
    <Header currentSUB={subject} changedSUB={setSubject}/>
    <Hero currentSUB={subject}/>
      
    </>
  )
}

export default App
