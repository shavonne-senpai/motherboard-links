import { Link } from 'react-router-dom'
import '../assets/ProductPage.css'
import { PayhipEmbed } from '../components/PayhipEmbed'

interface ProductPageProps {
    payhipKey: string
    title: string
}

export function ProductPage({ payhipKey, title }: ProductPageProps) {
    return (
        <div className="product-page">
            <div className="product-container">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    ← Back to all products
                </Link>

                {/* Page Title */}
                <h1 className="product-page-title">{title}</h1>

                {/* Payhip Embed */}
                <div className="product-embed-wrapper">
                    <PayhipEmbed productKey={payhipKey} />
                </div>
            </div>
        </div>
    )
}
