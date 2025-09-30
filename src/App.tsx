import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/0-6" element={<ProductPage payhipKey="Jd5oP" title="0–6 Month Edition" />} />
                <Route path="/6-12" element={<ProductPage payhipKey="3ENLU" title="6–12 Month Edition" />} />
                <Route path="/12-36" element={<ProductPage payhipKey="OjF08" title="12–36 Month Edition" />} />
                <Route path="/mom" element={<ProductPage payhipKey="o6eiR" title="Mom Edition" />} />
                <Route path="/sampler" element={<ProductPage payhipKey="XXXXXX" title="Free Sampler" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
