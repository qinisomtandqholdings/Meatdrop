import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  Filter, 
  SlidersHorizontal, 
  Store,
  Award,
  TrendingUp,
  Package
} from "lucide-react";
import { useState } from "react";

interface MeatMarketplaceProps {
  onNavigate: (page: string) => void;
}

export function MeatMarketplace({ onNavigate }: MeatMarketplaceProps) {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  // Premium Meat Products Data - Easily Interchangeable
  const products = [
    // DAILY FRESH MEATS - BEEF
    {
      id: "beef-1",
      name: "Premium Grass-Fed Ribeye Steak",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800",
      category: "Beef",
      pricePerKg: 189.99,
      unit: "kg",
      farmName: "Highveld Beef Farm",
      butcherName: "Joe's Premium Butchery",
      butcherLocation: "Sandton, Johannesburg",
      location: "Gauteng, South Africa",
      certifications: ["Grass-Fed", "Hormone-Free", "Free-Range"],
      rating: 4.9,
      reviews: 234,
      stock: 45,
      discount: 15,
      verified: true,
      organic: true,
      grassFed: true,
      nftCertificate: true,
    },
    {
      id: "beef-2",
      name: "Wagyu Beef Sirloin Steak",
      image: "https://images.unsplash.com/photo-1588347818036-8fc58e0d5d7f?w=800",
      category: "Beef",
      pricePerKg: 549.99,
      unit: "kg",
      farmName: "Mpumalanga Wagyu Estate",
      butcherName: "The Meat Co.",
      butcherLocation: "Rosebank, Johannesburg",
      location: "Mpumalanga, South Africa",
      certifications: ["Wagyu Certified", "Grade A5", "Premium"],
      rating: 5.0,
      reviews: 189,
      stock: 8,
      discount: 0,
      verified: true,
      organic: true,
      grassFed: true,
      nftCertificate: true,
    },
    {
      id: "beef-3",
      name: "Beef Fillet - Whole Cut",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800",
      category: "Beef",
      pricePerKg: 249.99,
      unit: "kg",
      farmName: "Free State Cattle Co.",
      butcherName: "Braai Masters Butchery",
      butcherLocation: "Melrose Arch, Johannesburg",
      location: "Free State, South Africa",
      certifications: ["Premium Cut", "Aged 21 Days"],
      rating: 4.8,
      reviews: 312,
      stock: 23,
      discount: 10,
      verified: true,
      organic: false,
      grassFed: true,
      nftCertificate: true,
    },
    {
      id: "beef-4",
      name: "Beef Rump Steak",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
      category: "Beef",
      pricePerKg: 139.99,
      unit: "kg",
      farmName: "Karoo Beef Suppliers",
      butcherName: "Township Meat Market",
      butcherLocation: "Soweto, Johannesburg",
      location: "Northern Cape, South Africa",
      certifications: ["Halal", "Quality Assured"],
      rating: 4.7,
      reviews: 156,
      stock: 67,
      discount: 0,
      verified: true,
      organic: false,
      grassFed: true,
      nftCertificate: false,
    },
    
    // LAMB & MUTTON
    {
      id: "lamb-1",
      name: "Karoo Lamb Chops",
      image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800",
      category: "Lamb",
      pricePerKg: 169.99,
      unit: "kg",
      farmName: "Karoo Lamb Estates",
      butcherName: "Heritage Butchery",
      butcherLocation: "Parkhurst, Johannesburg",
      location: "Western Cape, South Africa",
      certifications: ["Karoo Certified", "Free-Range", "Organic"],
      rating: 4.9,
      reviews: 278,
      stock: 34,
      discount: 12,
      verified: true,
      organic: true,
      grassFed: true,
      nftCertificate: true,
    },
    {
      id: "lamb-2",
      name: "Lamb Leg - Whole",
      image: "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=800",
      category: "Lamb",
      pricePerKg: 149.99,
      unit: "kg",
      farmName: "Eastern Cape Lamb",
      butcherName: "Halal Meat Specialists",
      butcherLocation: "Lenasia, Johannesburg",
      location: "Eastern Cape, South Africa",
      certifications: ["Halal Certified", "Premium"],
      rating: 4.8,
      reviews: 198,
      stock: 28,
      discount: 0,
      verified: true,
      organic: false,
      grassFed: true,
      nftCertificate: false,
    },

    // CHICKEN & POULTRY
    {
      id: "chicken-1",
      name: "Free-Range Whole Chicken",
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800",
      category: "Chicken",
      pricePerKg: 89.99,
      unit: "kg",
      farmName: "KZN Free-Range Poultry",
      butcherName: "Fresh Poultry Market",
      butcherLocation: "Randburg, Johannesburg",
      location: "KwaZulu-Natal, South Africa",
      certifications: ["Free-Range", "Antibiotic-Free", "Organic"],
      rating: 4.7,
      reviews: 445,
      stock: 156,
      discount: 8,
      verified: true,
      organic: true,
      grassFed: false,
      nftCertificate: false,
    },
    {
      id: "chicken-2",
      name: "Chicken Breasts - Skinless",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800",
      category: "Chicken",
      pricePerKg: 119.99,
      unit: "kg",
      farmName: "Limpopo Poultry Farms",
      butcherName: "Protein Palace Butchery",
      butcherLocation: "Midrand, Johannesburg",
      location: "Limpopo, South Africa",
      certifications: ["Lean Cut", "Quality Grade A"],
      rating: 4.6,
      reviews: 523,
      stock: 234,
      discount: 0,
      verified: true,
      organic: false,
      grassFed: false,
      nftCertificate: false,
    },

    // PORK
    {
      id: "pork-1",
      name: "Pork Chops - Center Cut",
      image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=800",
      category: "Pork",
      pricePerKg: 99.99,
      unit: "kg",
      farmName: "Western Cape Pork Farms",
      butcherName: "Boerewors Bros Butchery",
      butcherLocation: "Fourways, Johannesburg",
      location: "Western Cape, South Africa",
      certifications: ["Quality Assured", "Farm Fresh"],
      rating: 4.7,
      reviews: 267,
      stock: 89,
      discount: 10,
      verified: true,
      organic: false,
      grassFed: false,
      nftCertificate: false,
    },
    {
      id: "pork-2",
      name: "Pork Belly - Whole Slab",
      image: "https://images.unsplash.com/photo-1626844131082-256783844137?w=800",
      category: "Pork",
      pricePerKg: 129.99,
      unit: "kg",
      farmName: "Mpumalanga Pork Co.",
      butcherName: "The Smokehouse Butchery",
      butcherLocation: "Bryanston, Johannesburg",
      location: "Mpumalanga, South Africa",
      certifications: ["Premium Cut", "Fresh Daily"],
      rating: 4.8,
      reviews: 178,
      stock: 45,
      discount: 0,
      verified: true,
      organic: false,
      grassFed: false,
      nftCertificate: false,
    },

    // PROCESSED MEATS
    {
      id: "processed-1",
      name: "Traditional Boerewors - Spicy",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800",
      category: "Processed",
      pricePerKg: 89.99,
      unit: "kg",
      farmName: "Gauteng Meat Processors",
      butcherName: "Boerewors Bros Butchery",
      butcherLocation: "Fourways, Johannesburg",
      location: "Gauteng, South Africa",
      certifications: ["Traditional Recipe", "Halal"],
      rating: 4.9,
      reviews: 892,
      stock: 345,
      discount: 5,
      verified: true,
      organic: false,
      grassFed: false,
      nftCertificate: false,
    },
    {
      id: "processed-2",
      name: "Biltong - Beef Traditional",
      image: "https://images.unsplash.com/photo-1529006557710-f9c2c8e5bfb3?w=800",
      category: "Processed",
      pricePerKg: 349.99,
      unit: "kg",
      farmName: "Karoo Biltong Masters",
      butcherName: "Heritage Butchery",
      butcherLocation: "Parkhurst, Johannesburg",
      location: "Northern Cape, South Africa",
      certifications: ["Air-Dried", "No Preservatives", "Traditional"],
      rating: 5.0,
      reviews: 1245,
      stock: 67,
      discount: 0,
      verified: true,
      organic: true,
      grassFed: true,
      nftCertificate: true,
    },
    {
      id: "processed-3",
      name: "Droëwors - Traditional Spice",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800",
      category: "Processed",
      pricePerKg: 299.99,
      unit: "kg",
      farmName: "Free State Meat Works",
      butcherName: "The Meat Co.",
      butcherLocation: "Rosebank, Johannesburg",
      location: "Free State, South Africa",
      certifications: ["Air-Dried", "Traditional Recipe"],
      rating: 4.9,
      reviews: 678,
      stock: 123,
      discount: 8,
      verified: true,
      organic: false,
      grassFed: true,
      nftCertificate: false,
    },
    {
      id: "processed-4",
      name: "Bacon - Smoked Streaky",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800",
      category: "Processed",
      pricePerKg: 159.99,
      unit: "kg",
      farmName: "Western Cape Smokehouse",
      butcherName: "The Smokehouse Butchery",
      butcherLocation: "Bryanston, Johannesburg",
      location: "Western Cape, South Africa",
      certifications: ["Oak Smoked", "Nitrate-Free"],
      rating: 4.8,
      reviews: 534,
      stock: 189,
      discount: 0,
      verified: true,
      organic: false,
      grassFed: false,
      nftCertificate: false,
    },
    {
      id: "processed-5",
      name: "Beef Burgers - Gourmet Pack (8)",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      category: "Processed",
      pricePerKg: 129.99,
      unit: "pack",
      farmName: "Gauteng Beef Co.",
      butcherName: "Braai Masters Butchery",
      butcherLocation: "Melrose Arch, Johannesburg",
      location: "Gauteng, South Africa",
      certifications: ["100% Beef", "No Fillers", "Premium"],
      rating: 4.7,
      reviews: 456,
      stock: 234,
      discount: 12,
      verified: true,
      organic: false,
      grassFed: true,
      nftCertificate: false,
    },
    {
      id: "processed-6",
      name: "Lamb Sosaties - Marinated (1kg)",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      category: "Processed",
      pricePerKg: 179.99,
      unit: "kg",
      farmName: "Cape Lamb Suppliers",
      butcherName: "Halal Meat Specialists",
      butcherLocation: "Lenasia, Johannesburg",
      location: "Western Cape, South Africa",
      certifications: ["Halal", "Cape Malay Recipe", "Marinated"],
      rating: 4.9,
      reviews: 389,
      stock: 145,
      discount: 0,
      verified: true,
      organic: false,
      grassFed: true,
      nftCertificate: false,
    },
  ];

  // Filter products by category
  const filteredProducts = products.filter(product => 
    category === "all" || product.category.toLowerCase() === category.toLowerCase()
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.pricePerKg - b.pricePerKg;
      case "price-high":
        return b.pricePerKg - a.pricePerKg;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const categories = [
    { id: "all", label: "All Products", count: products.length },
    { id: "beef", label: "Beef", count: products.filter(p => p.category === "Beef").length },
    { id: "lamb", label: "Lamb & Mutton", count: products.filter(p => p.category === "Lamb").length },
    { id: "chicken", label: "Chicken & Poultry", count: products.filter(p => p.category === "Chicken").length },
    { id: "pork", label: "Pork", count: products.filter(p => p.category === "Pork").length },
    { id: "processed", label: "Processed Meats", count: products.filter(p => p.category === "Processed").length },
  ];

  const featuredButchers = [
    { name: "Joe's Premium Butchery", location: "Sandton", rating: 4.9, products: 24 },
    { name: "The Meat Co.", location: "Rosebank", rating: 5.0, products: 18 },
    { name: "Heritage Butchery", location: "Parkhurst", rating: 4.9, products: 32 },
    { name: "Braai Masters Butchery", location: "Melrose Arch", rating: 4.8, products: 28 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#D62828] to-[#A4161A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')]"></div>
        </div>

        <div className="relative h-full max-w-[1600px] mx-auto px-6 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Store className="w-4 h-4" />
              <span className="font-medium">Premium Meat Marketplace</span>
            </div>
            <h1 className="text-6xl font-bold mb-4">Daily Fresh Meats</h1>
            <p className="text-xl text-white/90 mb-6">
              From local butchers to your table • Blockchain-verified quality
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-[#D62828] hover:bg-gray-100 px-8">
                Shop by Category
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                View Butchers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D62828] mb-1">{products.length}+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D62828] mb-1">12</div>
              <div className="text-sm text-muted-foreground">Local Butchers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D62828] mb-1">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D62828] mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Cold-Chain Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Category Filter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-[#D62828]" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                          category === cat.id
                            ? "bg-[#D62828] text-white font-semibold"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <Badge variant="outline" className={category === cat.id ? "border-white text-white" : ""}>
                          {cat.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Butchers */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FFB81C]" />
                    Featured Butchers
                  </h3>
                  <div className="space-y-3">
                    {featuredButchers.map((butcher, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="font-semibold text-sm mb-1">{butcher.name}</div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{butcher.location}</span>
                          <span className="flex items-center gap-1">
                            ⭐ {butcher.rating}
                          </span>
                        </div>
                        <div className="text-xs text-[#D62828] mt-1">
                          {butcher.products} products
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Filters */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Quick Filters</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">On Sale</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Organic</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Grass-Fed</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">NFT Certificate</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Halal</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg border-2 border-gray-200">
                <div className="flex items-center gap-4">
                  <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold">
                    {sortedProducts.length} Products
                  </span>
                  {category !== "all" && (
                    <Badge className="bg-[#D62828] text-white border-0">
                      {categories.find(c => c.id === category)?.label}
                    </Badge>
                  )}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg bg-white hover:border-[#D62828] transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={(id) => console.log("Add to cart:", id)}
                    onViewDetails={(id) => console.log("View details:", id)}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white px-12 py-6"
                >
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

