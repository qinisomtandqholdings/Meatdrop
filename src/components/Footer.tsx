import { Facebook, Twitter, Linkedin, Mail, Shield, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-24">
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                MeatDrop
              </h2>
              <div className="text-sm text-white/60 mt-1">Blockchain Marketplace</div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              The world's leading blockchain-powered livestock and meat marketplace. Trusted, transparent, and secure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-[#D62828] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D62828] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D62828] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D62828] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D62828] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Browse Auctions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Become a Seller
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  My Bids
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Smart Contracts
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Blockchain Explorer
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact & Support</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="mailto:support@meatdrop.com" className="text-white/70 hover:text-[#D62828] transition-colors">
                  support@meatdrop.com
                </a>
              </li>
              <li>
                <a href="tel:+27111234567" className="text-white/70 hover:text-[#D62828] transition-colors">
                  +27 11 123 4567
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D62828] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2024 MeatDrop. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Shield className="w-4 h-4 text-[#FFB81C]" />
                <span>Powered by <span className="text-[#FFB81C] font-semibold">Ethereum Blockchain</span></span>
              </div>
              <span className="text-white/30">|</span>
              <a href="#" className="text-white/50 hover:text-[#D62828] text-sm transition-colors">
                Smart Contract: <code className="font-mono">0x742d...bEb5</code>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}