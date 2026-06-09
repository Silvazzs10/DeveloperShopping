import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<h2>404 - Página Não Encontrada</h2>} />
    </Routes>
  )
}
