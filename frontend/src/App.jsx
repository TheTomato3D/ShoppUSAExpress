import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

import Wholesale from './pages/Wholesale'
import Box200 from './pages/Box200'
import VirtualStore from './pages/VirtualStore'


function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/catalogos/mayorista"
          element={<Wholesale />}
        />

        <Route
          path="/catalogos/caja-200"
          element={<Box200 />}
        />

        <Route
          path="/catalogos/tienda"
          element={<VirtualStore />}
        />

      </Routes>

      <Footer />

    </>
  )
}

export default App