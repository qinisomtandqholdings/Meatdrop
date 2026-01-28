import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Wallet, ExternalLink, AlertCircle, CheckCircle2, Copy, LogOut } from "lucide-react";
import { useState } from "react";

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("0.00");
  const [copied, setCopied] = useState(false);

  const wallets = [
    {
      name: "MetaMask",
      icon: "🦊",
      description: "Connect to your MetaMask Wallet",
      popular: true,
      installed: true,
    },
    {
      name: "WalletConnect",
      icon: "🔗",
      description: "Scan with mobile wallet",
      popular: true,
      installed: true,
    },
    {
      name: "Coinbase Wallet",
      icon: "💼",
      description: "Connect to Coinbase Wallet",
      popular: true,
      installed: false,
    },
    {
      name: "Trust Wallet",
      icon: "🛡️",
      description: "Connect using Trust Wallet",
      popular: false,
      installed: true,
    },
  ];

  const handleConnect = (walletName: string) => {
    // Simulate wallet connection
    setIsConnected(true);
    setWalletAddress("0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb4");
    setBalance("2.4589");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    setBalance("0.00");
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shortenAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Wallet className="w-6 h-6 text-[#D62828]" />
            {isConnected ? "Connected Wallet" : "Connect Your Wallet"}
          </DialogTitle>
          <DialogDescription>
            {isConnected
              ? "Manage your connected wallet and view your balance"
              : "Choose your preferred wallet to connect to MeatDrop"}
          </DialogDescription>
        </DialogHeader>

        {!isConnected ? (
          <div className="space-y-3 mt-4">
            {/* Install Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="font-semibold text-blue-900 mb-1">New to Web3?</div>
                <div className="text-blue-700">
                  Install MetaMask browser extension to get started with crypto wallets.
                </div>
              </div>
            </div>

            {/* Wallet Options */}
            <div className="space-y-2">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet.name)}
                  disabled={!wallet.installed}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    wallet.installed
                      ? "border-gray-200 hover:border-[#D62828] hover:bg-red-50 cursor-pointer"
                      : "border-gray-100 bg-gray-50 cursor-not-allowed opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{wallet.icon}</div>
                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {wallet.name}
                          {wallet.popular && (
                            <Badge className="bg-[#FFB81C] text-black border-0 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {wallet.description}
                        </div>
                      </div>
                    </div>
                    {!wallet.installed && (
                      <Badge variant="outline" className="text-xs">
                        Not Installed
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Security Notice */}
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-foreground mb-2">🔒 Your security matters</div>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>We never store your private keys</li>
                  <li>All transactions require your approval</li>
                  <li>You maintain full custody of your assets</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            {/* Connected Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Wallet Connected</span>
              </div>
              <div className="text-sm text-green-700">
                Your wallet is connected and ready for transactions
              </div>
            </div>

            {/* Wallet Info */}
            <div className="border-2 border-gray-200 rounded-lg p-4 space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Wallet Address</div>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm bg-gray-100 px-3 py-1.5 rounded">
                    {shortenAddress(walletAddress)}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyAddress}
                    className="ml-2"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-1">Balance</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{balance} ETH</span>
                  <span className="text-muted-foreground">≈ $4,250.32</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Game Tokens</div>
                  <div className="font-semibold">85 Tokens</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Portfolio Value</div>
                  <div className="font-semibold text-green-600">R 285,400</div>
                </div>
              </div>
            </div>

            {/* View on Etherscan */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(`https://etherscan.io/address/${walletAddress}`, "_blank")}
            >
              View on Etherscan
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            {/* Disconnect Button */}
            <Button
              variant="destructive"
              className="w-full"
              onClick={handleDisconnect}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Disconnect Wallet
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

