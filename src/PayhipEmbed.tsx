import './assets/PayhipEmbed.css'

interface PayhipEmbedProps {
    productKey: string
    className?: string
}

export function PayhipEmbed({ productKey, className = '' }: PayhipEmbedProps) {
    const payhipUrl = `https://payhip.com/b/${productKey}`

    return (
        <div className={`payhip-iframe-wrapper ${className}`}>
            <iframe
                src={payhipUrl}
                title="Product"
                className="payhip-iframe"
                frameBorder="0"
                scrolling="auto"
            />
        </div>
    )
}
