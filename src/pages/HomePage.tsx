import { Link } from 'react-router-dom';
import '../assets/HomePage.css';
import img0to6 from '../images/0to6.png';
import img12to36 from '../images/12to36.png';
import img6to12 from '../images/6to12.png';
import imgMom from '../images/mom.png';

interface ProductLink {
  title: string
  description: string
  path: string
  badge?: string
  image?: string
}

//interface ResourceLink {
  //title: string
  //subtitle: string
  //url: string
//}

export function HomePage() {
  const products: ProductLink[] = [
    {
      title: '0–6 Month Edition',
      description: 'Prompts for foggy nights, contact naps, and 2AM spirals.',
      path: '/0-6',
      image: img0to6
    },
    {
      title: '6–12 Month Edition',
      description: 'Solids, sleep regressions, and why is everyone crying?',
      path: '/6-12',
      image: img6to12
    },
    {
      title: '12–36 Month Edition',
      description: 'Big feelings. Small humans. No instructions. This helps.',
      path: '/12-36',
      image: img12to36
    },
    {
      title: 'Mom Edition',
      description: 'Prompts for your brain, not your baby. Mental load relief.',
      path: '/mom',
      image: imgMom
    },
  ]

  //const resources: ResourceLink[] = [
    //{
      //title: 'AI Quick Start for Moms',
      //subtitle: 'Zero jargon. Just copy-paste and survive.',
      //url: '#guide'
    //},
    //{
      //title: 'Prompt Demos + Use Cases',
      //subtitle: 'Real chaos. Real screenshots.',
      //url: '#blog'
    //}
  //]

  const social = {
    instagram: 'https://instagram.com/motherboardhq',
    tiktok: 'https://tiktok.com/@motherboardhq',
    email: 'mailto:support@motherboardhq.com'
  }

  return (
    <div className="home-page">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">MHQ</div>
          <h1>Survival scripts for moms spiraling in real-time</h1>
          <p className="tagline">
            Nova won't fix your life. But she might keep you from cry-folding laundry at midnight.
            <br />
            Built by a tired Black mom with dev skills, a baby monitor, and one brain cell left.
            <br />
            Try 5 free prompts. Or grab the full meltdown vault.
          </p>

          {/* CTA Block */}
          <a href="https://motherboardhq.kit.com/955a888096" className="main-cta">
            <div className="label">Freebie</div>
            <div className="title">Try the Chaos Sampler</div>
            <div className="description">5 emotional support prompts from the Mom Vault. Zero strings.</div>
          </a>
        </header>

        {/* Products Grid */}
        <section className="products-grid">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="product-link-card"
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
                <span className="view-details">Open the vault →</span>
              </div>
            </Link>
          ))}
        </section>

        {/* Resources */}
        {/* <section className="links-section">
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
        </section> */}

        {/* Connect */}
        {/* <section className="links-section">
          <h2 className="section-title">Connect</h2>
          <a href="#email" className="link-button">
            <div className="link-content">
              <div className="link-title">Join the Email List</div>
              <div className="link-subtitle">Weekly prompts, parenting spirals, survival tools</div>
            </div>
            <div className="link-arrow">→</div>
          </a>
        </section> */}

        {/* Footer */}
        <footer className="footer">
          <div className="social-links">
            <a href={social.instagram}>Instagram</a>
            {/* <a href={social.tiktok}>TikTok</a> */}
            <a href={social.email}>Email</a>
          </div>
          <div className="copyright">© 2025 Motherboard HQ</div>
        </footer>
      </div>
    </div>
  )
}
