import { Card, CardContent } from "./ui/card";
import { 
  Home,
  Gavel,
  ShoppingBag,
  Coins,
  Wallet,
  BarChart3,
  Award,
  History,
  Store,
  Building2,
  User,
  Settings,
  HeadphonesIcon
} from "lucide-react";

interface QuickNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function QuickNavigation({ currentPage, onNavigate }: QuickNavigationProps) {
  const navItems = [
    { 
      page: 'home', 
      label: 'Home', 
      icon: Home, 
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    },
    { 
      page: 'auctions', 
      label: 'Auctions', 
      icon: Gavel, 
      color: 'text-[#D62828]',
      bgColor: 'bg-red-100',
      badge: 'B2B'
    },
    { 
      page: 'marketplace', 
      label: 'Marketplace', 
      icon: ShoppingBag, 
      color: 'text-[#D62828]',
      bgColor: 'bg-red-100',
      badge: 'B2C'
    },
    { 
      page: 'tokens', 
      label: 'Game Tokens', 
      icon: Coins, 
      color: 'text-[#FFB81C]',
      bgColor: 'bg-amber-100'
    },
    { 
      page: 'game-coin', 
      label: 'Game Coin', 
      icon: Award, 
      color: 'text-[#FFB81C]',
      bgColor: 'bg-amber-100'
    },
    { 
      page: 'portfolio', 
      label: 'My Portfolio', 
      icon: Wallet, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      page: 'cart', 
      label: 'Shopping Cart', 
      icon: ShoppingBag, 
      color: 'text-[#D62828]',
      bgColor: 'bg-red-100'
    },
    { 
      page: 'transaction-history', 
      label: 'Transactions', 
      icon: History, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      page: 'seller-dashboard', 
      label: 'Seller Dashboard', 
      icon: Store, 
      color: 'text-[#D62828]',
      bgColor: 'bg-red-100'
    },
    { 
      page: 'consumer-dashboard', 
      label: 'My Orders', 
      icon: Building2, 
      color: 'text-[#D62828]',
      bgColor: 'bg-red-100'
    },
    { 
      page: 'auth', 
      label: 'Account', 
      icon: User, 
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    },
    { 
      page: 'support', 
      label: 'Support', 
      icon: HeadphonesIcon, 
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#D62828]" />
          Quick Navigation
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;
            
            return (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                  isActive
                    ? `${item.bgColor} ${item.color} shadow-md border-2 border-current`
                    : 'hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isActive ? 'bg-white' : item.bgColor
                }`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-sm truncate ${
                    isActive ? '' : 'text-foreground'
                  }`}>
                    {item.label}
                  </div>
                  {item.badge && (
                    <div className={`text-xs ${isActive ? 'opacity-80' : 'text-muted-foreground'}`}>
                      {item.badge}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}