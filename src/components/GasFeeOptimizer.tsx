import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Zap, TrendingDown, TrendingUp, Clock, AlertTriangle } from "lucide-react";

interface GasFeeOptimizerProps {
  compact?: boolean;
}

export function GasFeeOptimizer({ compact = false }: GasFeeOptimizerProps) {
  const currentGas = {
    slow: 28,
    standard: 45,
    fast: 68,
    instant: 95,
  };

  const estimatedCost = {
    slow: "$3.20",
    standard: "$5.10",
    fast: "$7.80",
    instant: "$10.90",
  };

  const estimatedTime = {
    slow: "~5 min",
    standard: "~2 min",
    fast: "~30 sec",
    instant: "~15 sec",
  };

  const networks = [
    {
      name: "Ethereum",
      gas: "45 Gwei",
      cost: "$5.10",
      time: "2 min",
      status: "high",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: "⟠",
    },
    {
      name: "Polygon",
      gas: "35 Gwei",
      cost: "$0.05",
      time: "2 sec",
      status: "optimal",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: "⬡",
      recommended: true,
    },
    {
      name: "Arbitrum",
      gas: "0.1 Gwei",
      cost: "$0.25",
      time: "1 sec",
      status: "low",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      icon: "◈",
    },
    {
      name: "BSC",
      gas: "5 Gwei",
      cost: "$0.15",
      time: "3 sec",
      status: "low",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      icon: "◆",
    },
  ];

  if (compact) {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-[#D62828] transition-all">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FFB81C]" />
            <span className="font-semibold">Gas Fees</span>
          </div>
          <Badge className="bg-red-100 text-red-700 border-red-200">
            High Activity
          </Badge>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="text-center p-2 bg-blue-50 rounded">
            <div className="text-xs text-muted-foreground mb-1">Slow</div>
            <div className="font-bold text-sm">{currentGas.slow}</div>
            <div className="text-xs text-muted-foreground">{estimatedCost.slow}</div>
          </div>
          <div className="text-center p-2 bg-green-50 rounded border-2 border-green-500">
            <div className="text-xs text-muted-foreground mb-1">Standard</div>
            <div className="font-bold text-sm">{currentGas.standard}</div>
            <div className="text-xs text-muted-foreground">{estimatedCost.standard}</div>
          </div>
          <div className="text-center p-2 bg-orange-50 rounded">
            <div className="text-xs text-muted-foreground mb-1">Fast</div>
            <div className="font-bold text-sm">{currentGas.fast}</div>
            <div className="text-xs text-muted-foreground">{estimatedCost.fast}</div>
          </div>
          <div className="text-center p-2 bg-red-50 rounded">
            <div className="text-xs text-muted-foreground mb-1">Instant</div>
            <div className="font-bold text-sm">{currentGas.instant}</div>
            <div className="text-xs text-muted-foreground">{estimatedCost.instant}</div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded p-2 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="text-amber-900">
              <span className="font-semibold">Best time:</span> Wait 2-3 hours for lower fees (Est. 25 Gwei)
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#FFB81C]" />
            Gas Fee Optimizer
          </div>
          <Badge className="bg-red-100 text-red-700 border-red-200">
            <TrendingUp className="w-3 h-3 mr-1" />
            High Activity
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Ethereum Gas */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Ethereum Mainnet</h3>
            <span className="text-sm text-muted-foreground">Last updated: 30s ago</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-blue-500 transition-all cursor-pointer">
              <div className="flex items-center gap-1 mb-2">
                <TrendingDown className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-600">Slow</span>
              </div>
              <div className="font-bold text-xl mb-1">{currentGas.slow}</div>
              <div className="text-xs text-muted-foreground mb-1">Gwei</div>
              <div className="text-sm font-semibold text-blue-600">{estimatedCost.slow}</div>
              <div className="text-xs text-muted-foreground">{estimatedTime.slow}</div>
            </div>

            <div className="border-2 border-green-500 bg-green-50 rounded-lg p-3 cursor-pointer">
              <div className="flex items-center gap-1 mb-2">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-green-600">Standard</span>
              </div>
              <div className="font-bold text-xl mb-1">{currentGas.standard}</div>
              <div className="text-xs text-muted-foreground mb-1">Gwei</div>
              <div className="text-sm font-semibold text-green-600">{estimatedCost.standard}</div>
              <div className="text-xs text-muted-foreground">{estimatedTime.standard}</div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-orange-500 transition-all cursor-pointer">
              <div className="flex items-center gap-1 mb-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-medium text-orange-600">Fast</span>
              </div>
              <div className="font-bold text-xl mb-1">{currentGas.fast}</div>
              <div className="text-xs text-muted-foreground mb-1">Gwei</div>
              <div className="text-sm font-semibold text-orange-600">{estimatedCost.fast}</div>
              <div className="text-xs text-muted-foreground">{estimatedTime.fast}</div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-red-500 transition-all cursor-pointer">
              <div className="flex items-center gap-1 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-xs font-medium text-red-600">Instant</span>
              </div>
              <div className="font-bold text-xl mb-1">{currentGas.instant}</div>
              <div className="text-xs text-muted-foreground mb-1">Gwei</div>
              <div className="text-sm font-semibold text-red-600">{estimatedCost.instant}</div>
              <div className="text-xs text-muted-foreground">{estimatedTime.instant}</div>
            </div>
          </div>
        </div>

        {/* Optimization Suggestion */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <div className="font-semibold text-amber-900 mb-1">⏰ Gas Fee Prediction</div>
              <div className="text-sm text-amber-800 mb-2">
                Gas fees typically drop during off-peak hours. Wait 2-3 hours to save ~44% on fees.
              </div>
              <div className="text-sm">
                <span className="font-semibold text-amber-900">Expected:</span>{" "}
                <span className="text-amber-700">25 Gwei ($2.85) at 11:00 PM UTC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Chain Comparison */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            💰 Save with Alternative Networks
          </h3>
          <div className="space-y-2">
            {networks.map((network) => (
              <div
                key={network.name}
                className={`border-2 rounded-lg p-3 transition-all ${
                  network.recommended
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-[#D62828]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{network.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{network.name}</span>
                        {network.recommended && (
                          <Badge className="bg-green-600 text-white border-0 text-xs">
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {network.gas} • {network.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold text-lg ${network.color}`}>
                      {network.cost}
                    </div>
                    <div className="text-xs text-muted-foreground">per transaction</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gas Chart Placeholder */}
        <div className="border-2 border-gray-200 rounded-lg p-4">
          <div className="text-sm font-semibold mb-3">24-Hour Gas Trend</div>
          <div className="h-32 bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 rounded flex items-center justify-center text-muted-foreground text-sm">
            Gas fee chart visualization (45 Gwei avg)
          </div>
        </div>

        <Button className="w-full bg-[#D62828] hover:bg-[#A4161A]">
          Set Custom Gas Limit
        </Button>
      </CardContent>
    </Card>
  );
}


