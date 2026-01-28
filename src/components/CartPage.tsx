import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight,
  Shield,
  Truck,
  CreditCard,
  Tag,
  Gift,
  AlertCircle,
  Award
} from "lucide-react";
import { Input } from "./ui/input";

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  pricePerKg: number;
  quantity: number;
  unit: string;
  butcherName: string;
  category: string;
  inStock: boolean;
  discount?: number;
}

export function CartPage({ onNavigate }: CartPageProps) {
  // Mock cart items - this would come from state management
  const cartItems: CartItem[] = [
    {
      id: "beef-1",
      name: "Premium Grass-Fed Ribeye Steak",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800",
      pricePerKg: 189.99,
      quantity: 2,
      unit: "kg",
      butcherName: "Joe's Premium Butchery",
      category: "Beef",
      inStock: true,
      discount: 15,
    },
    {
      id: "lamb-1",
      name: "Karoo Lamb Chops",
      image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800",
      pricePerKg: 169.99,
      quantity: 1,
      unit: "kg",
      butcherName: "Heritage Butchery",
      category: "Lamb",
      inStock: true,
      discount: 12,
    },
    {
      id: "processed-2",
      name: "Biltong - Beef Traditional",
      image: "https://images.unsplash.com/photo-1529006557710-f9c2c8e5bfb3?w=800",
      pricePerKg: 349.99,
      quantity: 0.5,
      unit: "kg",
      butcherName: "Heritage Butchery",
      category: "Processed",
      inStock: true,
      discount: 0,
    },
  ];

  const calculateItemTotal = (item: CartItem) => {
    const price = item.discount 
      ? item.pricePerKg * (1 - item.discount / 100)
      : item.pricePerKg;
    return price * item.quantity;
  };

  const subtotal = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  const deliveryFee = subtotal > 500 ? 0 : 85;
  const savings = cartItems.reduce((sum, item) => {
    if (item.discount) {
      return sum + (item.pricePerKg * item.quantity * item.discount / 100);
    }
    return sum;
  }, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#D62828] to-[#A4161A] py-12">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => onNavigate('marketplace')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Marketplace
            </button>
            <span className="text-white/60">/</span>
            <span className="text-white font-semibold">Shopping Cart</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Your Shopping Cart</h1>
              <p className="text-white/90 text-lg">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready for checkout
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <div className="text-sm text-white/80 mb-1">Cart Total</div>
              <div className="text-3xl font-bold text-white">R {total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-6">
          {cartItems.length === 0 ? (
            // Empty Cart State
            <Card className="text-center py-24">
              <CardContent>
                <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Start shopping to add items to your cart
                </p>
                <Button
                  onClick={() => onNavigate('marketplace')}
                  className="bg-[#D62828] hover:bg-[#A4161A] text-white px-8"
                >
                  Browse Marketplace
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Free Delivery Banner */}
                {subtotal < 500 && (
                  <Card className="border-2 border-orange-200 bg-orange-50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-orange-900">
                          Add R {(500 - subtotal).toFixed(2)} more for FREE delivery!
                        </p>
                        <p className="text-sm text-orange-700">
                          Currently: R {deliveryFee} delivery fee
                        </p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => onNavigate('marketplace')}
                        className="bg-orange-600 hover:bg-orange-700 text-white"
                      >
                        Shop More
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Cart Items List */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Cart Items ({cartItems.length})</span>
                      <Button variant="ghost" size="sm" className="text-[#D62828]">
                        Clear All
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => {
                      const itemPrice = item.discount 
                        ? item.pricePerKg * (1 - item.discount / 100)
                        : item.pricePerKg;
                      const itemTotal = calculateItemTotal(item);

                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-[#D62828] transition-all"
                        >
                          {/* Product Image */}
                          <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            {item.discount && (
                              <Badge className="absolute top-2 left-2 bg-[#D62828] text-white border-0">
                                -{item.discount}%
                              </Badge>
                            )}
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div className="flex-1 min-w-0">
                                <Badge variant="outline" className="text-xs mb-2">
                                  {item.category}
                                </Badge>
                                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-muted-foreground flex items-center gap-2">
                                  <Shield className="w-4 h-4 text-[#D62828]" />
                                  {item.butcherName}
                                </p>
                              </div>

                              {/* Remove Button */}
                              <button
                                className="text-gray-400 hover:text-[#D62828] transition-colors p-2"
                                title="Remove item"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Price & Quantity */}
                            <div className="flex items-end justify-between mt-4">
                              <div>
                                <div className="flex items-baseline gap-2">
                                  {item.discount ? (
                                    <>
                                      <span className="text-xl font-bold text-[#D62828]">
                                        R {itemPrice.toFixed(2)}
                                      </span>
                                      <span className="text-sm text-muted-foreground line-through">
                                        R {item.pricePerKg.toFixed(2)}
                                      </span>
                                    </>
                                  ) : (
                                    <span className="text-xl font-bold text-[#D62828]">
                                      R {item.pricePerKg.toFixed(2)}
                                    </span>
                                  )}
                                  <span className="text-sm text-muted-foreground">/ {item.unit}</span>
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  Subtotal: <span className="font-semibold text-foreground">R {itemTotal.toFixed(2)}</span>
                                </div>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  className="w-8 h-8 rounded-lg border-2 border-gray-300 hover:border-[#D62828] hover:bg-[#D62828] hover:text-white flex items-center justify-center transition-all"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <div className="w-16 text-center">
                                  <div className="font-bold text-lg">{item.quantity}</div>
                                  <div className="text-xs text-muted-foreground">{item.unit}</div>
                                </div>
                                <button
                                  className="w-8 h-8 rounded-lg border-2 border-gray-300 hover:border-[#D62828] hover:bg-[#D62828] hover:text-white flex items-center justify-center transition-all"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            {/* Stock Status */}
                            {item.inStock ? (
                              <div className="flex items-center gap-2 mt-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-green-700 font-medium">In Stock</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 mt-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-sm text-red-700 font-medium">Out of Stock</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Continue Shopping */}
                <Button
                  variant="outline"
                  onClick={() => onNavigate('marketplace')}
                  className="w-full border-2 border-gray-300 hover:border-[#D62828] hover:text-[#D62828] h-14"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Continue Shopping
                </Button>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Order Summary */}
                  <Card className="border-2 border-[#D62828]">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Promo Code */}
                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Tag className="w-4 h-4 text-[#FFB81C]" />
                          Promo Code
                        </label>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Enter code" 
                            className="flex-1"
                          />
                          <Button className="bg-[#FFB81C] hover:bg-[#E5A618] text-black">
                            Apply
                          </Button>
                        </div>
                      </div>

                      <div className="border-t pt-4 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-semibold">R {subtotal.toFixed(2)}</span>
                        </div>

                        {savings > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-green-600 flex items-center gap-1">
                              <Gift className="w-4 h-4" />
                              Savings
                            </span>
                            <span className="font-semibold text-green-600">
                              -R {savings.toFixed(2)}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground flex items-center gap-2">
                            <Truck className="w-4 h-4" />
                            Delivery
                          </span>
                          {deliveryFee === 0 ? (
                            <span className="font-semibold text-green-600">FREE</span>
                          ) : (
                            <span className="font-semibold">R {deliveryFee.toFixed(2)}</span>
                          )}
                        </div>

                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-bold text-lg">Total</span>
                          <span className="font-bold text-2xl text-[#D62828]">
                            R {total.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Checkout Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-[#D62828] to-[#A4161A] hover:shadow-xl text-white h-14 text-base group"
                        onClick={() => onNavigate('checkout')}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Proceed to Checkout
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      {/* Payment Methods */}
                      <div className="text-center pt-4 border-t">
                        <p className="text-xs text-muted-foreground mb-3">We Accept</p>
                        <div className="flex items-center justify-center gap-3">
                          <Badge variant="outline" className="text-xs">💳 Card</Badge>
                          <Badge variant="outline" className="text-xs">🏦 EFT</Badge>
                          <Badge variant="outline" className="text-xs">Ξ Crypto</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Truck className="w-5 h-5 text-[#1A1A1A]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Cold-Chain Delivery</h4>
                          <p className="text-sm text-muted-foreground">
                            Temperature monitored throughout delivery
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#FFB81C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="w-5 h-5 text-[#FFB81C]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Quality Guaranteed</h4>
                          <p className="text-sm text-muted-foreground">
                            100% satisfaction or money back
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#D62828]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-[#D62828]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Verified Butchers</h4>
                          <p className="text-sm text-muted-foreground">
                            All suppliers are blockchain verified
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Help */}
                  <Card className="bg-gray-100 border-0">
                    <CardContent className="p-6 text-center">
                      <p className="font-semibold mb-2">Need Help?</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our support team is here 24/7
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onNavigate('support')}
                      >
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}