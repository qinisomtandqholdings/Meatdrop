import { Bell, Search, ShoppingCart, Menu, Copy, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NetworkSwitcher } from "./NetworkSwitcher";
import { useState } from "react";
import { WalletConnectModal } from "./WalletConnectModal";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount?: number;
  walletConnected?: boolean;
}

export function Header({ currentPage, onNavigate, cartItemCount = 0, walletConnected = false }: HeaderProps) {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [contractCopied, setContractCopied] = useState(false);

  const copyContractAddress = () => {
    navigator.clipboard.writeText("0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5");
    setContractCopied(true);
    setTimeout(() => setContractCopied(false), 2000);
  };

  // Pages that require Web3/blockchain interaction
  const web3Pages = ['tokens', 'game-coin', 'portfolio', 'auctions', 'transaction-history'];
  const showBlockchainBar = web3Pages.includes(currentPage);

  return (
    <div className="sticky top-0 z-50 shadow-2xl">
      {/* Main Header - Premium White Background */}
      <header className="w-full bg-white shadow-xl border-b-4 border-[#D62828]">
        <div className="max-w-[1600px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-6">
            {/* Premium Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
            >
              {/* Meat Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#D62828]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#D62828] to-[#A4161A] p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all">
                  <svg 
                    className="w-12 h-12 text-white" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    {/* Steak/Meat icon */}
                    <path 
                      d="M12 2C8.5 2 6 4.5 4.5 7.5C3 10.5 2 14 2 17C2 19.5 3.5 22 6 22C8.5 22 10.5 20.5 12 18.5C13.5 20.5 15.5 22 18 22C20.5 22 22 19.5 22 17C22 14 21 10.5 19.5 7.5C18 4.5 15.5 2 12 2Z" 
                      fill="currentColor"
                      opacity="0.9"
                    />
                    {/* Marbling details */}
                    <ellipse cx="10" cy="10" rx="1.5" ry="1" fill="white" opacity="0.3" />
                    <ellipse cx="14" cy="12" rx="1.2" ry="0.8" fill="white" opacity="0.3" />
                    <ellipse cx="11" cy="14" rx="1" ry="0.7" fill="white" opacity="0.3" />
                  </svg>
                </div>
              </div>
              
              <div className="text-[#1A1A1A]">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    MeatDrop
                  </h1>
                  {showBlockchainBar && (
                    <Badge className="bg-[#D62828] text-white border-0 text-xs px-3 py-1 font-bold shadow-lg">
                      WEB3
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-[#1A1A1A]/80 font-medium tracking-wide leading-tight">
                  Livestock Marketplace & Auctions
                </div>
              </div>
            </button>

            {/* Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Live Tokens', page: 'tokens' },
                { label: 'Game Coin', page: 'game-coin' },
                { label: 'My Portfolio', page: 'portfolio' },
                { label: 'Auctions', page: 'auctions' },
                { label: 'Marketplace', page: 'marketplace' },
              ].map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className={`px-4 py-2 rounded-md text-[#1A1A1A] transition-all font-medium ${
                    currentPage === page
                      ? 'bg-[#D62828] text-white font-semibold shadow-md'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => onNavigate('support')}
                className="px-4 py-2 rounded-md text-[#1A1A1A] font-medium hover:bg-gray-100 transition-all"
              >
                Support
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <Input 
                  placeholder="Search..."
                  className="bg-transparent border-0 text-[#1A1A1A] placeholder:text-gray-500 w-48 focus-visible:ring-0 p-0 h-auto"
                />
              </div>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="text-[#1A1A1A] hover:bg-gray-100 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#D62828] rounded-full animate-pulse" />
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate('cart')}
                className="text-[#1A1A1A] hover:bg-gray-100 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#D62828] text-white border-0 text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>

              {/* Wallet Connect */}
              {walletConnected ? (
                <Button
                  className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 font-mono text-sm shadow-md"
                >
                  0x7A4e...29Bc
                </Button>
              ) : (
                <Button
                  className="bg-[#D62828] hover:bg-[#A4161A] text-white px-6 shadow-md"
                  onClick={() => setIsWalletModalOpen(true)}
                >
                  Connect Wallet
                </Button>
              )}

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full border-2 border-gray-300 hover:border-[#D62828] transition-colors">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                      <AvatarFallback className="bg-[#D62828] text-white">MD</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => onNavigate('seller-dashboard')}>
                    Seller Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('consumer-dashboard')}>
                    Consumer Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('bids')}>
                    My Bids
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('orders')}>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('auth')}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden text-[#1A1A1A] hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Blockchain Status Bar */}
      {showBlockchainBar && (
        <div className="w-full bg-[#1A1A1A] border-b border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* Network Status */}
                <NetworkSwitcher />

                {/* Gas Fee */}
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Current Gas: <span className="text-[#FFB81C] font-semibold">45 Gwei</span></span>
                </div>

                {/* Smart Contract */}
                <button
                  className="group flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                  onClick={copyContractAddress}
                >
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#1AA34A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Contract Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono bg-white/5 px-2 py-1 rounded">
                    <span>0x742d...bEb5</span>
                    <Copy className={`w-3 h-3 ${contractCopied ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`} />
                  </div>
                </button>
              </div>

              {/* Transaction History Link */}
              <button
                onClick={() => onNavigate('transaction-history')}
                className="flex items-center gap-2 text-[#D62828] hover:text-[#A4161A] text-sm font-medium transition-colors"
              >
                <span>Transaction History</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Connect Modal */}
      <WalletConnectModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  );
}

