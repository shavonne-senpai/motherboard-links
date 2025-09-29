import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/vault"
                    element={<ProductPage payhipKey="Jd5oP" title="The Vault" />}
                />
                <Route
                    path="/sampler"
                    element={<ProductPage payhipKey="YOUR_SAMPLER_KEY" title="Free Prompt Sampler" />}
                />
                <Route
                    path="/pack"
                    element={<ProductPage payhipKey="YOUR_PACK_KEY" title="Prompt Pack" />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
