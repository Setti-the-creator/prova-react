import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './components/Footer'

export default function App() {
 

  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/jokes' element={<Jokes/>}/> */}
      </Routes>
      </main>
      <Footer/>
    </>
  )
}


