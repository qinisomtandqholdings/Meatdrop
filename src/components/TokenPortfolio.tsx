import { TrendingUp, TrendingDown, DollarSign, Activity, Calendar, Award, Download, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TokenHolding {
  id: string;
  symbol: string;
  name: string;
  animalType: string;
  tokensOwned: number;
  purchasePrice: number;
  currentPrice: number;
  totalValue: number;
  totalCost: number;
  profitLoss: number;
  profitLossPercentage: number;
  farmName: string;
  farmLocation: string;
  currentWeight: string;
  targetWeight: string;
  healthStatus: "excellent" | "good" | "fair";
  daysToMaturity: number;
  maturityDate: string;
  apy: number;
  lastUpdate: string;
}

interface Transaction {
  id: string;
  type: "buy" | "sell" | "dividend";
  symbol: string;
  amount: number;
  price: number;
  total: number;
  date: string;
  txHash: string;
  status: "confirmed" | "pending";
}

export function TokenPortfolio() {
  const holdings: TokenHolding[] = [
    {
      id: "1",
      symbol: "IMPALA",
      name: "Impala Growth Fund",
      animalType: "Impala",
      tokensOwned: 25,
      purchasePrice: 1850,
      currentPrice: 2368,
      totalValue: 59200,
      totalCost: 46250,
      profitLoss: 12950,
      profitLossPercentage: 28.0,
      farmName: "Wildveld Game Ranch",
      farmLocation: "Mpumalanga, SA",
      currentWeight: "45kg",
      targetWeight: "65kg",
      healthStatus: "excellent",
      daysToMaturity: 271,
      maturityDate: "Aug 15, 2025",
      apy: 48.5,
      lastUpdate: "2 hours ago",
    },
    {
      id: "2",
      symbol: "KUDU",
      name: "Kudu Bulls Premium",
      animalType: "Greater Kudu",
      tokensOwned: 10,
      purchasePrice: 12500,
      currentPrice: 16250,
      totalValue: 162500,
      totalCost: 125000,
      profitLoss: 37500,
      profitLossPercentage: 30.0,
      farmName: "Bushveld Trophy Ranch",
      farmLocation: "Limpopo, SA",
      currentWeight: "180kg",
      targetWeight: "280kg",
      healthStatus: "excellent",
      daysToMaturity: 429,
      maturityDate: "Jan 20, 2026",
      apy: 52.8,
      lastUpdate: "1 hour ago",
    },
    {
      id: "3",
      symbol: "SPRING",
      name: "Springbok Herd Token",
      animalType: "Springbok",
      tokensOwned: 50,
      purchasePrice: 980,
      currentPrice: 1274,
      totalValue: 63700,
      totalCost: 49000,
      profitLoss: 14700,
      profitLossPercentage: 30.0,
      farmName: "Karoo Game Reserve",
      farmLocation: "Northern Cape, SA",
      currentWeight: "32kg",
      targetWeight: "48kg",
      healthStatus: "excellent",
      daysToMaturity: 225,
      maturityDate: "Jun 30, 2025",
      apy: 44.2,
      lastUpdate: "3 hours ago",
    },
  ];

  const transactions: Transaction[] = [
    {
      id: "1",
      type: "buy",
      symbol: "IMPALA",
      amount: 25,
      price: 450,
      total: 11250,
      date: "Nov 15, 2024",
      txHash: "0x8f3a...d2c1",
      status: "confirmed",
    },
    {
      id: "2",
      type: "dividend",
      symbol: "ANGUS",
      amount: 10,
      price: 85,
      total: 850,
      date: "Nov 10, 2024",
      txHash: "0x7b2e...a4f3",
      status: "confirmed",
    },
    {
      id: "3",
      type: "buy",
      symbol: "LAMB",
      amount: 50,
      price: 280,
      total: 14000,
      date: "Nov 8, 2024",
      txHash: "0x9c4d...e5b2",
      status: "confirmed",
    },
  ];

  const totalPortfolioValue = holdings.reduce((sum, h) => sum + h.totalValue, 0);
  const totalCost = holdings.reduce((sum, h) => sum + h.totalCost, 0);
  const totalProfitLoss = totalPortfolioValue - totalCost;
  const totalProfitLossPercentage = ((totalProfitLoss / totalCost) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Livestock Portfolio</h1>
            <p className="text-muted-foreground text-lg">Track your tokenized livestock investments</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Portfolio Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">R {totalPortfolioValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">≈ ${(totalPortfolioValue / 18.75).toFixed(0).toLocaleString()} USD</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Total Profit/Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold mb-1 ${totalProfitLoss >= 0 ? 'text-[#1AA34A]' : 'text-[#D62828]'}`}>
                {totalProfitLoss >= 0 ? '+' : ''}R {totalProfitLoss.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                {totalProfitLoss >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-[#1AA34A]" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-[#D62828]" />
                )}
                <span className={`text-sm font-semibold ${totalProfitLoss >= 0 ? 'text-[#1AA34A]' : 'text-[#D62828]'}`}>
                  {totalProfitLossPercentage}%
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Active Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{holdings.length}</div>
              <p className="text-xs text-muted-foreground">{holdings.reduce((s, h) => s + h.tokensOwned, 0)} total tokens</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Avg. APY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1 text-[#FFB81C]">
                {(holdings.reduce((s, h) => s + h.apy, 0) / holdings.length).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">Projected returns</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="holdings" className="space-y-6">
          <TabsList className="bg-white p-1">
            <TabsTrigger value="holdings" className="px-6">Holdings</TabsTrigger>
            <TabsTrigger value="transactions" className="px-6">Transactions</TabsTrigger>
            <TabsTrigger value="analytics" className="px-6">Analytics</TabsTrigger>
          </TabsList>

          {/* Holdings Tab */}
          <TabsContent value="holdings" className="space-y-6">
            {holdings.map((holding) => (
              <Card key={holding.id} className="overflow-hidden hover:shadow-xl transition-shadow border-2">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    {/* Left: Token Info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-[#D62828]">
                        <AvatarImage src={`https://api.dicebear.com/7.x/shapes/svg?seed=${holding.symbol}`} />
                        <AvatarFallback className="bg-[#D62828] text-white text-xl">
                          {holding.symbol.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold">{holding.symbol}</h3>
                          <Badge className={`${
                            holding.healthStatus === 'excellent' ? 'bg-[#1AA34A]' :
                            holding.healthStatus === 'good' ? 'bg-[#FFB81C]' :
                            'bg-[#FF9500]'
                          } text-white border-0`}>
                            {holding.healthStatus}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{holding.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {holding.farmName} • {holding.farmLocation}
                        </p>
                      </div>
                    </div>

                    {/* Right: Value */}
                    <div className="text-right">
                      <div className="text-3xl font-bold mb-1">R {holding.totalValue.toLocaleString()}</div>
                      <div className={`flex items-center justify-end gap-1 ${
                        holding.profitLoss >= 0 ? 'text-[#1AA34A]' : 'text-[#D62828]'
                      }`}>
                        {holding.profitLoss >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-semibold">
                          {holding.profitLoss >= 0 ? '+' : ''}R {holding.profitLoss.toLocaleString()}
                        </span>
                        <span className="text-sm">
                          ({holding.profitLossPercentage >= 0 ? '+' : ''}{holding.profitLossPercentage}%)
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Last update: {holding.lastUpdate}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Token Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-1">Tokens Owned</div>
                          <div className="text-2xl font-bold">{holding.tokensOwned}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-1">Current Price</div>
                          <div className="text-2xl font-bold">R {holding.currentPrice}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-1">Purchase Price</div>
                          <div className="text-xl font-semibold">R {holding.purchasePrice}</div>
                        </div>
                        <div className="bg-[#FFB81C]/10 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-1">APY</div>
                          <div className="text-xl font-bold text-[#FFB81C]">{holding.apy}%</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Growth Progress */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Growth Progress</span>
                          <span className="text-sm font-semibold">
                            {holding.currentWeight} / {holding.targetWeight}
                          </span>
                        </div>
                        <Progress 
                          value={(parseInt(holding.currentWeight) / parseInt(holding.targetWeight)) * 100} 
                          className="h-2 mb-2"
                        />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Started</span>
                          <span>{((parseInt(holding.currentWeight) / parseInt(holding.targetWeight)) * 100).toFixed(0)}% Complete</span>
                          <span>Target</span>
                        </div>
                      </div>

                      {/* Maturity Info */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Maturity Date</span>
                          </div>
                          <span className="font-semibold">{holding.maturityDate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Days Remaining</span>
                          <Badge variant="outline" className="border-[#06B6D4] text-[#06B6D4]">
                            {holding.daysToMaturity} days
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6 pt-6 border-t">
                    <Button className="flex-1 bg-[#D62828] hover:bg-[#A4161A]">
                      Buy More
                    </Button>
                    <Button variant="outline" className="flex-1 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white">
                      Sell Tokens
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Live Tracking
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          tx.type === 'buy' ? 'bg-[#D62828]/10' :
                          tx.type === 'sell' ? 'bg-[#FFB81C]/10' :
                          'bg-[#1AA34A]/10'
                        }`}>
                          <DollarSign className={`w-6 h-6 ${
                            tx.type === 'buy' ? 'text-[#D62828]' :
                            tx.type === 'sell' ? 'text-[#FFB81C]' :
                            'text-[#1AA34A]'
                          }`} />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {tx.type === 'buy' ? 'Bought' : tx.type === 'sell' ? 'Sold' : 'Dividend Received'}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {tx.amount} {tx.symbol} @ R {tx.price}
                          </div>
                          <div className="text-xs text-muted-foreground font-mono mt-1">
                            TX: {tx.txHash}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">R {tx.total.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{tx.date}</div>
                        <Badge className={`mt-1 ${
                          tx.status === 'confirmed' ? 'bg-[#1AA34A]' : 'bg-[#FF9500]'
                        } text-white border-0`}>
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {holdings.map((holding) => (
                      <div key={holding.id}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{holding.symbol}</span>
                          <span className="text-sm text-muted-foreground">
                            {((holding.totalValue / totalPortfolioValue) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <Progress value={(holding.totalValue / totalPortfolioValue) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Total Invested</span>
                    <span className="font-bold text-lg">R {totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Current Value</span>
                    <span className="font-bold text-lg">R {totalPortfolioValue.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#1AA34A]/10 rounded-lg">
                    <span className="text-muted-foreground">Unrealized Gains</span>
                    <span className="font-bold text-lg text-[#1AA34A]">
                      +R {totalProfitLoss.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#FFB81C]/10 rounded-lg">
                    <span className="text-muted-foreground">Projected Annual Return</span>
                    <span className="font-bold text-lg text-[#FFB81C]">
                      R {((totalPortfolioValue * (holdings.reduce((s, h) => s + h.apy, 0) / holdings.length)) / 100).toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

