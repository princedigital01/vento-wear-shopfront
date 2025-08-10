import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Signup */}
        <div className="mb-12 text-center">
          <h3 className="text-lg font-medium mb-4">Stay in the loop</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Be the first to know about new arrivals, sustainability updates, and exclusive offers.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="vento-input"
            />
            <Button className="vento-button-primary">Subscribe</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">VentoWear</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Timeless, sustainable fashion for everyday life. Made with care for people and planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@ventowear.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=tshirts" className="text-muted-foreground hover:text-foreground transition-colors">T-Shirts</Link></li>
              <li><Link to="/shop?category=hoodies" className="text-muted-foreground hover:text-foreground transition-colors">Hoodies</Link></li>
              <li><Link to="/shop?category=accessories" className="text-muted-foreground hover:text-foreground transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Materials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 VentoWear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;