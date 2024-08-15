import { useState } from 'react'
import './App.css'

import { Navbar } from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
