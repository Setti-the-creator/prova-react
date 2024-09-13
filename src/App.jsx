import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'

export default function App() {
 

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/jokes' element={<Jokes/>}/> */}
      </Routes>
    </>
  )
}


