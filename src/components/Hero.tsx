import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Livestock background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1400px] mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#7BC043]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#7BC043] mb-6">
            <span className="w-2 h-2 bg-[#7BC043] rounded-full animate-pulse" />
            <span className="text-white">Live Auctions Available</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Digital Livestock Trading.<br />
            Verified. Secured. Fast.
          </h1>
          
          <p className="text-white/90 text-xl mb-8 leading-relaxed">
            Powered by blockchain transparency and real-time livestock data.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-[#7BC043] hover:bg-[#6AA037] text-white px-8 py-6 shadow-lg"
            >
              Browse Auctions
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('dashboard')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-6"
            >
              Register as Seller
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-[#7BC043] text-3xl font-semibold">2,400+</div>
              <div className="text-white/70">Active Listings</div>
            </div>
            <div>
              <div className="text-[#7BC043] text-3xl font-semibold">$12.5M</div>
              <div className="text-white/70">Total Volume</div>
            </div>
            <div>
              <div className="text-[#7BC043] text-3xl font-semibold">850+</div>
              <div className="text-white/70">Verified Sellers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


