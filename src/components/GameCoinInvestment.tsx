import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Award, 
  ArrowUpRight, 
  ArrowDownLeft,
  Clock,
  Zap
} from "lucide-react";

export function GameCoinInvestment() {
  const topInvestors = [
    { rank: 1, address: "0x8f2e...3a9b", amount: "R 2,450,000", tokens: "12,450", badge: "🥇" },
    { rank: 2, address: "0x7a4c...1d8e", amount: "R 1,890,000", tokens: "9,850", badge: "🥈" },
    { rank: 3, address: "0x3b9e...7f2a", amount: "R 1,250,000", tokens: "7,120", badge: "🥉" },
  ];

  return (
    <div className="space-y-6">
      {/* Main Investment Card */}
      <Card className="border-2 border-[#FFB81C] bg-gradient-to-br from-white to-amber-50 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB81C] opacity-5 rounded-full -mr-32 -mt-32"></div>
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFB81C] to-[#D62828] rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              Game Coin Investment
            </CardTitle>
            <Badge className="bg-[#FFB81C] text-black border-0 text-sm px-4 py-1.5 font-bold">
              PREMIUM TIER
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2">
            Stake Game Coins • Earn Trophy Returns • Share in Platform Revenue
          </p>
        </CardHeader>

        <CardContent className="space-y-6 relative">
          {/* Balance Display */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-[#FFB81C] transition-all">
              <div className="text-sm text-muted-foreground mb-1">ZAR Balance</div>
              <div className="text-2xl font-bold text-[#D62828]">R 485,250</div>
              <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +12.5% this month
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-[#FFB81C] transition-all">
              <div className="text-sm text-muted-foreground mb-1">ETH Balance</div>
              <div className="text-2xl font-bold font-mono">2.4589 ETH</div>
              <div className="text-xs text-muted-foreground mt-1">
                ≈ $4,250.32
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-[#FFB81C] transition-all">
              <div className="text-sm text-muted-foreground mb-1">USDC Balance</div>
              <div className="text-2xl font-bold font-mono">8,450 USDC</div>
              <div className="text-xs text-muted-foreground mt-1">
                ≈ R 158,200
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFB81C] to-[#D62828] rounded-xl p-4 border-2 border-[#FFB81C] shadow-lg">
              <div className="text-sm text-white/90 mb-1">Game Coins</div>
              <div className="text-2xl font-bold text-white">3,450 GMC</div>
              <div className="text-xs text-white/80 flex items-center gap-1 mt-1">
                <Zap className="w-3 h-3" />
                Active Staking
              </div>
            </div>
          </div>

          {/* Investment Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-green-900">Total Staked</div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">R 285,400</div>
              <div className="text-sm text-green-700 mt-2">
                2,450 GMC • 71% of portfolio
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-blue-900">Monthly Returns</div>
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">R 14,250</div>
              <div className="text-sm text-blue-700 mt-2">
                +5.2% APY • Next payout in 8 days
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-purple-900">Trophy Dividends</div>
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">R 8,450</div>
              <div className="text-sm text-purple-700 mt-2">
                From 12 trophy sales this month
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <Button className="bg-gradient-to-r from-[#D62828] to-[#A4161A] hover:shadow-xl transition-all h-14 text-base">
              <ArrowDownLeft className="w-5 h-5 mr-2" />
              Stake Game Coins
            </Button>
            <Button variant="outline" className="border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white h-14 text-base">
              <ArrowUpRight className="w-5 h-5 mr-2" />
              Withdraw Returns
            </Button>
          </div>

          {/* Current Pool Stats */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">Global Investment Pool</div>
              <Badge className="bg-[#06B6D4] text-white border-0">
                Live
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div>
                <div className="text-sm text-white/70 mb-1">Total Pool Value</div>
                <div className="text-2xl font-bold">R 128.5M</div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">Active Investors</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  8,450
                </div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">Pool APY</div>
                <div className="text-2xl font-bold text-[#FFB81C]">7.8%</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Pool Utilization</span>
                <span className="font-mono">R 96.2M / R 128.5M</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>

          {/* Leaderboard */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFB81C]" />
                Top Investors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topInvestors.map((investor) => (
                <div
                  key={investor.rank}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{investor.badge}</div>
                    <div>
                      <div className="font-mono text-sm font-semibold">
                        {investor.address}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {investor.tokens} GMC Staked
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#D62828]">{investor.amount}</div>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full mt-4">
                View Full Leaderboard
              </Button>
            </CardContent>
          </Card>

          {/* Transaction Activity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Recent Activity</h3>
              <Button variant="ghost" size="sm" className="text-[#D62828]">
                View All
              </Button>
            </div>

            <div className="space-y-2">
              {[
                { type: "stake", amount: "500 GMC", time: "2 hours ago", status: "confirmed" },
                { type: "dividend", amount: "R 2,450", time: "1 day ago", status: "confirmed" },
                { type: "stake", amount: "250 GMC", time: "3 days ago", status: "confirmed" },
              ].map((tx, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-[#FFB81C] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === "stake" ? "bg-green-100" : "bg-blue-100"
                    }`}>
                      {tx.type === "stake" ? (
                        <ArrowDownLeft className="w-5 h-5 text-green-600" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold capitalize">{tx.type}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {tx.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{tx.amount}</div>
                    <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


