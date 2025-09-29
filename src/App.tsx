import './App.css'

interface Link {
    title: string
    subtitle: string
    url: string
    isFree?: boolean
}

interface MainOffer {
    label: string
    title: string
    description: string
    url: string
}

interface SocialLinks {
    instagram: string
    tiktok: string
    email: string
}

interface Links {
    mainOffer: MainOffer
    startHere: Link[]
    resources: Link[]
    connect: Link[]
    social: SocialLinks
}

function App() {
    const links: Links = {
        mainOffer: {
            label: "⚡ Main Offer",
            title: "The Vault",
            description: "Searchable library of ChatGPT prompts for every chaotic parenting moment",
            url: "#vault" // Replace with actual URL
        },
        startHere: [
            {
                title: "Free Prompt Sampler",
                subtitle: "Try before you buy — 10 most-used prompts",
                url: "#sampler", // Replace with actual URL
                isFree: true
            },
            {
                title: "Prompt Pack (PDF)",
                subtitle: "One-time download, organized by situation",
                url: "#pack" // Replace with actual URL
            }
        ],
        resources: [
            {
                title: "ChatGPT Quick Start Guide",
                subtitle: "Never used AI? Start here",
                url: "#guide" // Replace with actual URL
            },
            {
                title: "Blog / Use Cases",
                subtitle: "Real examples + screenshots",
                url: "#blog" // Replace with actual URL
            }
        ],
        connect: [
            {
                title: "Join the Email List",
                subtitle: "Weekly prompts + chaos survival tips",
                url: "#email" // Replace with actual URL
            }
        ],
        social: {
            instagram: "#", // Replace with actual URL
            tiktok: "#", // Replace with actual URL
            email: "mailto:hello@motherboardhq.com" // Replace with actual email
        }
    }

    return (
        <div className="app">
            <div className="container">
                {/* Header */}
                <header className="header">
                    <div className="logo">🧠</div>
                    <h1>Motherboard HQ</h1>
                    <p className="tagline">
                        ChatGPT prompts for moms who are tired of being everyone's human database
                    </p>
                </header>

                {/* Main CTA */}
                <a href={links.mainOffer.url} className="main-cta">
                    <div className="label">{links.mainOffer.label}</div>
                    <div className="title">{links.mainOffer.title}</div>
                    <div className="description">{links.mainOffer.description}</div>
                </a>

                {/* Start Here Section */}
                <section className="links-section">
                    <h2 className="section-title">Start Here</h2>
                    {links.startHere.map((link, index) => (
                        <a key={index} href={link.url} className="link-button">
                            <div className="link-content">
                                <div className="link-title">
                                    {link.title}
                                    {link.isFree && <span className="free-badge">Free</span>}
                                </div>
                                <div className="link-subtitle">{link.subtitle}</div>
                            </div>
                            <div className="link-arrow">→</div>
                        </a>
                    ))}
                </section>

                {/* Resources Section */}
                <section className="links-section">
                    <h2 className="section-title">Resources</h2>
                    {links.resources.map((link, index) => (
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
                    {links.connect.map((link, index) => (
                        <a key={index} href={link.url} className="link-button">
                            <div className="link-content">
                                <div className="link-title">{link.title}</div>
                                <div className="link-subtitle">{link.subtitle}</div>
                            </div>
                            <div className="link-arrow">→</div>
                        </a>
                    ))}
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="social-links">
                        <a href={links.social.instagram}>Instagram</a>
                        <a href={links.social.tiktok}>TikTok</a>
                        <a href={links.social.email}>Email</a>
                    </div>
                    <div className="copyright">© 2025 Motherboard HQ</div>
                </footer>
            </div>
        </div>
    )
}

export default App
