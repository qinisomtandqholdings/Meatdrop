import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ShoppingCart, 
  Heart, 
  MapPin, 
  Award, 
  Shield, 
  Leaf,
  Tag,
  Star
} from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  pricePerKg: number;
  unit: string;
  farmName: string;
  location: string;
  certifications: string[];
  rating: number;
  reviews: number;
  stock: number;
  discount?: number;
  verified: boolean;
  organic?: boolean;
  grassFed?: boolean;
  nftCertificate?: boolean;
  onAddToCart?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  image,
  category,
  pricePerKg,
  unit,
  farmName,
  location,
  certifications,
  rating,
  reviews,
  stock,
  discount,
  verified,
  organic,
  grassFed,
  nftCertificate,
  onAddToCart,
  onViewDetails,
}: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const finalPrice = discount ? pricePerKg * (1 - discount / 100) : pricePerKg;

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#D62828] cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {verified && (
            <Badge className="bg-[#06B6D4] text-white border-0 shadow-lg">
              <Shield className="w-3 h-3 mr-1" />
              Verified Farm
            </Badge>
          )}
          {organic && (
            <Badge className="bg-green-600 text-white border-0 shadow-lg">
              <Leaf className="w-3 h-3 mr-1" />
              Organic
            </Badge>
          )}
          {grassFed && (
            <Badge className="bg-[#FFB81C] text-black border-0 shadow-lg">
              Grass-Fed
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {discount && (
            <Badge className="bg-[#D62828] text-white border-0 shadow-lg text-base px-3 py-1">
              -{discount}%
            </Badge>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${
              isFavorited
                ? "bg-[#D62828] text-white"
                : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-[#D62828] hover:text-white"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
          </button>
        </div>

        {nftCertificate && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
              🏆 NFT Certificate
            </Badge>
          </div>
        )}

        {/* Low Stock Warning */}
        {stock < 10 && stock > 0 && (
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-orange-500 text-white border-0 shadow-lg animate-pulse">
              Only {stock} left!
            </Badge>
          </div>
        )}

        {/* Out of Stock */}
        {stock === 0 && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <Badge className="bg-gray-800 text-white border-0 text-lg px-6 py-2">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-5 space-y-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#FFB81C] text-[#FFB81C]" />
            <span className="font-semibold text-sm">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <div>
          <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-[#D62828] transition-colors">
            {name}
          </h3>
        </div>

        {/* Farm Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-4 h-4 text-[#FFB81C]" />
            <span className="font-medium text-foreground">{farmName}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {certifications.slice(0, 3).map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-[#06B6D4] text-[#06B6D4]"
              >
                {cert}
              </Badge>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="pt-3 border-t border-gray-200">
          <div className="flex items-baseline gap-2 mb-1">
            {discount ? (
              <>
                <span className="text-2xl font-bold text-[#D62828]">
                  R {finalPrice.toFixed(2)}
                </span>
                <span className="text-base text-muted-foreground line-through">
                  R {pricePerKg.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-[#D62828]">
                R {pricePerKg.toFixed(2)}
              </span>
            )}
            <span className="text-sm text-muted-foreground">/ {unit}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Min order: 1 {unit}
          </div>
        </div>

        {/* Quantity Selector & Add to Cart */}
        <div className="flex gap-2">
          <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="px-3 py-2 hover:bg-gray-100 transition-colors font-bold"
            >
              −
            </button>
            <div className="px-4 py-2 font-semibold min-w-[60px] text-center border-x-2 border-gray-300">
              {quantity}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(quantity + 1);
              }}
              className="px-3 py-2 hover:bg-gray-100 transition-colors font-bold"
            >
              +
            </button>
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
            disabled={stock === 0}
            className="flex-1 bg-[#D62828] hover:bg-[#A4161A] disabled:opacity-50"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* View Details Button */}
        <Button
          variant="outline"
          className="w-full border-2 border-gray-300 hover:border-[#D62828] hover:text-[#D62828]"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails?.(id);
          }}
        >
          View Details & Traceability
        </Button>
      </CardContent>
    </Card>
  );
}


