import { 
  DollarSign, 
  TrendingUp, 
  Package, 
  CheckCircle, 
  Clock,
  Plus,
  Upload,
  Calendar,
  ExternalLink,
  Star,
  Users
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SellerDashboardProps {
  onBack: () => void;
}

export function SellerDashboard({ onBack }: SellerDashboardProps) {
  const recentAuctions = [
    { id: 1, title: "Premium Angus Cattle - 45 Head", status: "live", currentBid: "ZAR 285,000", bids: 23 },
    { id: 2, title: "Brahman Bulls - 12 Head", status: "upcoming", startDate: "Nov 20, 2024", reserve: "ZAR 180,000" },
    { id: 3, title: "Hereford Heifers - 30 Head", status: "closed", finalPrice: "ZAR 420,000", sold: true },
  ];

  const payouts = [
    { auction: "Hereford Heifers - 30 Head", amount: "ZAR 420,000", status: "Processing", date: "Nov 15, 2024" },
    { auction: "Crossbreed Cattle - 25 Head", amount: "ZAR 315,000", status: "Completed", date: "Nov 10, 2024" },
  ];

  const transactions = [
    { type: "Listing Created", hash: "0x8f3e...a2c1", status: "Confirmed", time: "2 hours ago" },
    { type: "Bid Received", hash: "0x2b7d...f4e9", status: "Confirmed", time: "3 hours ago" },
    { type: "Sale Completed", hash: "0x9c4a...d8b2", status: "Confirmed", time: "1 day ago" },
    { type: "Payout Initiated", hash: "0x5e7f...c3a6", status: "Pending", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-2 hover:bg-white"
            >
              ← Back
            </Button>
            <h1 className="text-3xl font-semibold">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your livestock auctions and sales</p>
          </div>
          <Button className="bg-[#7BC043] hover:bg-[#6AA037] text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create New Auction
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <h3 className="text-2xl font-semibold">ZAR 2.4M</h3>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12.5% this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#7BC043]/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#7BC043]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Listings</p>
                  <h3 className="text-2xl font-semibold">8</h3>
                  <p className="text-xs text-muted-foreground mt-1">3 live auctions</p>
                </div>
                <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#06B6D4]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Reputation Score</p>
                  <h3 className="text-2xl font-semibold">4.8/5</h3>
                  <p className="text-xs text-muted-foreground mt-1">Based on 187 sales</p>
                </div>
                <div className="w-12 h-12 bg-[#FFB81C]/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#FFB81C]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Buyers</p>
                  <h3 className="text-2xl font-semibold">342</h3>
                  <p className="text-xs text-muted-foreground mt-1">98% satisfaction</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">Livestock Management</TabsTrigger>
            <TabsTrigger value="create">Create Auction</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain Logs</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Auctions */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Auctions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAuctions.map((auction) => (
                      <div key={auction.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{auction.title}</h4>
                          <Badge 
                            className={
                              auction.status === 'live' 
                                ? 'bg-[#06B6D4] text-white' 
                                : auction.status === 'upcoming'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-400 text-white'
                            }
                          >
                            {auction.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {auction.status === 'live' && (
                            <div className="flex justify-between">
                              <span>Current Bid: {auction.currentBid}</span>
                              <span>{auction.bids} bids</span>
                            </div>
                          )}
                          {auction.status === 'upcoming' && (
                            <div>Starts: {auction.startDate}</div>
                          )}
                          {auction.status === 'closed' && (
                            <div className="flex justify-between">
                              <span>Final Price: {auction.finalPrice}</span>
                              <span className="text-green-600 font-semibold">Sold</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payouts Due */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Settlements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payouts.map((payout, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{payout.amount}</h4>
                            <p className="text-sm text-muted-foreground">{payout.auction}</p>
                          </div>
                          <Badge 
                            variant={payout.status === 'Completed' ? 'default' : 'secondary'}
                            className={payout.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500 text-white'}
                          >
                            {payout.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">{payout.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transaction Verification */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Blockchain Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.slice(0, 4).map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.status === 'Confirmed' ? 'bg-green-100' : 'bg-orange-100'
                        }`}>
                          {tx.status === 'Confirmed' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Clock className="w-5 h-5 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold">{tx.type}</div>
                          <div className="text-sm text-muted-foreground font-mono">{tx.hash}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{tx.status}</div>
                        <div className="text-xs text-muted-foreground">{tx.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Livestock Management Tab */}
          <TabsContent value="listings" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Livestock Listings</CardTitle>
                  <Button className="bg-[#7BC043] hover:bg-[#6AA037] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Livestock
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAuctions.map((auction) => (
                    <div key={auction.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{auction.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Status: {auction.status}</span>
                          {auction.status === 'live' && <span>{auction.bids} active bids</span>}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create Auction Tab */}
          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Auction</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Auction Title</Label>
                      <Input id="title" placeholder="e.g., Premium Angus Cattle - 45 Head" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="breed">Breed</Label>
                      <Select>
                        <SelectTrigger id="breed">
                          <SelectValue placeholder="Select breed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="angus">Angus</SelectItem>
                          <SelectItem value="brahman">Brahman</SelectItem>
                          <SelectItem value="hereford">Hereford</SelectItem>
                          <SelectItem value="crossbreed">Crossbreed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (Head)</Label>
                      <Input id="quantity" type="number" placeholder="45" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avgWeight">Avg. Weight (kg)</Label>
                      <Input id="avgWeight" type="number" placeholder="550" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avgAge">Avg. Age (months)</Label>
                      <Input id="avgAge" type="number" placeholder="18-24" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Provide detailed information about your livestock..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reserve">Reserve Price (ZAR)</Label>
                      <Input id="reserve" type="number" placeholder="250000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Auction Start Date</Label>
                      <Input id="startDate" type="datetime-local" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Images</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#7BC043] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button variant="outline">Save as Draft</Button>
                    <Button className="bg-[#7BC043] hover:bg-[#6AA037] text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Auction
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payouts Tab */}
          <TabsContent value="payouts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payouts.map((payout, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{payout.auction}</h4>
                        <p className="text-sm text-muted-foreground">{payout.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-semibold mb-1">{payout.amount}</div>
                        <Badge 
                          variant={payout.status === 'Completed' ? 'default' : 'secondary'}
                          className={payout.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500 text-white'}
                        >
                          {payout.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blockchain Tab */}
          <TabsContent value="blockchain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>On-Chain Transaction Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          tx.status === 'Confirmed' ? 'bg-green-100' : 'bg-orange-100'
                        }`}>
                          {tx.status === 'Confirmed' ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <Clock className="w-6 h-6 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold mb-1">{tx.type}</div>
                          <div className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                            <span>{tx.hash}</span>
                            <ExternalLink className="w-4 h-4 text-[#7BC043] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={tx.status === 'Confirmed' ? 'default' : 'secondary'}
                          className={tx.status === 'Confirmed' ? 'bg-green-500' : 'bg-orange-500 text-white'}
                        >
                          {tx.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">{tx.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


