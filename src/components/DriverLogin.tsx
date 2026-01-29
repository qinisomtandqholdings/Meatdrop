import { useState } from "react";
import { Bike, Lock, User, ArrowRight, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

interface DriverLoginProps {
  onLogin: (driverData: DriverData) => void;
  onBack: () => void;
}

export interface DriverData {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicleNumber: string;
  rating: number;
}

export function DriverLogin({ onLogin, onBack }: DriverLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo credentials - in production, this would be an actual API call
      if (email === "driver@meatdrop.com" && password === "driver123") {
        const driverData: DriverData = {
          id: "DRV-001",
          name: "John Mkhize",
          email: "driver@meatdrop.com",
          phone: "+27 82 345 6789",
          vehicleNumber: "GP-12345",
          rating: 4.8,
        };
        onLogin(driverData);
      } else {
        setError("Invalid email or password. Try driver@meatdrop.com / driver123");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] flex items-center justify-center p-3 sm:p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#FFB81C] rounded-full blur-[60px] sm:blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#D62828] rounded-full blur-[60px] sm:blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-3 sm:mb-4 text-white hover:text-[#FFB81C] hover:bg-white/10 text-sm"
        >
          ← Back to Home
        </Button>

        <Card className="border-2 border-[#FFB81C]/20 shadow-2xl backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-8 px-4 sm:px-6">
            {/* Logo */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="bg-gradient-to-br from-[#FFB81C] to-[#F59E0B] p-4 sm:p-6 rounded-2xl shadow-lg">
                <Bike className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>

            <CardTitle className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1 sm:mb-2">
              Driver Portal
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600">
              Sign in to access your delivery dashboard
            </p>
          </CardHeader>

          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 pb-6 sm:pb-8">
            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="driver@meatdrop.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 sm:pl-11 h-11 sm:h-12 border-2 focus:border-[#FFB81C] transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 sm:pl-11 pr-10 sm:pr-11 h-11 sm:h-12 border-2 focus:border-[#FFB81C] transition-colors text-sm sm:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-2.5 sm:p-3 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-xs sm:text-sm text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Demo Credentials Info */}
              <div className="p-3 sm:p-4 bg-gradient-to-r from-[#FFB81C]/10 to-[#F59E0B]/10 border-2 border-[#FFB81C]/30 rounded-lg">
                <p className="text-xs font-bold text-[#1A1A1A] mb-1.5 sm:mb-2">Demo Login Credentials:</p>
                <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs text-gray-700 font-mono">
                  <p>📧 Email: driver@meatdrop.com</p>
                  <p>🔒 Password: driver123</p>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-gray-300 text-[#FFB81C] focus:ring-[#FFB81C]"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-[#FFB81C] hover:text-[#F59E0B] font-semibold transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-[#FFB81C] to-[#F59E0B] hover:shadow-xl text-black font-bold text-sm sm:text-base transition-all"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                Don't have an account?{" "}
                <button className="text-[#FFB81C] hover:text-[#F59E0B] font-bold transition-colors">
                  Apply to become a driver
                </button>
              </p>
            </div>

            {/* Features */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="text-center p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">💰</div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Track Earnings</p>
              </div>
              <div className="text-center p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">🗺️</div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Optimize Routes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <div className="mt-3 sm:mt-4 text-center px-4">
          <p className="text-xs sm:text-sm text-white/70">
            Need help? Contact{" "}
            <a href="mailto:support@meatdrop.com" className="text-[#FFB81C] hover:text-[#F59E0B] font-semibold">
              support@meatdrop.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}