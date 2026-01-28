import { MapPin, Clock, Users, Shield, ExternalLink, Share2, Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";

interface AuctionDetailsProps {
  onBack: () => void;
}

export function AuctionDetails({ onBack }: AuctionDetailsProps) {
  const images = [
    "https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2MzM4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1761494511861-1bbb9f21ed10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwY2F0dGxlJTIwaGVyZHxlbnwxfHx8fDE3NjMzODM2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const bidHistory = [
    { bidder: "0x7A4e...29Bc", amount: "ZAR 285,000", time: "2 minutes ago" },
    { bidder: "0x9F2d...48Ae", amount: "ZAR 280,000", time: "8 minutes ago" },
    { bidder: "0x3C5b...17Fd", amount: "ZAR 275,000", time: "15 minutes ago" },
    { bidder: "0x8E1a...92Cd", amount: "ZAR 270,000", time: "22 minutes ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 hover:bg-white"
        >
          ← Back to Auctions
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Carousel */}
            <Card className="overflow-hidden">
              <div className="relative h-[500px]">
                <ImageWithFallback 
                  src={images[0]}
                  alt="Auction lot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-[#06B6D4] text-white border-0 shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    Live Auction
                  </Badge>
                  <Badge className="bg-[#FFB81C] text-white border-0 shadow-lg">
                    Blockchain Verified
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Auction Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-3xl text-[#7BC043] mb-2">
                      Premium Angus Cattle - 45 Head
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Mpumalanga, South Africa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>23 Active Bidders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                    <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7BC043] data-[state=active]:bg-transparent">
                      Lot Details
                    </TabsTrigger>
                    <TabsTrigger value="weight" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7BC043] data-[state=active]:bg-transparent">
                      Weight Records
                    </TabsTrigger>
                    <TabsTrigger value="health" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7BC043] data-[state=active]:bg-transparent">
                      Health & Vet Records
                    </TabsTrigger>
                    <TabsTrigger value="seller" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7BC043] data-[state=active]:bg-transparent">
                      Seller Profile
                    </TabsTrigger>
                    <TabsTrigger value="blockchain" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7BC043] data-[state=active]:bg-transparent">
                      Blockchain
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="mt-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Breed</div>
                          <div className="font-semibold">Angus</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Quantity</div>
                          <div className="font-semibold">45 Head</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Average Age</div>
                          <div className="font-semibold">18-24 months</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Average Weight</div>
                          <div className="font-semibold">550kg</div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Description</div>
                        <p>Premium quality Angus cattle, grass-fed and grain-finished. All animals are healthy, vaccinated, and ready for immediate delivery. Comprehensive health certificates and documentation included. Suitable for breeding or finishing.</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Grass-Fed</Badge>
                        <Badge variant="secondary">Vaccinated</Badge>
                        <Badge variant="secondary">Health Certified</Badge>
                        <Badge variant="secondary">Immediate Delivery</Badge>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="weight" className="mt-6">
                    <div className="space-y-3">
                      {[
                        { date: "Nov 10, 2024", weight: "550kg", status: "Current" },
                        { date: "Oct 15, 2024", weight: "525kg", status: "Previous" },
                        { date: "Sep 12, 2024", weight: "495kg", status: "Previous" },
                      ].map((record, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-semibold">{record.weight}</div>
                            <div className="text-sm text-muted-foreground">{record.date}</div>
                          </div>
                          <Badge variant={record.status === "Current" ? "default" : "secondary"} className={record.status === "Current" ? "bg-[#7BC043]" : ""}>
                            {record.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="health" className="mt-6">
                    <div className="space-y-3">
                      {[
                        { item: "Brucellosis Test", status: "Negative", date: "Nov 1, 2024" },
                        { item: "Tuberculosis Test", status: "Negative", date: "Nov 1, 2024" },
                        { item: "General Health Check", status: "Passed", date: "Oct 28, 2024" },
                        { item: "Vaccination Records", status: "Up to Date", date: "Oct 15, 2024" },
                      ].map((record, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-semibold">{record.item}</div>
                            <div className="text-sm text-muted-foreground">{record.date}</div>
                          </div>
                          <Badge className="bg-green-500 text-white border-0">
                            {record.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="seller" className="mt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16 border-2 border-[#7BC043]">
                        <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Riverside Ranch" />
                        <AvatarFallback className="bg-[#7BC043] text-white">RR</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Riverside Ranch</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Established cattle farm with 30+ years of experience in premium livestock production.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className="text-2xl font-semibold text-[#7BC043]">4.8/5</div>
                            <div className="text-sm text-muted-foreground">Rating</div>
                          </div>
                          <div>
                            <div className="text-2xl font-semibold text-[#7BC043]">187</div>
                            <div className="text-sm text-muted-foreground">Sales</div>
                          </div>
                          <div>
                            <div className="text-2xl font-semibold text-[#7BC043]">98%</div>
                            <div className="text-sm text-muted-foreground">Positive</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="blockchain" className="mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 p-4 bg-green-50 rounded-lg border border-green-200">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-semibold">Blockchain Verified Auction</span>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Smart Contract Address</div>
                        <div className="flex items-center gap-2 font-mono text-sm bg-gray-50 p-3 rounded-lg">
                          <span className="flex-1">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5</span>
                          <ExternalLink className="w-4 h-4 text-[#7BC043] cursor-pointer" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Recent Transactions</div>
                        <div className="space-y-2">
                          {[
                            { type: "Bid Placed", hash: "0x8f3e...a2c1", time: "2 min ago" },
                            { type: "Listing Created", hash: "0x2b7d...f4e9", time: "2 hours ago" },
                          ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm">
                              <div>
                                <div className="font-semibold">{tx.type}</div>
                                <div className="text-muted-foreground font-mono">{tx.hash}</div>
                              </div>
                              <div className="text-muted-foreground">{tx.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Bid Panel */}
          <div className="space-y-6">
            {/* Auction Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Auction Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Countdown */}
                <div className="bg-[#7BC043]/10 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Time Remaining</div>
                  <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-[#7BC043]">
                    <Clock className="w-6 h-6" />
                    <span>02:45:18</span>
                  </div>
                </div>

                {/* Current Bid */}
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Current Highest Bid</div>
                  <div className="text-3xl font-semibold mb-1">ZAR 285,000</div>
                  <div className="text-sm text-muted-foreground">≈ 15,200 USDC</div>
                </div>

                <Separator />

                {/* Smart Contract */}
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Smart Contract</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">0x742d...bEb5</span>
                    <ExternalLink className="w-4 h-4 text-[#7BC043] cursor-pointer" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bid Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Place Your Bid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm mb-2 block">Bid Amount (ZAR)</label>
                  <Input 
                    type="number" 
                    placeholder="290,000"
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum bid: ZAR 290,000 (next increment)
                  </p>
                </div>

                <Button className="w-full bg-[#7BC043] hover:bg-[#6AA037] text-white py-6">
                  Place Bid
                </Button>

                <div className="text-xs text-center text-muted-foreground">
                  By placing a bid, you agree to our Terms of Service
                </div>
              </CardContent>
            </Card>

            {/* Bid History */}
            <Card>
              <CardHeader>
                <CardTitle>Bid History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bidHistory.map((bid, i) => (
                    <div key={i} className="flex justify-between items-start text-sm">
                      <div>
                        <div className="font-mono text-muted-foreground">{bid.bidder}</div>
                        <div className="text-xs text-muted-foreground">{bid.time}</div>
                      </div>
                      <div className="font-semibold">{bid.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


