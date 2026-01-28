import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  ExternalLink,
  Search,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle2,
  Clock,
  XCircle,
  Copy,
} from "lucide-react";
import { useState } from "react";

interface Transaction {
  id: string;
  hash: string;
  type: "buy" | "sell" | "transfer" | "claim";
  asset: string;
  amount: string;
  value: string;
  from: string;
  to: string;
  timestamp: string;
  status: "confirmed" | "pending" | "failed";
  gasUsed: string;
  gasFee: string;
  network: "ethereum" | "polygon" | "bsc" | "arbitrum";
  blockNumber: number;
}

export function TransactionHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "buy" | "sell" | "transfer" | "claim">("all");

  const transactions: Transaction[] = [
    {
      id: "1",
      hash: "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819fb2bf829c4a5c7b1d5d1f8a3",
      type: "buy",
      asset: "IMPALA",
      amount: "25",
      value: "R 46,250",
      from: "0x742d35...f0bEb4",
      to: "0x9f4e82...3c8d2A",
      timestamp: "2 hours ago",
      status: "confirmed",
      gasUsed: "84,523",
      gasFee: "0.0038 ETH ($5.10)",
      network: "polygon",
      blockNumber: 52847392,
    },
    {
      id: "2",
      hash: "0x3f8b29c5e9a74d1b6e0f8c3a2d5e7b9f1a4c6d8e2b3f5a7c9e1d4b6f8a0c2e4",
      type: "buy",
      asset: "KUDU",
      amount: "10",
      value: "R 125,000",
      from: "0x742d35...f0bEb4",
      to: "0x9f4e82...3c8d2A",
      timestamp: "5 hours ago",
      status: "confirmed",
      gasUsed: "92,145",
      gasFee: "0.0041 ETH ($5.60)",
      network: "ethereum",
      blockNumber: 18942876,
    },
    {
      id: "3",
      hash: "0x7a2c4e6b8d0f1a3c5e7b9d1f3a5c7e9b1d3f5a7c9e1b3d5f7a9c1e3b5d7f9a",
      type: "claim",
      asset: "Dividend",
      amount: "0.45 ETH",
      value: "R 14,250",
      from: "Contract",
      to: "0x742d35...f0bEb4",
      timestamp: "1 day ago",
      status: "confirmed",
      gasUsed: "51,238",
      gasFee: "0.0023 ETH ($3.15)",
      network: "ethereum",
      blockNumber: 18941203,
    },
    {
      id: "4",
      hash: "0x1b3d5f7a9c1e3b5d7f9a1c3e5b7d9f1a3c5e7b9d1f3a5c7e9b1d3f5a7c9e1b",
      type: "buy",
      asset: "SPRING",
      amount: "50",
      value: "R 49,000",
      from: "0x742d35...f0bEb4",
      to: "0x9f4e82...3c8d2A",
      timestamp: "2 days ago",
      status: "confirmed",
      gasUsed: "88,654",
      gasFee: "0.0001 ETH ($0.05)",
      network: "polygon",
      blockNumber: 52821456,
    },
    {
      id: "5",
      hash: "0x9e1c3b5d7f9a1c3e5b7d9f1a3c5e7b9d1f3a5c7e9b1d3f5a7c9e1b3d5f7a9c",
      type: "transfer",
      asset: "IMPALA",
      amount: "5",
      value: "R 9,250",
      from: "0x742d35...f0bEb4",
      to: "0x8a6c4e...2d9f1B",
      timestamp: "3 days ago",
      status: "confirmed",
      gasUsed: "65,432",
      gasFee: "0.0029 ETH ($4.02)",
      network: "ethereum",
      blockNumber: 18935678,
    },
    {
      id: "6",
      hash: "0x5c7e9b1d3f5a7c9e1b3d5f7a9c1e3b5d7f9a1c3e5b7d9f1a3c5e7b9d1f3a5c",
      type: "buy",
      asset: "ELAND",
      amount: "3",
      value: "R 55,500",
      from: "0x742d35...f0bEb4",
      to: "0x9f4e82...3c8d2A",
      timestamp: "1 week ago",
      status: "pending",
      gasUsed: "—",
      gasFee: "0.0042 ETH ($5.82)",
      network: "ethereum",
      blockNumber: 18928943,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-100 text-green-700 border-green-200",
      pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      failed: "bg-red-100 text-red-700 border-red-200",
    };
    return styles[status as keyof typeof styles] || styles.confirmed;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <ArrowDownLeft className="w-4 h-4 text-green-600" />;
      case "sell":
        return <ArrowUpRight className="w-4 h-4 text-red-600" />;
      case "transfer":
        return <ArrowUpRight className="w-4 h-4 text-blue-600" />;
      case "claim":
        return <ArrowDownLeft className="w-4 h-4 text-purple-600" />;
      default:
        return null;
    }
  };

  const getNetworkIcon = (network: string) => {
    const icons = {
      ethereum: "⟠",
      polygon: "⬡",
      bsc: "◆",
      arbitrum: "◈",
    };
    return icons[network as keyof typeof icons] || "⟠";
  };

  const getNetworkColor = (network: string) => {
    const colors = {
      ethereum: "bg-blue-100 text-blue-700",
      polygon: "bg-purple-100 text-purple-700",
      bsc: "bg-yellow-100 text-yellow-700",
      arbitrum: "bg-cyan-100 text-cyan-700",
    };
    return colors[network as keyof typeof colors] || colors.ethereum;
  };

  const getExplorerUrl = (network: string, hash: string) => {
    const explorers = {
      ethereum: `https://etherscan.io/tx/${hash}`,
      polygon: `https://polygonscan.com/tx/${hash}`,
      bsc: `https://bscscan.com/tx/${hash}`,
      arbitrum: `https://arbiscan.io/tx/${hash}`,
    };
    return explorers[network as keyof typeof explorers] || explorers.ethereum;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.hash.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.asset.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || tx.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Transaction History</h1>
          <p className="text-muted-foreground text-lg">
            View all your blockchain transactions with complete transparency
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Transactions</div>
              <div className="text-3xl font-bold">{transactions.length}</div>
              <div className="text-sm text-green-600 mt-1">+3 this week</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Volume</div>
              <div className="text-3xl font-bold">R 299,250</div>
              <div className="text-sm text-muted-foreground mt-1">≈ $16,024</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Gas Fees Paid</div>
              <div className="text-3xl font-bold">0.0174 ETH</div>
              <div className="text-sm text-muted-foreground mt-1">≈ $23.84</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
              <div className="text-3xl font-bold text-green-600">98.6%</div>
              <div className="text-sm text-muted-foreground mt-1">5/6 confirmed</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              {/* Search */}
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by hash or asset..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-[#D62828] hover:bg-[#A4161A]" : ""}
                >
                  All
                </Button>
                <Button
                  variant={filter === "buy" ? "default" : "outline"}
                  onClick={() => setFilter("buy")}
                  className={filter === "buy" ? "bg-[#D62828] hover:bg-[#A4161A]" : ""}
                >
                  Buy
                </Button>
                <Button
                  variant={filter === "sell" ? "default" : "outline"}
                  onClick={() => setFilter("sell")}
                  className={filter === "sell" ? "bg-[#D62828] hover:bg-[#A4161A]" : ""}
                >
                  Sell
                </Button>
                <Button
                  variant={filter === "claim" ? "default" : "outline"}
                  onClick={() => setFilter("claim")}
                  className={filter === "claim" ? "bg-[#D62828] hover:bg-[#A4161A]" : ""}
                >
                  Claims
                </Button>
              </div>

              {/* Export Button */}
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>All Transactions ({filteredTransactions.length})</span>
              <Badge className="bg-blue-100 text-blue-700">
                Live on Blockchain
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#D62828] transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getTypeIcon(tx.type)}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold capitalize">{tx.type}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="font-bold text-[#D62828]">{tx.asset}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {tx.timestamp}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getNetworkColor(tx.network)}>
                            {getNetworkIcon(tx.network)} {tx.network}
                          </Badge>
                          <Badge className={getStatusBadge(tx.status)}>
                            {getStatusIcon(tx.status)}
                            <span className="ml-1 capitalize">{tx.status}</span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl mb-1">{tx.amount} {tx.asset}</div>
                      <div className="text-muted-foreground">{tx.value}</div>
                    </div>
                  </div>

                  {/* Transaction Details */}
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Transaction Hash:</span>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-xs bg-white px-2 py-1 rounded">
                          {tx.hash.substring(0, 20)}...{tx.hash.substring(tx.hash.length - 6)}
                        </code>
                        <button
                          onClick={() => copyToClipboard(tx.hash)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Block:</span>
                      <code className="font-mono text-xs bg-white px-2 py-1 rounded">
                        #{tx.blockNumber.toLocaleString()}
                      </code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gas Used:</span>
                      <span className="font-semibold">{tx.gasUsed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gas Fee:</span>
                      <span className="font-semibold text-[#D62828]">{tx.gasFee}</span>
                    </div>
                  </div>

                  {/* View on Explorer */}
                  <div className="mt-3 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(getExplorerUrl(tx.network, tx.hash), "_blank")}
                    >
                      View on Explorer
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View NFT Certificate
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground text-lg mb-2">No transactions found</div>
                <div className="text-sm text-muted-foreground">
                  Try adjusting your search or filter criteria
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


