import { useState } from "react";
import {
  Package,
  MapPin,
  Clock,
  Coins,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Navigation,
  Phone,
  Star,
  Bike,
  Timer,
  Thermometer,
  Calendar,
  ChevronRight,
  User,
  Award,
  LogOut,
  Wallet,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DriverData } from "./DriverLogin";

interface BikeDriverDashboardProps {
  driverData: DriverData;
  onLogout: () => void;
}

interface Delivery {
  id: string;
  orderId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: string[];
  totalWeight: string;
  distance: string;
  estimatedTime: string;
  status: "pending" | "picked-up" | "in-transit" | "delivered";
  priority: "normal" | "urgent";
  specialInstructions?: string;
  deliveryFee: number;
  temperature: string;
  pickupLocation: string;
}

interface DriverStats {
  todayDeliveries: number;
  todayEarnings: number;
  totalDistance: number;
  averageRating: number;
  onTimeDeliveryRate: number;
  weeklyDeliveries: number;
  weeklyEarnings: number;
  currentStreak: number;
}

export function BikeDriverDashboard({ driverData, onLogout }: BikeDriverDashboardProps) {
  const [activeTab, setActiveTab] = useState("active");

  // Mock driver stats
  const stats: DriverStats = {
    todayDeliveries: 8,
    todayEarnings: 450,
    totalDistance: 42.5,
    averageRating: 4.8,
    onTimeDeliveryRate: 96,
    weeklyDeliveries: 47,
    weeklyEarnings: 2850,
    currentStreak: 5,
  };

  // Mock active deliveries
  const activeDeliveries: Delivery[] = [
    {
      id: "DEL-1001",
      orderId: "ORD-5678",
      customerName: "Sarah Johnson",
      customerPhone: "+27 82 345 6789",
      customerAddress: "123 Oak Street, Sandton, Johannesburg",
      items: ["Prime Beef Steak (2kg)", "Chicken Breasts (1.5kg)", "Lamb Chops (1kg)"],
      totalWeight: "4.5kg",
      distance: "3.2km",
      estimatedTime: "15 min",
      status: "in-transit",
      priority: "urgent",
      specialInstructions: "Ring doorbell twice. Customer prefers contactless delivery.",
      deliveryFee: 65,
      temperature: "-2°C",
      pickupLocation: "MeatDrop Hub - Sandton",
    },
    {
      id: "DEL-1002",
      orderId: "ORD-5679",
      customerName: "Michael Chen",
      customerPhone: "+27 83 456 7890",
      customerAddress: "45 Pine Avenue, Rosebank, Johannesburg",
      items: ["Pork Ribs (2kg)", "Beef Mince (1kg)"],
      totalWeight: "3kg",
      distance: "5.1km",
      estimatedTime: "22 min",
      status: "picked-up",
      priority: "normal",
      deliveryFee: 75,
      temperature: "-1°C",
      pickupLocation: "MeatDrop Hub - Sandton",
    },
  ];

  // Mock completed deliveries
  const completedDeliveries: Delivery[] = [
    {
      id: "DEL-0998",
      orderId: "ORD-5676",
      customerName: "David Nkosi",
      customerPhone: "+27 81 234 5678",
      customerAddress: "78 Maple Road, Fourways, Johannesburg",
      items: ["T-Bone Steak (2kg)", "Boerewors (1.5kg)"],
      totalWeight: "3.5kg",
      distance: "4.8km",
      estimatedTime: "18 min",
      status: "delivered",
      priority: "normal",
      deliveryFee: 70,
      temperature: "-2°C",
      pickupLocation: "MeatDrop Hub - Sandton",
    },
    {
      id: "DEL-0997",
      orderId: "ORD-5675",
      customerName: "Lisa van der Berg",
      customerPhone: "+27 84 567 8901",
      customerAddress: "12 Cedar Street, Hyde Park, Johannesburg",
      items: ["Chicken Thighs (2kg)", "Beef Fillet (1kg)", "Pork Chops (1.5kg)"],
      totalWeight: "4.5kg",
      distance: "6.2km",
      estimatedTime: "25 min",
      status: "delivered",
      priority: "normal",
      deliveryFee: 80,
      temperature: "-2°C",
      pickupLocation: "MeatDrop Hub - Sandton",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-transit":
        return "bg-[#D62828]";
      case "picked-up":
        return "bg-[#FFB81C]";
      case "delivered":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityBadge = (priority: string) => {
    return priority === "urgent" ? (
      <Badge className="bg-[#D62828] text-white border-none">
        <AlertCircle className="w-3 h-3 mr-1" />
        Urgent
      </Badge>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-[#D62828] to-[#A4161A] p-2 sm:p-3 rounded-xl">
                <Bike className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">Driver Dashboard</h1>
                <p className="text-gray-400 text-xs sm:text-sm">Fresh Meat Delivery Service</p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-left sm:text-right">
                <p className="text-xs sm:text-sm text-gray-400">Online</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium">Active</span>
                </div>
              </div>
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#D62828]">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Driver" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                onClick={onLogout}
                className="border-white text-white hover:bg-white/20 hover:text-white flex items-center gap-1.5 text-sm px-3 py-1.5 h-auto"
              >
                <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {/* Today's Deliveries */}
          <Card className="border-l-4 border-l-[#D62828] hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 w-full">
                  <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Today's Deliveries</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">{stats.todayDeliveries}</h3>
                  <p className="text-[10px] sm:text-xs text-green-600 mt-0.5 sm:mt-1 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="hidden sm:inline">+2 from yesterday</span>
                    <span className="sm:hidden">+2</span>
                  </p>
                </div>
                <div className="bg-[#D62828]/10 p-2 sm:p-3 rounded-lg self-end sm:self-auto">
                  <Package className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Earnings */}
          <Card className="border-l-4 border-l-[#FFB81C] hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 w-full">
                  <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Today's Earnings</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">R{stats.todayEarnings}</h3>
                  <p className="text-[10px] sm:text-xs text-green-600 mt-0.5 sm:mt-1 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="hidden sm:inline">+R75 from yesterday</span>
                    <span className="sm:hidden">+R75</span>
                  </p>
                </div>
                <div className="bg-[#FFB81C]/10 p-2 sm:p-3 rounded-lg self-end sm:self-auto">
                  <Coins className="w-4 h-4 sm:w-6 sm:h-6 text-[#FFB81C]" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Distance Traveled */}
          <Card className="border-l-4 border-l-[#A4161A] hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 w-full">
                  <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Distance Today</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">{stats.totalDistance}km</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">~{(stats.totalDistance * 0.6).toFixed(1)} mi</p>
                </div>
                <div className="bg-[#A4161A]/10 p-2 sm:p-3 rounded-lg self-end sm:self-auto">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#A4161A]" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating */}
          <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 w-full">
                  <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Average Rating</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] flex items-center gap-1.5 sm:gap-2">
                    {stats.averageRating}
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB81C] text-[#FFB81C]" />
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">{stats.onTimeDeliveryRate}% on-time</p>
                </div>
                <div className="bg-green-600/10 p-2 sm:p-3 rounded-lg self-end sm:self-auto">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D62828]" />
                Weekly Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 pt-0">
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-gray-600">Weekly Deliveries</span>
                  <span className="font-bold">{stats.weeklyDeliveries}</span>
                </div>
                <Progress value={(stats.weeklyDeliveries / 60) * 100} className="h-1.5 sm:h-2" />
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Target: 60 deliveries/week</p>
              </div>
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-gray-600">Weekly Earnings</span>
                  <span className="font-bold">R{stats.weeklyEarnings}</span>
                </div>
                <Progress value={(stats.weeklyEarnings / 3000) * 100} className="h-1.5 sm:h-2" />
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Target: R3,000/week</p>
              </div>
              <div className="pt-3 sm:pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">Current Streak</span>
                  <Badge className="bg-[#FFB81C] text-[#1A1A1A] border-none text-xs">
                    🔥 {stats.currentStreak} days
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  className="h-16 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 hover:border-[#D62828] hover:bg-[#D62828]/5 p-2"
                >
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                  <span className="text-[10px] sm:text-sm">View Route</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 hover:border-[#D62828] hover:bg-[#D62828]/5 p-2"
                >
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                  <span className="text-[10px] sm:text-sm">Call Support</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 hover:border-[#D62828] hover:bg-[#D62828]/5 p-2"
                >
                  <AlertCircle className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                  <span className="text-[10px] sm:text-sm">Report Issue</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 hover:border-[#D62828] hover:bg-[#D62828]/5 p-2"
                >
                  <Timer className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                  <span className="text-[10px] sm:text-sm">Break Timer</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 hover:border-[#D62828] hover:bg-[#D62828]/5 p-2"
                >
                  <Wallet className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                  <span className="text-[10px] sm:text-sm">Earnings</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 hover:border-[#D62828] hover:bg-[#D62828]/5 p-2"
                >
                  <User className="w-4 h-4 sm:w-6 sm:h-6 text-[#D62828]" />
                  <span className="text-[10px] sm:text-sm">Profile</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deliveries Tabs */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-xl flex items-center gap-2">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#D62828]" />
              Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6 h-9 sm:h-10">
                <TabsTrigger value="active" className="data-[state=active]:bg-[#D62828] data-[state=active]:text-white text-xs sm:text-sm">
                  Active ({activeDeliveries.length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-[#D62828] data-[state=active]:text-white text-xs sm:text-sm">
                  Completed ({completedDeliveries.length})
                </TabsTrigger>
              </TabsList>

              {/* Active Deliveries */}
              <TabsContent value="active" className="space-y-3 sm:space-y-4">
                {activeDeliveries.map((delivery) => (
                  <Card
                    key={delivery.id}
                    className="border-2 border-gray-200 hover:border-[#D62828] hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-3 sm:p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getStatusColor(delivery.status)} animate-pulse flex-shrink-0`} />
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-sm sm:text-lg truncate">{delivery.customerName}</h4>
                            <p className="text-xs sm:text-sm text-gray-500">Order #{delivery.orderId}</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
                          {getPriorityBadge(delivery.priority)}
                          <Badge variant="outline" className="capitalize text-[10px] sm:text-xs whitespace-nowrap">
                            {delivery.status.replace("-", " ")}
                          </Badge>
                        </div>
                      </div>

                      {/* Delivery Info Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4 p-2 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#D62828] flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] sm:text-xs text-gray-500">Pickup</p>
                            <p className="text-xs sm:text-sm font-medium truncate">{delivery.pickupLocation}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#D62828] flex-shrink-0" />
                          <div>
                            <p className="text-[10px] sm:text-xs text-gray-500">ETA</p>
                            <p className="text-xs sm:text-sm font-medium">{delivery.estimatedTime}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Package className="w-3 h-3 sm:w-4 sm:h-4 text-[#D62828] flex-shrink-0" />
                          <div>
                            <p className="text-[10px] sm:text-xs text-gray-500">Weight</p>
                            <p className="text-xs sm:text-sm font-medium">{delivery.totalWeight}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Thermometer className="w-3 h-3 sm:w-4 sm:h-4 text-[#D62828] flex-shrink-0" />
                          <div>
                            <p className="text-[10px] sm:text-xs text-gray-500">Temperature</p>
                            <p className="text-xs sm:text-sm font-medium">{delivery.temperature}</p>
                          </div>
                        </div>
                      </div>

                      {/* Delivery Address */}
                      <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-blue-600 font-medium mb-0.5 sm:mb-1">Delivery Address</p>
                            <p className="text-xs sm:text-sm font-medium break-words">{delivery.customerAddress}</p>
                            <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">{delivery.distance} away</p>
                          </div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Items ({delivery.items.length}):</p>
                        <ul className="space-y-0.5 sm:space-y-1">
                          {delivery.items.map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-1.5 sm:gap-2">
                              <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="break-words">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Special Instructions */}
                      {delivery.specialInstructions && (
                        <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <p className="text-[10px] sm:text-xs text-yellow-700 font-medium mb-0.5 sm:mb-1">⚠️ Special Instructions</p>
                          <p className="text-xs sm:text-sm text-gray-700 break-words">{delivery.specialInstructions}</p>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t">
                        <Button
                          className="flex-1 bg-[#D62828] hover:bg-[#A4161A] text-white h-9 sm:h-10 text-xs sm:text-sm"
                        >
                          <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Navigate
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white h-9 sm:h-10 text-xs sm:text-sm"
                        >
                          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Call Customer
                        </Button>
                        <Button
                          variant="outline"
                          className="hidden sm:flex px-4 sm:px-6 h-9 sm:h-10"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Delivery Fee */}
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">Delivery Fee</span>
                        <span className="text-base sm:text-lg font-bold text-[#D62828]">R{delivery.deliveryFee}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Completed Deliveries */}
              <TabsContent value="completed" className="space-y-3 sm:space-y-4">
                {completedDeliveries.map((delivery) => (
                  <Card
                    key={delivery.id}
                    className="border-2 border-gray-200 hover:shadow-md transition-shadow opacity-75"
                  >
                    <CardContent className="p-3 sm:p-6">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-sm sm:text-lg truncate">{delivery.customerName}</h4>
                            <p className="text-xs sm:text-sm text-gray-500">Order #{delivery.orderId}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <p className="text-xs sm:text-sm font-medium text-green-600">Delivered</p>
                          <p className="text-[10px] sm:text-xs text-gray-500">R{delivery.deliveryFee} earned</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div>
                          <p className="text-gray-500 text-[10px] sm:text-xs">Distance</p>
                          <p className="font-medium text-xs sm:text-sm">{delivery.distance}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-[10px] sm:text-xs">Weight</p>
                          <p className="font-medium text-xs sm:text-sm">{delivery.totalWeight}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-[10px] sm:text-xs">Items</p>
                          <p className="font-medium text-xs sm:text-sm">{delivery.items.length} items</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-[10px] sm:text-xs">Time</p>
                          <p className="font-medium text-xs sm:text-sm">{delivery.estimatedTime}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}