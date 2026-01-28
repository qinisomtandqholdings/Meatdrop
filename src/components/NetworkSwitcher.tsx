import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, CheckCircle2, Zap, Clock } from "lucide-react";
import { useState } from "react";

export function NetworkSwitcher() {
  const [selectedNetwork, setSelectedNetwork] = useState("ethereum");

  const networks = [
    {
      id: "ethereum",
      name: "Ethereum",
      chainId: 1,
      icon: "⟠",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gas: "45 Gwei",
      cost: "$5.10",
      status: "high",
      statusColor: "bg-red-100 text-red-700",
      rpcUrl: "https://mainnet.infura.io/v3/...",
      explorer: "https://etherscan.io",
    },
    {
      id: "polygon",
      name: "Polygon",
      chainId: 137,
      icon: "⬡",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gas: "35 Gwei",
      cost: "$0.05",
      status: "optimal",
      statusColor: "bg-green-100 text-green-700",
      recommended: true,
      rpcUrl: "https://polygon-rpc.com",
      explorer: "https://polygonscan.com",
    },
    {
      id: "arbitrum",
      name: "Arbitrum",
      chainId: 42161,
      icon: "◈",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gas: "0.1 Gwei",
      cost: "$0.25",
      status: "low",
      statusColor: "bg-green-100 text-green-700",
      rpcUrl: "https://arb1.arbitrum.io/rpc",
      explorer: "https://arbiscan.io",
    },
    {
      id: "bsc",
      name: "BNB Chain",
      chainId: 56,
      icon: "◆",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      gas: "5 Gwei",
      cost: "$0.15",
      status: "low",
      statusColor: "bg-green-100 text-green-700",
      rpcUrl: "https://bsc-dataseed.binance.org",
      explorer: "https://bscscan.com",
    },
    {
      id: "optimism",
      name: "Optimism",
      chainId: 10,
      icon: "◉",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      gas: "0.5 Gwei",
      cost: "$0.30",
      status: "low",
      statusColor: "bg-green-100 text-green-700",
      rpcUrl: "https://mainnet.optimism.io",
      explorer: "https://optimistic.etherscan.io",
    },
    {
      id: "base",
      name: "Base",
      chainId: 8453,
      icon: "🔵",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gas: "0.3 Gwei",
      cost: "$0.10",
      status: "low",
      statusColor: "bg-green-100 text-green-700",
      rpcUrl: "https://mainnet.base.org",
      explorer: "https://basescan.org",
    },
  ];

  const currentNetwork = networks.find((n) => n.id === selectedNetwork) || networks[0];

  const handleNetworkSwitch = (networkId: string) => {
    setSelectedNetwork(networkId);
    // In a real app, this would trigger MetaMask network switch
    console.log(`Switching to network: ${networkId}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 transition-all border-2 ${currentNetwork.bgColor} ${currentNetwork.borderColor} hover:opacity-80`}
        >
          <span className="text-xl">{currentNetwork.icon}</span>
          <span className="font-semibold">{currentNetwork.name}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="text-base">Select Network</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {networks.map((network) => (
          <DropdownMenuItem
            key={network.id}
            onClick={() => handleNetworkSwitch(network.id)}
            className={`p-4 cursor-pointer ${
              network.id === selectedNetwork ? "bg-gray-100" : ""
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className={`text-2xl ${network.color}`}>{network.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{network.name}</span>
                    {network.recommended && (
                      <Badge className="bg-[#FFB81C] text-black border-0 text-xs px-2 py-0">
                        Best
                      </Badge>
                    )}
                    {network.id === selectedNetwork && (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {network.gas}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {network.cost}
                    </div>
                  </div>
                </div>
              </div>
              <Badge className={network.statusColor}>
                {network.status}
              </Badge>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Current Network Details */}
        <div className="p-4 bg-gray-50 m-2 rounded-lg">
          <div className="text-xs font-semibold text-muted-foreground mb-2">
            Current Network Details
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Chain ID:</span>
              <code className="font-mono bg-white px-2 py-0.5 rounded">
                {currentNetwork.chainId}
              </code>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-green-600">Connected</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Gas Price:</span>
              <span className="font-semibold">{currentNetwork.gas}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Avg. Cost:</span>
              <span className="font-semibold text-green-600">{currentNetwork.cost}</span>
            </div>
          </div>
        </div>

        {/* Add Custom Network */}
        <DropdownMenuItem className="p-4 cursor-pointer border-t">
          <div className="text-center w-full">
            <span className="font-semibold text-[#D62828]">+ Add Custom Network</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

