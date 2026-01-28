import { MapPin, Share2, Star, Tv, Package, Award, Copy, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface AuctionData {
  id: string;
  title: string;
  image: string;
  status: "live" | "upcoming" | "closed";
  verified: boolean;
  auctioneerName: string;
  auctioneerLogo: string;
  reputation: number;
  location: string;
  description: string;
  priceZAR: string;
  priceUSDC?: string;
  priceETH?: string;
  smartContract: string;
  webcast?: boolean;
  equipment?: boolean;
  nftCertificate?: boolean;
  itemCount?: string;
}

interface AuctionCardProps {
  auction: AuctionData;
  onViewDetails: (id: string) => void;
}

export function AuctionCard({ auction, onViewDetails }: AuctionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-[#D62828]">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <ImageWithFallback 
          src={auction.image}
          alt={auction.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {auction.status === "live" && (
            <Badge className="bg-[#06B6D4] text-white border-0 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              Live
            </Badge>
          )}
          {auction.verified && (
            <Badge className="bg-[#FFB81C] text-black border-0 shadow-lg font-semibold">
              <Award className="w-3 h-3 mr-1" />
              Blockchain Enabled
            </Badge>
          )}
        </div>

        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {auction.webcast && (
            <Badge variant="secondary" className="bg-black/70 text-white border-0 backdrop-blur-sm">
              <Tv className="w-3 h-3 mr-1" />
              Webcast
            </Badge>
          )}
          {auction.equipment && (
            <Badge variant="secondary" className="bg-black/70 text-white border-0 backdrop-blur-sm">
              <Package className="w-3 h-3 mr-1" />
              Equipment
            </Badge>
          )}
          {auction.nftCertificate && (
            <Badge variant="secondary" className="bg-black/70 text-white border-0 backdrop-blur-sm">
              NFT Certificate
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Auctioneer Info */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-12 h-12 border-2 border-[#D62828]">
            <AvatarImage src={auction.auctioneerLogo} />
            <AvatarFallback className="bg-[#D62828] text-white">
              {auction.auctioneerName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate">{auction.auctioneerName}</div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < auction.reputation
                      ? "fill-[#FFB81C] text-[#FFB81C]"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#D62828] mb-2 line-clamp-2 min-h-[3rem] text-xl">
          {auction.title}
        </h3>

        {/* Location & Count */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>{auction.location}</span>
          </div>
          {auction.itemCount && (
            <Badge variant="outline" className="border-[#D62828] text-[#D62828]">
              {auction.itemCount}
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[2.5rem]">
          {auction.description}
        </p>

        {/* Smart Contract */}
        <div className="bg-[#1A1A1A] rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-white/60 mb-1">Smart Contract</div>
              <div className="flex items-center gap-2">
                <code className="text-white text-xs font-mono">{auction.smartContract}</code>
                <button className="text-white/60 hover:text-white transition-colors">
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
            <button className="text-[#06B6D4] hover:text-[#05a3c3] transition-colors">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-sm text-muted-foreground mb-1">Current Price</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold text-[#1A1A1A]">{auction.priceZAR}</span>
          </div>
          {(auction.priceUSDC || auction.priceETH) && (
            <div className="flex items-center gap-3 text-sm">
              {auction.priceUSDC && (
                <span className="text-muted-foreground">≈ {auction.priceUSDC}</span>
              )}
              {auction.priceETH && (
                <span className="text-muted-foreground">≈ {auction.priceETH}</span>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-[#D62828] hover:bg-[#A4161A] text-white"
            onClick={() => onViewDetails(auction.id)}
          >
            View Auction
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}


