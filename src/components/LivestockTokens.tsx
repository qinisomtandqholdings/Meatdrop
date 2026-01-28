import { TrendingUp, MapPin, Award, Calendar, DollarSign, Users, Activity, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GasFeeOptimizer } from "./GasFeeOptimizer";

interface LivestockToken {
  id: string;
  name: string;
  symbol: string;
  image: string;
  animalType: string;
  farmLocation: string;
  farmName: string;
  totalSupply: number;
  availableTokens: number;
  pricePerToken: number;
  priceUSDC: number;
  currentValue: number;
  purchaseValue: number;
  growthPercentage: number;
  maturityDate: string;
  daysToMaturity: number;
  currentWeight: string;
  targetWeight: string;
  healthStatus: "excellent" | "good" | "fair";
  apy: number;
  holders: number;
  verified: boolean;
  nftCertificate: boolean;
  liveTracking: boolean;
}

interface LivestockTokensProps {
  onBuyToken: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export function LivestockTokens({ onBuyToken, onViewDetails }: LivestockTokensProps) {
  const tokens: LivestockToken[] = [
    {
      id: "1",
      name: "Impala Growth Fund",
      symbol: "IMPALA",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      animalType: "Impala",
      farmLocation: "Mpumalanga, South Africa",
      farmName: "Wildveld Game Ranch",
      totalSupply: 1000,
      availableTokens: 342,
      pricePerToken: 1850,
      priceUSDC: 99,
      currentValue: 2368,
      purchaseValue: 1850,
      growthPercentage: 28.0,
      maturityDate: "2025-08-15",
      daysToMaturity: 271,
      currentWeight: "45kg",
      targetWeight: "65kg",
      healthStatus: "excellent",
      apy: 48.5,
      holders: 127,
      verified: true,
      nftCertificate: true,
      liveTracking: true,
    },
    {
      id: "2",
      name: "Kudu Bulls Premium",
      symbol: "KUDU",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      animalType: "Greater Kudu",
      farmLocation: "Limpopo, South Africa",
      farmName: "Bushveld Trophy Ranch",
      totalSupply: 500,
      availableTokens: 89,
      pricePerToken: 12500,
      priceUSDC: 667,
      currentValue: 16250,
      purchaseValue: 12500,
      growthPercentage: 30.0,
      maturityDate: "2026-01-20",
      daysToMaturity: 429,
      currentWeight: "180kg",
      targetWeight: "280kg",
      healthStatus: "excellent",
      apy: 52.8,
      holders: 248,
      verified: true,
      nftCertificate: true,
      liveTracking: true,
    },
    {
      id: "3",
      name: "Springbok Herd Token",
      symbol: "SPRING",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      animalType: "Springbok",
      farmLocation: "Northern Cape, South Africa",
      farmName: "Karoo Game Reserve",
      totalSupply: 2000,
      availableTokens: 678,
      pricePerToken: 980,
      priceUSDC: 52,
      currentValue: 1274,
      purchaseValue: 980,
      growthPercentage: 30.0,
      maturityDate: "2025-06-30",
      daysToMaturity: 225,
      currentWeight: "32kg",
      targetWeight: "48kg",
      healthStatus: "excellent",
      apy: 44.2,
      holders: 412,
      verified: true,
      nftCertificate: true,
      liveTracking: true,
    },
    {
      id: "4",
      name: "Eland Trophy Fund",
      symbol: "ELAND",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      animalType: "Eland Antelope",
      farmLocation: "Eastern Cape, South Africa",
      farmName: "Savanna Elite Game Farm",
      totalSupply: 300,
      availableTokens: 45,
      pricePerToken: 18500,
      priceUSDC: 987,
      currentValue: 24050,
      purchaseValue: 18500,
      growthPercentage: 30.0,
      maturityDate: "2026-03-15",
      daysToMaturity: 483,
      currentWeight: "420kg",
      targetWeight: "650kg",
      healthStatus: "excellent",
      apy: 56.3,
      holders: 156,
      verified: true,
      nftCertificate: true,
      liveTracking: true,
    },
    {
      id: "5",
      name: "Wildebeest Breeding Shares",
      symbol: "WILDE",
      image: "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      animalType: "Blue Wildebeest",
      farmLocation: "Free State, South Africa",
      farmName: "Highveld Game Conservancy",
      totalSupply: 800,
      availableTokens: 234,
      pricePerToken: 4200,
      priceUSDC: 224,
      currentValue: 5544,
      purchaseValue: 4200,
      growthPercentage: 32.0,
      maturityDate: "2025-09-10",
      daysToMaturity: 297,
      currentWeight: "160kg",
      targetWeight: "240kg",
      healthStatus: "excellent",
      apy: 50.1,
      holders: 289,
      verified: true,
      nftCertificate: true,
      liveTracking: true,
    },
    {
      id: "6",
      name: "Sable Antelope Elite",
      symbol: "SABLE",
      image: "https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      animalType: "Sable Antelope",
      farmLocation: "Limpopo, South Africa",
      farmName: "Platinum Game Reserve",
      totalSupply: 200,
      availableTokens: 28,
      pricePerToken: 32000,
      priceUSDC: 1707,
      currentValue: 44800,
      purchaseValue: 32000,
      growthPercentage: 40.0,
      maturityDate: "2026-05-20",
      daysToMaturity: 549,
      currentWeight: "195kg",
      targetWeight: "280kg",
      healthStatus: "excellent",
      apy: 62.5,
      holders: 98,
      verified: true,
      nftCertificate: true,
      liveTracking: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-[#D62828] via-[#A4161A] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Livestock"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative h-full max-w-[1600px] mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-[#FFB81C]/20 backdrop-blur-sm px-5 py-3 rounded-full border border-[#FFB81C] mb-6">
              <div className="w-2 h-2 bg-[#FFB81C] rounded-full animate-pulse" />
              <span className="text-white font-medium">Tokenized Game Animal Investment</span>
              <Badge className="bg-[#FFB81C] text-black border-0 px-3">RWA</Badge>
            </div>

            <h1 className="text-white text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Own African Game Animals From Anywhere
            </h1>
            
            <p className="text-white/90 text-2xl mb-8 leading-relaxed">
              Invest in tokenized game animals raised on premium South African game farms. Earn passive income from trophy sales, breeding, and ecotourism.
            </p>

            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-[#FFB81C] text-4xl font-bold mb-1">44-62%</div>
                <div className="text-white/70 text-sm">Avg. APY</div>
              </div>
              <div>
                <div className="text-[#06B6D4] text-4xl font-bold mb-1">1,334+</div>
                <div className="text-white/70 text-sm">Token Holders</div>
              </div>
              <div>
                <div className="text-[#1AA34A] text-4xl font-bold mb-1">R 38M+</div>
                <div className="text-white/70 text-sm">Total Value Locked</div>
              </div>
              <div>
                <div className="text-white text-4xl font-bold mb-1">100%</div>
                <div className="text-white/70 text-sm">Blockchain Secured</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-white text-[#D62828] hover:bg-gray-100 px-8 py-7 text-lg">
                Browse Game Tokens
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8 py-7 text-lg">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Token Listings */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Live Game Animal Tokens</h2>
              <p className="text-muted-foreground text-lg">Invest in premium African game, earn trophy & breeding returns</p>
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-[#D62828] transition-colors">
                <option>All Game</option>
                <option>Antelope</option>
                <option>Trophy Game</option>
                <option>Breeding Stock</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-[#D62828] transition-colors">
                <option>Sort by APY</option>
                <option>Sort by Price</option>
                <option>Sort by Maturity</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tokens Grid - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {tokens.map((token) => (
                <Card key={token.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#D62828]">
                  <div className="flex">
                    {/* Image */}
                    <div className="w-2/5 relative">
                      <ImageWithFallback 
                        src={token.image}
                        alt={token.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {token.verified && (
                          <Badge className="bg-[#FFB81C] text-black border-0 shadow-lg">
                            <Award className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        {token.liveTracking && (
                          <Badge className="bg-[#06B6D4] text-white border-0 shadow-lg">
                            <Activity className="w-3 h-3 mr-1" />
                            Live Tracking
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-[#D62828]">{token.symbol}</h3>
                            <Badge variant="outline" className="border-[#1AA34A] text-[#1AA34A]">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              +{token.growthPercentage}%
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{token.name}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">R {token.pricePerToken}</div>
                          <div className="text-xs text-muted-foreground">${token.priceUSDC} USDC</div>
                        </div>
                      </div>

                      {/* Animal Type & Location */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Animal:</span>
                          <span className="font-semibold">{token.animalType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{token.farmName}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{token.farmLocation}</div>
                      </div>

                      {/* Growth Progress */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground">Growth Progress</span>
                          <span className="text-xs font-semibold">{token.currentWeight} / {token.targetWeight}</span>
                        </div>
                        <Progress 
                          value={(parseInt(token.currentWeight) / parseInt(token.targetWeight)) * 100} 
                          className="h-2"
                        />
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-[#FFB81C]/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-[#FFB81C]">{token.apy}%</div>
                          <div className="text-xs text-muted-foreground">APY</div>
                        </div>
                        <div className="bg-[#06B6D4]/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-[#06B6D4]">{token.daysToMaturity}</div>
                          <div className="text-xs text-muted-foreground">Days Left</div>
                        </div>
                        <div className="bg-[#1AA34A]/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-[#1AA34A]">{token.holders}</div>
                          <div className="text-xs text-muted-foreground">Holders</div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Available Tokens</span>
                          <span className="font-semibold">
                            {token.availableTokens.toLocaleString()} / {token.totalSupply.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-[#D62828] hover:bg-[#A4161A] text-white"
                          onClick={() => onBuyToken(token.id)}
                        >
                          Buy {token.symbol}
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white"
                          onClick={() => onViewDetails(token.id)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Content */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <CardHeader className="text-xl font-bold mb-4">Why Invest in Livestock Tokens?</CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Award className="w-5 h-5 text-[#FFB81C]" />
                    <p className="text-sm text-muted-foreground">High APYs from trophy sales and breeding</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-[#FFB81C]" />
                    <p className="text-sm text-muted-foreground">Invest in premium South African game farms</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Activity className="w-5 h-5 text-[#FFB81C]" />
                    <p className="text-sm text-muted-foreground">Live tracking and health monitoring</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <ArrowUpRight className="w-5 h-5 text-[#FFB81C]" />
                    <p className="text-sm text-muted-foreground">Sell tokens at maturity or trade anytime</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">How Livestock Tokenization Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Invest in real livestock from anywhere, earn returns as they grow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D62828]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-[#D62828]" />
              </div>
              <div className="text-4xl font-bold text-[#D62828] mb-2">1</div>
              <h3 className="font-bold text-xl mb-3">Buy Tokens</h3>
              <p className="text-muted-foreground">
                Purchase tokens representing real livestock on verified South African farms
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFB81C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-[#FFB81C]" />
              </div>
              <div className="text-4xl font-bold text-[#FFB81C] mb-2">2</div>
              <h3 className="font-bold text-xl mb-3">Animals Grow</h3>
              <p className="text-muted-foreground">
                Professional farmers raise your livestock with live tracking and health monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-[#06B6D4]" />
              </div>
              <div className="text-4xl font-bold text-[#06B6D4] mb-2">3</div>
              <h3 className="font-bold text-xl mb-3">Track Value</h3>
              <p className="text-muted-foreground">
                Monitor weight gain, health status, and value appreciation in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1AA34A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="w-10 h-10 text-[#1AA34A]" />
              </div>
              <div className="text-4xl font-bold text-[#1AA34A] mb-2">4</div>
              <h3 className="font-bold text-xl mb-3">Earn Returns</h3>
              <p className="text-muted-foreground">
                Sell tokens at maturity or trade anytime on the blockchain marketplace
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}