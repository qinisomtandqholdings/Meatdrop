import { ArrowRight, ShoppingBag, Gavel, TrendingUp, Shield, Package, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Livestock"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative h-full max-w-[1600px] mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            {/* Blockchain Badge */}
            <div className="inline-flex items-center gap-3 bg-[#FFB81C]/20 backdrop-blur-sm px-5 py-3 rounded-full border border-[#FFB81C] mb-6">
              <div className="w-2 h-2 bg-[#FFB81C] rounded-full animate-pulse" />
              <span className="text-white font-medium">Powered by Ethereum Blockchain</span>
              <Badge className="bg-[#FFB81C] text-black border-0 px-3">Web3</Badge>
            </div>

            {/* Headline */}
            <h1 className="text-white text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Digital Livestock Trading & Meat Marketplace
            </h1>
            
            <p className="text-white/90 text-2xl mb-8 leading-relaxed">
              <span className="text-[#D62828] font-semibold">Verified.</span> <span className="text-[#FFB81C] font-semibold">Secured.</span> <span className="text-[#06B6D4] font-semibold">Trusted.</span>
              <br />
              Blockchain-powered transparency from farm to table.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                size="lg"
                onClick={() => onNavigate('tokens')}
                className="bg-[#FFB81C] hover:bg-[#E5A618] text-black px-8 py-7 text-lg shadow-2xl group font-bold"
              >
                🦌 Invest in Game Tokens
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                onClick={() => onNavigate('auctions')}
                className="bg-[#D62828] hover:bg-[#A4161A] text-white px-8 py-7 text-lg shadow-2xl group"
              >
                Browse Auctions (B2B)
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                onClick={() => onNavigate('marketplace')}
                className="bg-white text-[#1A1A1A] hover:bg-gray-100 px-8 py-7 text-lg shadow-2xl group"
              >
                Shop Marketplace (B2C)
                <ShoppingBag className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-[#D62828] text-4xl font-bold mb-1">2,400+</div>
                <div className="text-white/70">Active Listings</div>
              </div>
              <div>
                <div className="text-[#FFB81C] text-4xl font-bold mb-1">R 45M+</div>
                <div className="text-white/70">Monthly Volume</div>
              </div>
              <div>
                <div className="text-[#06B6D4] text-4xl font-bold mb-1">850+</div>
                <div className="text-white/70">Verified Sellers</div>
              </div>
              <div>
                <div className="text-[#1AA34A] text-4xl font-bold mb-1">98%</div>
                <div className="text-white/70">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Marketplace Entry */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Choose Your Platform</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a business buyer or individual consumer, we have the perfect solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D62828] group cursor-pointer" onClick={() => onNavigate('auctions')}>
              <div className="relative h-64 bg-gradient-to-br from-[#D62828] to-[#A4161A] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="B2B"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Gavel className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold">B2B Platform</h3>
                    <p className="text-white/90 mt-2">Business Solutions</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Live Auctions</div>
                      <div className="text-sm text-muted-foreground">Real-time blockchain bidding</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Bulk Orders</div>
                      <div className="text-sm text-muted-foreground">Direct from farmers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Seller Dashboard</div>
                      <div className="text-sm text-muted-foreground">Full management tools</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Transport Logistics</div>
                      <div className="text-sm text-muted-foreground">End-to-end delivery</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-[#D62828] hover:bg-[#A4161A] text-white py-6 group-hover:shadow-lg transition-shadow">
                  Enter B2B Platform
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* B2C Card */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D62828] group cursor-pointer" onClick={() => onNavigate('marketplace')}>
              <div className="relative h-64 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1677367306400-d090b5ab52d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3RlYWslMjBiZWVmJTIwY3V0c3xlbnwxfHx8fDE3NjMzODY1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="B2C"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingBag className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold">B2C Marketplace</h3>
                    <p className="text-white/90 mt-2">Consumer Shop</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Premium Meat Cuts</div>
                      <div className="text-sm text-muted-foreground">Curated selection</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Farm-to-Table</div>
                      <div className="text-sm text-muted-foreground">Direct sourcing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Cold-Chain Delivery</div>
                      <div className="text-sm text-muted-foreground">Fresh guarantee</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D62828]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D62828]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">NFT Certificates</div>
                      <div className="text-sm text-muted-foreground">Blockchain traceability</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-[#D62828] hover:bg-[#A4161A] text-white py-6 group-hover:shadow-lg transition-shadow">
                  Shop Marketplace
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Blockchain-Powered Trust</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every transaction secured, verified, and transparent on the Ethereum blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-20 h-20 bg-[#D62828]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[#D62828]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Blockchain Verified</h3>
              <p className="text-muted-foreground">
                All transactions secured and verified on-chain for complete transparency
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-20 h-20 bg-[#FFB81C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[#FFB81C]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Smart Contracts</h3>
              <p className="text-muted-foreground">
                Automated escrow and payment systems protect both buyers and sellers
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-20 h-20 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-[#06B6D4]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Full Traceability</h3>
              <p className="text-muted-foreground">
                Complete product history from farm to delivery stored permanently
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-20 h-20 bg-[#1AA34A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-[#1AA34A]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Real-Time Data</h3>
              <p className="text-muted-foreground">
                Live pricing, gas fees, and market analytics powered by Web3
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

