import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBooking from './components/AddBooking'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewAllBookings from './components/ViewAllBookings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddBooking/>} />
      <Route path='/view' element={<ViewAllBookings/>} />
     </Routes>
     </BrowserRouter>

          </>
  )
}

export default App



