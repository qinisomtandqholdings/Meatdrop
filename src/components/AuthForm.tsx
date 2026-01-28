import { Mail, Lock, User, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AuthFormProps {
  onBack: () => void;
}

export function AuthForm({ onBack }: AuthFormProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <button 
            onClick={onBack}
            className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
          >
            <div className="bg-[#7BC043] rounded-lg p-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" fill="white"/>
                <path d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z" fill="#7BC043"/>
                <path d="M16 16L12 18V22L16 24L20 22V18L16 16Z" fill="#7BC043"/>
              </svg>
            </div>
            <span className="text-2xl font-semibold text-[#1A1A1A]">MeatDrop</span>
          </button>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>
                    Sign in to access your MeatDrop account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-[#7BC043] hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button 
                    className="w-full bg-[#7BC043] hover:bg-[#6AA037] text-white"
                    onClick={onBack}
                  >
                    Sign In
                  </Button>

                  <div className="relative my-6">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-[#1A1A1A] hover:bg-gray-50"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Join MeatDrop to start trading livestock
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="you@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="confirm-password" 
                        type="password" 
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="text-sm">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 mt-1" />
                      <span className="text-muted-foreground">
                        I agree to the <a href="#" className="text-[#7BC043] hover:underline">Terms of Service</a> and <a href="#" className="text-[#7BC043] hover:underline">Privacy Policy</a>
                      </span>
                    </label>
                  </div>

                  <Button 
                    className="w-full bg-[#7BC043] hover:bg-[#6AA037] text-white"
                    onClick={onBack}
                  >
                    Create Account
                  </Button>

                  <div className="relative my-6">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-[#1A1A1A] hover:bg-gray-50"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Secure authentication powered by blockchain technology
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 relative">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Livestock farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7BC043]/90 to-[#1A1A1A]/90 flex items-center justify-center p-12">
          <div className="text-white text-center max-w-lg">
            <h2 className="text-4xl font-semibold mb-4">
              Digital Livestock Trading Platform
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of farmers and buyers trading livestock securely with blockchain technology
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-semibold mb-1">2,400+</div>
                <div className="text-white/70">Active Listings</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-1">850+</div>
                <div className="text-white/70">Sellers</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-1">$12.5M</div>
                <div className="text-white/70">Volume</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


