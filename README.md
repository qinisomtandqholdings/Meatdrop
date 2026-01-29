# MeatDrop

**Blockchain-enabled hybrid B2B and B2C livestock marketplace and auction platform**

## Overview

MeatDrop is a comprehensive livestock trading platform that combines:
- **B2C Meat Marketplace**: Consumer-facing online shop for premium meat products
- **B2B Livestock Auctions**: Business-to-business live auctions with blockchain verification
- **Livestock Tokenization**: Revolutionary system allowing international investors to buy tokens representing real African game animals raised on South African farms

## Features

### Core Functionality
- ✅ Live blockchain-enabled auctions
- ✅ B2C meat marketplace with cart and checkout
- ✅ Livestock tokenization and investment platform
- ✅ Wallet connectivity (MetaMask, WalletConnect)
- ✅ Real-time bidding system
- ✅ Reputation and verification systems
- ✅ Multi-currency support (ZAR, USDC, ETH)

### Web3 Integration
- Smart contract verification
- NFT certificates for livestock
- Blockchain transaction history
- Gas fee optimization
- Network switching (Ethereum, Polygon, BSC)

### User Types
- Buyers (B2C consumers)
- Businesses (B2B buyers)
- Farmers/Sellers
- Auctioneers
- International Investors

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Motion** for animations
- **Recharts** for data visualization
- **Radix UI** for accessible components

### Backend
- **Supabase** for database and auth
- **Hono** web server on Supabase Edge Functions
- **Google Cloud Platform** integration

### Blockchain
- Web3 wallet integration
- Multi-chain support
- Smart contract interactions

## Brand Colors

- **Primary Red**: #D62828
- **Dark Red**: #A4161A  
- **Carbon Black**: #1A1A1A
- **Gold**: #FFB81C

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Main navigation
│   ├── Footer.tsx      # Site footer
│   └── ...
├── supabase/           # Backend functions
│   └── functions/
│       └── server/     # Hono server
├── styles/             # Global CSS
├── utils/              # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.html          # HTML template
```

## Development

The platform runs on two servers:
- **Frontend**: http://localhost:5173 (Vite dev server)
- **Backend**: http://localhost:3000 (Supabase functions)

## Documentation

Comprehensive developer documentation is available in the codebase covering:
- Backend API (62+ endpoints)
- GCP Integration
- Authentication flows
- Database schema
- Component architecture

## License

Proprietary - Qiniso Mtandq Holdings

## Contact

For questions or support, please contact the MeatDrop development team.
