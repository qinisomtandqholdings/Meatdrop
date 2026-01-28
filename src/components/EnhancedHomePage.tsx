import { 
  ArrowRight, 
  ShoppingBag, 
  Gavel, 
  TrendingUp, 
  Shield, 
  Package, 
  Award,
  Zap,
  Users,
  Building2,
  Home as HomeIcon,
  Leaf,
  Lock,
  BarChart3
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EnhancedHomePageProps {
  onNavigate: (page: string) => void;
}

export function EnhancedHomePage({ onNavigate }: EnhancedHomePageProps) {
  const stats = [
    { label: "Total Volume", value: "R 2.8B", icon: BarChart3, color: "text-[#FFB81C]" },
    { label: "Active Users", value: "45,000+", icon: Users, color: "text-[#06B6D4]" },
    { label: "Verified Farms", value: "1,200+", icon: Shield, color: "text-green-600" },
    { label: "Transactions", value: "850K+", icon: Zap, color: "text-[#D62828]" },
  ];

  const features = [
    {
      icon: Lock,
      title: "Blockchain Secured",
      description: "All transactions verified on Ethereum mainnet with immutable records"
    },
    {
      icon: Shield,
      title: "Farm Verified",
      description: "Every seller undergoes rigorous verification and quality checks"
    },
    {
      icon: Package,
      title: "Cold-Chain Tracked",
      description: "Real-time temperature monitoring from farm to doorstep"
    },
    {
      icon: Award,
      title: "NFT Certificates",
      description: "Digital ownership certificates for premium livestock"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Premium Gradient */}
      <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#D62828]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative h-full max-w-[1600px] mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/20 mb-8 shadow-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFB81C] rounded-full blur-md opacity-50"></div>
                <div className="relative w-2.5 h-2.5 bg-[#FFB81C] rounded-full animate-pulse" />
              </div>
              <span className="text-white font-semibold tracking-wide">Powered by Ethereum Blockchain</span>
              <Badge className="bg-gradient-to-r from-[#FFB81C] to-[#D62828] text-white border-0 px-3 py-1 font-bold shadow-lg">
                WEB3
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
              Digital Livestock
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] via-[#D62828] to-[#A4161A]">
                Trading & Marketplace
              </span>
            </h1>

            <p className="text-white/90 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
              <span className="text-[#FFB81C] font-bold">Verified.</span>{" "}
              <span className="text-[#06B6D4] font-bold">Secured.</span>{" "}
              <span className="text-green-400 font-bold">Trusted.</span>
              <br />
              Blockchain-powered transparency from farm to table.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual Entry Points - B2B & B2C */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#FFB81C] text-black border-0 text-sm px-4 py-2 mb-4 font-bold">
              CHOOSE YOUR PATH
            </Badge>
            <h2 className="text-5xl font-bold mb-4">
              Built for <span className="text-[#D62828]">Business</span> & <span className="text-[#06B6D4]">Consumers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a enterprise buyer, farmer, or individual consumer, we have the perfect solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <Card className="group relative overflow-hidden border-4 border-[#D62828] hover:shadow-[0_0_60px_rgba(214,40,40,0.3)] transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D62828] opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardContent className="p-12 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#A4161A] rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-white" />
                </div>

                <Badge className="bg-[#D62828] text-white border-0 mb-4 text-sm px-4 py-1 font-bold">
                  B2B PLATFORM
                </Badge>

                <h3 className="text-4xl font-bold mb-4 group-hover:text-[#D62828] transition-colors">
                  Enterprise Livestock Trading
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Access live auctions, bulk orders, and wholesale pricing. Perfect for butchers, restaurants, and large-scale buyers.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: Gavel, text: "Live Blockchain Auctions", badge: "LIVE" },
                    { icon: Package, text: "Bulk Livestock Orders", badge: "HOT" },
                    { icon: TrendingUp, text: "Game Animal Tokens", badge: "NEW" },
                    { icon: Shield, text: "Verified Seller Network", badge: "✓" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 bg-[#D62828]/10 rounded-lg flex items-center justify-center group-hover/item:bg-[#D62828] transition-colors">
                        <feature.icon className="w-5 h-5 text-[#D62828] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-base flex-1">{feature.text}</span>
                      <Badge className="bg-[#FFB81C] text-black border-0 text-xs px-2 py-0.5 font-bold">
                        {feature.badge}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => onNavigate('auctions')}
                    className="w-full bg-gradient-to-r from-[#D62828] to-[#A4161A] hover:shadow-2xl text-white h-14 text-base font-bold group/btn"
                  >
                    Browse Live Auctions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    onClick={() => onNavigate('tokens')}
                    variant="outline"
                    className="w-full border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white h-14 text-base font-bold"
                  >
                    View Game Tokens
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* B2C Card */}
            <Card className="group relative overflow-hidden border-4 border-[#06B6D4] hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4] opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardContent className="p-12 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-10 h-10 text-white" />
                </div>

                <Badge className="bg-[#06B6D4] text-white border-0 mb-4 text-sm px-4 py-1 font-bold">
                  B2C MARKETPLACE
                </Badge>

                <h3 className="text-4xl font-bold mb-4 group-hover:text-[#06B6D4] transition-colors">
                  Premium Meat Marketplace
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Shop premium cuts, subscription boxes, and farm-to-table delivery. Traceability guaranteed on every order.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: Leaf, text: "Organic & Grass-Fed", badge: "🌿" },
                    { icon: Package, text: "Cold-Chain Delivery", badge: "❄️" },
                    { icon: Award, text: "NFT Traceability Certs", badge: "🏆" },
                    { icon: Shield, text: "Quality Guaranteed", badge: "✓" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 bg-[#06B6D4]/10 rounded-lg flex items-center justify-center group-hover/item:bg-[#06B6D4] transition-colors">
                        <feature.icon className="w-5 h-5 text-[#06B6D4] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-base flex-1">{feature.text}</span>
                      <span className="text-xl">{feature.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => onNavigate('marketplace')}
                    className="w-full bg-gradient-to-r from-[#06B6D4] to-[#0891B2] hover:shadow-2xl text-white h-14 text-base font-bold group/btn"
                  >
                    Shop Marketplace
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    onClick={() => onNavigate('consumer-dashboard')}
                    variant="outline"
                    className="w-full border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white h-14 text-base font-bold"
                  >
                    My Orders
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#D62828] to-[#A4161A] text-white border-0 text-sm px-4 py-2 mb-4 font-bold">
              ENTERPRISE-GRADE SECURITY
            </Badge>
            <h2 className="text-5xl font-bold mb-4">
              Why Choose <span className="text-[#D62828]">MeatDrop</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with fintech-grade security and Web3 technology for complete transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-[#D62828] cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#A4161A] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#D62828] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#D62828] to-[#A4161A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 text-center relative">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join 45,000+ users trading livestock and shopping premium meats on the blockchain
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('auth')}
              className="bg-white text-[#D62828] hover:bg-gray-100 px-10 py-7 text-lg font-bold shadow-2xl"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#D62828] px-10 py-7 text-lg font-bold"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


