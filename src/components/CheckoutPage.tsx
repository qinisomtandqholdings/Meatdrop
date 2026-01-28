import { useState } from "react";
import { ArrowLeft, CreditCard, Shield, Lock, Truck, CheckCircle2, MapPin, User, Mail, Phone, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Mock cart items
  const cartItems = [
    { id: 1, name: "Premium Wagyu Ribeye Steak", price: 1599.99, quantity: 2, weight: "500g" },
    { id: 2, name: "Grass-Fed Beef Tenderloin", price: 1150.00, quantity: 1, weight: "400g" },
    { id: 3, name: "Organic Lamb Chops", price: 799.00, quantity: 3, weight: "300g" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 250.00;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-6">
          <Card className="border-2 border-[#D62828] shadow-2xl">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#D62828] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">Order Confirmed!</h1>
              <p className="text-lg text-gray-600 mb-2">Thank you for your order</p>
              <p className="text-gray-500 mb-8">
                Order #MD-{Math.floor(Math.random() * 100000)}
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">
                  We've sent a confirmation email to your inbox.
                </p>
                <p className="text-sm text-gray-600">
                  Expected delivery: <span className="font-semibold text-[#1A1A1A]">3-5 business days</span>
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('orders')}
                  className="bg-[#D62828] hover:bg-[#A4161A] text-white"
                >
                  View Order Status
                </Button>
                <Button
                  onClick={() => onNavigate('marketplace')}
                  variant="outline"
                  className="border-gray-300"
                >
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('cart')}
            className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#D62828] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Cart</span>
          </button>
          <h1 className="text-4xl font-bold text-[#1A1A1A]">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order in a few simple steps</p>
        </div>

        {/* Security Banner */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Lock className="w-5 h-5 text-[#1AA34A]" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="w-5 h-5 text-[#1AA34A]" />
            <span className="text-sm font-medium">SSL Encrypted</span>
          </div>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle2 className="w-5 h-5 text-[#1AA34A]" />
            <span className="text-sm font-medium">Trusted Platform</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D62828] rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">Shipping Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-gray-500" />
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-gray-500" />
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                  />
                </div>

                <div className="mt-4">
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 (82) 123-4567"
                    className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                  />
                </div>

                <div className="mt-4">
                  <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-gray-500" />
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="123 Nelson Mandela Boulevard"
                    className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city" className="mb-2 block">City</Label>
                    <Input
                      id="city"
                      placeholder="Cape Town"
                      className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="mb-2 block">Province</Label>
                    <Input
                      id="state"
                      placeholder="Western Cape"
                      className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip" className="mb-2 block">Postal Code</Label>
                    <Input
                      id="zip"
                      placeholder="8001"
                      className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D62828] rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">Payment Method</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  {/* Credit Card */}
                  <div className="flex items-center space-x-3 border-2 border-gray-200 rounded-lg p-4 hover:border-[#D62828] transition-colors cursor-pointer">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">Credit / Debit Card</span>
                      </div>
                    </Label>
                    <div className="flex gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="pl-4 space-y-4 animate-in fade-in-50">
                      <div>
                        <Label htmlFor="cardNumber" className="mb-2 block">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828] font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="mb-2 block">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM / YY"
                            className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="mb-2 block">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="border-gray-300 focus:border-[#D62828] focus:ring-[#D62828] font-mono"
                            maxLength={3}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PayPal */}
                  <div className="flex items-center space-x-3 border-2 border-gray-200 rounded-lg p-4 hover:border-[#D62828] transition-colors cursor-pointer">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#003087] rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>
                        <span className="font-medium">PayPal</span>
                      </div>
                    </Label>
                  </div>

                  {/* Bank Transfer */}
                  <div className="flex items-center space-x-3 border-2 border-gray-200 rounded-lg p-4 hover:border-[#D62828] transition-colors cursor-pointer">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">Bank Transfer</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <Separator className="my-6" />

                {/* Billing Address */}
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="sameAsShipping"
                    checked={sameAsShipping}
                    onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                  />
                  <Label htmlFor="sameAsShipping" className="cursor-pointer">
                    Billing address same as shipping address
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-gray-200 shadow-lg sticky top-24">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-2xl">🥩</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-[#1A1A1A] leading-tight mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500">{item.weight}</p>
                        <p className="text-xs text-gray-600 mt-1">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-semibold text-[#1A1A1A]">
                        R{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Price Breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium">R{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (15%)</span>
                    <span className="font-medium">R{tax.toFixed(2)}</span>
                  </div>

                  <Separator className="my-3" />

                  <div className="flex justify-between text-lg font-bold text-[#1A1A1A]">
                    <span>Total</span>
                    <span className="text-[#D62828]">R{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-[#D62828] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A] mb-1">
                        Estimated Delivery
                      </p>
                      <p className="text-xs text-gray-600">
                        3-5 business days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  onClick={handlePlaceOrder}
                  className="w-full mt-6 bg-[#D62828] hover:bg-[#A4161A] text-white py-6 text-lg font-semibold shadow-lg"
                >
                  Place Order - R{total.toFixed(2)}
                </Button>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-[#1AA34A]" />
                    <span>Secure</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1">
                    <Lock className="w-4 h-4 text-[#1AA34A]" />
                    <span>Encrypted</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-[#1AA34A]" />
                    <span>Verified</span>
                  </div>
                </div>

                <p className="text-xs text-center text-gray-500 mt-4">
                  Your payment information is secure and encrypted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

