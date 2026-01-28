import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EnhancedHomePage } from "./components/EnhancedHomePage";
import { AuctionCard, AuctionData } from "./components/AuctionCard";
import { LivestockTokens } from "./components/LivestockTokens";
import { TokenPortfolio } from "./components/TokenPortfolio";
import { TransactionHistory } from "./components/TransactionHistory";
import { GameCoinInvestment } from "./components/GameCoinInvestment";
import { MeatMarketplace } from "./components/MeatMarketplace";
import { CartPage } from "./components/CartPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { QuickNavigation } from "./components/QuickNavigation";
import { Button } from "./components/ui/button";

type Page = 'home' | 'auctions' | 'marketplace' | 'tokens' | 'portfolio' | 'sellers' | 'consumers' | 'bids' | 'cart' | 'checkout' | 'orders' | 'seller-dashboard' | 'consumer-dashboard' | 'blockchain' | 'auth' | 'support' | 'transaction-history' | 'game-coin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItemCount] = useState(3);

  // Mock auction data with blockchain features - EASILY INTERCHANGEABLE
  const auctions: AuctionData[] = [
    // CATTLE AUCTIONS
    {
      id: "1",
      title: "Premium Angus Cattle - 45 Head",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "Riverside Ranch",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Riverside Ranch",
      reputation: 5,
      location: "Mpumalanga, South Africa",
      description: "Premium quality Angus cattle, grass-fed and grain-finished. All animals healthy, vaccinated, and ready for immediate delivery.",
      priceZAR: "ZAR 285,000",
      priceUSDC: "15,200 USDC",
      priceETH: "5.2 ETH",
      smartContract: "0x742d...bEb5",
      webcast: true,
      equipment: true,
      nftCertificate: true,
      itemCount: "45 Head",
    },
    {
      id: "2",
      title: "Brahman Bulls - Premium Breeding Stock",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "Golden Gate Livestock",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Golden Gate",
      reputation: 4,
      location: "Free State, South Africa",
      description: "Top quality Brahman breeding bulls, excellent genetics and temperament. Perfect for tropical and subtropical climates.",
      priceZAR: "ZAR 180,000",
      priceUSDC: "9,600 USDC",
      priceETH: "3.3 ETH",
      smartContract: "0x8a3f...c2d1",
      webcast: false,
      equipment: false,
      nftCertificate: true,
      itemCount: "12 Head",
    },
    {
      id: "3",
      title: "Hereford Heifers - Breeding Program",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "upcoming",
      verified: true,
      auctioneerName: "Highveld Farms",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Highveld",
      reputation: 5,
      location: "Gauteng, South Africa",
      description: "Young Hereford heifers from excellent bloodlines. Ideal for breeding programs with proven genetics.",
      priceZAR: "ZAR 420,000",
      priceUSDC: "22,400 USDC",
      priceETH: "7.7 ETH",
      smartContract: "0x9b2e...f8a4",
      webcast: true,
      equipment: true,
      nftCertificate: false,
      itemCount: "30 Head",
    },
    {
      id: "4",
      title: "Nguni Cattle - Heritage Breed Mix",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "KZN Heritage Cattle",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=KZN Heritage",
      reputation: 5,
      location: "KwaZulu-Natal, South Africa",
      description: "Traditional Nguni cattle, disease-resistant and heat-tolerant. Perfect for sustainable farming.",
      priceZAR: "ZAR 195,000",
      priceUSDC: "10,400 USDC",
      priceETH: "3.6 ETH",
      smartContract: "0x4f2a...d8b3",
      webcast: true,
      equipment: false,
      nftCertificate: true,
      itemCount: "25 Head",
    },

    // SHEEP & GOATS
    {
      id: "5",
      title: "Merino Sheep - Premium Wool Producers",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "Cape Wool Farms",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Cape Wool",
      reputation: 5,
      location: "Eastern Cape, South Africa",
      description: "High-quality Merino sheep, excellent wool production and meat quality. All ewes are pregnant.",
      priceZAR: "ZAR 145,000",
      priceUSDC: "7,750 USDC",
      priceETH: "2.7 ETH",
      smartContract: "0x7e3c...a9f2",
      webcast: false,
      equipment: true,
      nftCertificate: true,
      itemCount: "80 Head",
    },
    {
      id: "6",
      title: "Boer Goats - Breeding Stock",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "upcoming",
      verified: true,
      auctioneerName: "Limpopo Goat Breeders",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Limpopo Goat",
      reputation: 4,
      location: "Limpopo, South Africa",
      description: "Pure-bred Boer goats with excellent breeding records. Fast-growing meat producers.",
      priceZAR: "ZAR 85,000",
      priceUSDC: "4,540 USDC",
      priceETH: "1.6 ETH",
      smartContract: "0x3b9e...f7c4",
      webcast: true,
      equipment: false,
      nftCertificate: false,
      itemCount: "50 Head",
    },

    // DAIRY
    {
      id: "7",
      title: "Holstein Dairy Cows - High Producers",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "Green Pastures Dairy",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Green Pastures",
      reputation: 5,
      location: "Eastern Cape, South Africa",
      description: "Holstein dairy cows currently in milk production. Avg 35L/day. Excellent health records.",
      priceZAR: "ZAR 395,000",
      priceUSDC: "21,100 USDC",
      priceETH: "7.3 ETH",
      smartContract: "0x6e9c...b2f4",
      webcast: true,
      equipment: true,
      nftCertificate: true,
      itemCount: "20 Head",
    },
    {
      id: "8",
      title: "Jersey Cows - Boutique Dairy Herd",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "upcoming",
      verified: true,
      auctioneerName: "Artisan Dairy Collective",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Artisan Dairy",
      reputation: 5,
      location: "Western Cape, South Africa",
      description: "Premium Jersey cows, high butterfat milk ideal for artisan cheese production.",
      priceZAR: "ZAR 285,000",
      priceUSDC: "15,200 USDC",
      priceETH: "5.2 ETH",
      smartContract: "0x9d4f...e3a1",
      webcast: true,
      equipment: true,
      nftCertificate: true,
      itemCount: "15 Head",
    },

    // EXOTIC & GAME
    {
      id: "9",
      title: "Ostrich Breeding Pairs - Export Quality",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "Klein Karoo Ostrich Co.",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Klein Karoo",
      reputation: 5,
      location: "Western Cape, South Africa",
      description: "Certified breeding pairs, excellent leather and meat production. Export documentation included.",
      priceZAR: "ZAR 225,000",
      priceUSDC: "12,000 USDC",
      priceETH: "4.1 ETH",
      smartContract: "0x2c8a...f6d9",
      webcast: false,
      equipment: true,
      nftCertificate: true,
      itemCount: "10 Pairs",
    },
    {
      id: "10",
      title: "Mixed Game Package - Antelope Species",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "upcoming",
      verified: true,
      auctioneerName: "Bushveld Game Auctions",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Bushveld Game",
      reputation: 4,
      location: "Limpopo, South Africa",
      description: "Mixed antelope including impala, kudu, and springbok. Perfect for game farm stocking.",
      priceZAR: "ZAR 320,000",
      priceUSDC: "17,100 USDC",
      priceETH: "5.9 ETH",
      smartContract: "0x8f2e...c4b7",
      webcast: true,
      equipment: false,
      nftCertificate: true,
      itemCount: "35 Head",
    },

    // PIGS
    {
      id: "11",
      title: "Large White Pigs - Breeding Sows",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: true,
      auctioneerName: "Mpumalanga Pork Producers",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Mpumalanga Pork",
      reputation: 4,
      location: "Mpumalanga, South Africa",
      description: "Large White breeding sows, excellent mothering ability and litter size. All pregnant.",
      priceZAR: "ZAR 125,000",
      priceUSDC: "6,670 USDC",
      priceETH: "2.3 ETH",
      smartContract: "0x5a7d...e2f8",
      webcast: false,
      equipment: true,
      nftCertificate: false,
      itemCount: "40 Head",
    },
    {
      id: "12",
      title: "Duroc Boars - Premium Genetics",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "live",
      verified: false,
      auctioneerName: "Western Cape Pig Breeders",
      auctioneerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=WC Pig",
      reputation: 4,
      location: "Western Cape, South Africa",
      description: "Duroc boars with proven genetics for meat quality and growth rate. AI certificates available.",
      priceZAR: "ZAR 95,000",
      priceUSDC: "5,070 USDC",
      priceETH: "1.7 ETH",
      smartContract: "0x1b3e...a9c2",
      webcast: true,
      equipment: false,
      nftCertificate: false,
      itemCount: "8 Head",
    },
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleViewDetails = (id: string) => {
    // Navigate to auction details (to be implemented)
    console.log("View auction details:", id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartItemCount={cartItemCount}
        walletConnected={true}
      />

      {/* Home Page */}
      {currentPage === 'home' && (
        <EnhancedHomePage onNavigate={handleNavigate} />
      )}

      {/* Auctions Page (B2B) */}
      {currentPage === 'auctions' && (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Banner */}
          <section className="relative h-[400px] bg-gradient-to-r from-[#D62828] to-[#A4161A] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')]"></div>
            </div>
            <div className="relative h-full max-w-[1600px] mx-auto px-6 flex items-center">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-[#FFB81C] rounded-full animate-pulse" />
                  <span className="font-medium">Live Blockchain Auctions</span>
                </div>
                <h1 className="text-6xl font-bold mb-4">B2B Livestock Auctions</h1>
                <p className="text-xl text-white/90 mb-6">
                  Real-time bidding on verified livestock with blockchain transparency
                </p>
                <div className="flex gap-4">
                  <Button className="bg-white text-[#D62828] hover:bg-gray-100 px-8">
                    Register to Bid
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                    Become a Seller
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Auction Listings */}
          <section className="py-24">
            <div className="max-w-[1600px] mx-auto px-6">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Live & Upcoming Auctions</h2>
                  <p className="text-muted-foreground text-lg">Browse verified livestock auctions from trusted sellers</p>
                </div>
                <div className="flex gap-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-[#D62828] transition-colors">
                    <option>All Categories</option>
                    <option>Cattle</option>
                    <option>Sheep</option>
                    <option>Goats</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-[#D62828] transition-colors">
                    <option>All Locations</option>
                    <option>Gauteng</option>
                    <option>Mpumalanga</option>
                    <option>Free State</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {auctions.map((auction) => (
                  <AuctionCard 
                    key={auction.id}
                    auction={auction}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" className="border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white px-8 py-6">
                  Load More Auctions
                </Button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Livestock Tokens Page */}
      {currentPage === 'tokens' && (
        <LivestockTokens 
          onBuyToken={(id) => console.log('Buy token:', id)}
          onViewDetails={(id) => console.log('View details:', id)}
        />
      )}

      {/* Token Portfolio Page */}
      {currentPage === 'portfolio' && (
        <TokenPortfolio />
      )}

      {/* Transaction History Page */}
      {currentPage === 'transaction-history' && (
        <TransactionHistory />
      )}

      {/* Game Coin Investment Page */}
      {currentPage === 'game-coin' && (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Game Coin Investment Platform</h1>
              <p className="text-muted-foreground text-lg">
                Stake, earn returns, and participate in the MeatDrop ecosystem
              </p>
            </div>
            <GameCoinInvestment />
          </div>
        </div>
      )}

      {/* Meat Marketplace Page */}
      {currentPage === 'marketplace' && (
        <MeatMarketplace onNavigate={handleNavigate} />
      )}

      {/* Cart Page */}
      {currentPage === 'cart' && (
        <CartPage onNavigate={handleNavigate} />
      )}

      {/* Checkout Page */}
      {currentPage === 'checkout' && (
        <CheckoutPage onNavigate={handleNavigate} />
      )}

      {/* Placeholder for other pages */}
      {(currentPage !== 'home' && currentPage !== 'auctions' && currentPage !== 'tokens' && currentPage !== 'portfolio' && currentPage !== 'transaction-history' && currentPage !== 'game-coin' && currentPage !== 'marketplace' && currentPage !== 'cart' && currentPage !== 'checkout') && (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Quick Navigation Sidebar */}
              <div className="lg:col-span-1">
                <QuickNavigation 
                  currentPage={currentPage}
                  onNavigate={handleNavigate}
                />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="text-center py-24">
                  <h1 className="text-5xl font-bold mb-4">
                    {currentPage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Page
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    This section is under development
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => setCurrentPage('home')}
                      className="bg-[#D62828] hover:bg-[#A4161A] text-white px-8"
                    >
                      Back to Home
                    </Button>
                    <Button 
                      onClick={() => setCurrentPage('marketplace')}
                      variant="outline"
                      className="border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white px-8"
                    >
                      Browse Marketplace
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}