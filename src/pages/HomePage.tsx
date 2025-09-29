import { Link } from 'react-router-dom'
import '../assets/HomePage.css'

interface ProductLink {
    title: string
    description: string
    path: string
    badge?: string
    image?: string
}

interface ResourceLink {
    title: string
    subtitle: string
    url: string
}

export function HomePage() {
    const products: ProductLink[] = [
        {
            title: "The Vault",
            description: "Searchable library of ChatGPT prompts for every chaotic parenting moment",
            path: "/vault",
            image: "/vault-preview.jpg"
        },
        {
            title: "Free Prompt Sampler",
            description: "Try before you buy — 10 most-used prompts",
            path: "/sampler",
            badge: "Free"
        },
        {
            title: "Prompt Pack (PDF)",
            description: "One-time download, organized by situation",
            path: "/pack"
        }
    ]

    const resources: ResourceLink[] = [
        {
            title: "ChatGPT Quick Start Guide",
            subtitle: "Never used AI? Start here",
            url: "#guide"
        },
        {
            title: "Blog / Use Cases",
            subtitle: "Real examples + screenshots",
            url: "#blog"
        }
    ]

    const social = {
        instagram: "https://instagram.com/motherboardhq",
        tiktok: "https://tiktok.com/@motherboardhq",
        email: "mailto:hello@motherboardhq.com"
    }

    return (
        <div className="home-page">
            <div className="container">
                {/* Header */}
                <header className="header">
                    <div className="logo">🧠</div>
                    <h1>Chaos-coded prompts for moms doing too f*cking much</h1>
                    <p className="tagline">
                        AI won’t fix your life. But it can help you meal plan while your toddler bites you.
                        Built by a Black mom drowning in diapers, dev work, and dirty dishes.
                        Try 5 free prompts. Or grab the full chaos system.
                    </p>
                </header>

                {/* Products Grid */}
                <section className="products-grid">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            to={product.path}
                            className={`product-link-card ${index === 0 ? 'featured' : ''}`}
                        >
                            {product.badge && <span className="product-badge">{product.badge}</span>}

                            {product.image && (
                                <div className="product-preview-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                            )}

                            <div className="product-link-content">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <span className="view-details">View Details →</span>
                            </div>
                        </Link>
                    ))}
                </section>

                {/* Resources Section */}
                <section className="links-section">
                    <h2 className="section-title">Resources</h2>
                    {resources.map((link, index) => (
                        <a key={index} href={link.url} className="link-button">
                            <div className="link-content">
                                <div className="link-title">{link.title}</div>
                                <div className="link-subtitle">{link.subtitle}</div>
                            </div>
                            <div className="link-arrow">→</div>
                        </a>
                    ))}
                </section>

                {/* Connect Section */}
                <section className="links-section">
                    <h2 className="section-title">Connect</h2>
                    <a href="#email" className="link-button">
                        <div className="link-content">
                            <div className="link-title">Join the Email List</div>
                            <div className="link-subtitle">Weekly prompts + chaos survival tips</div>
                        </div>
                        <div className="link-arrow">→</div>
                    </a>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="social-links">
                        <a href={social.instagram}>Instagram</a>
                        <a href={social.tiktok}>TikTok</a>
                        <a href={social.email}>Email</a>
                    </div>
                    <div className="copyright">© 2025 Motherboard HQ</div>
                </footer>
            </div>
        </div>
    )
}
