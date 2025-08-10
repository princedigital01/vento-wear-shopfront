import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ui/product-card";
import { getFeaturedProducts } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";
import aboutImage from "@/assets/about-image.jpg";

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="VentoWear Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/20" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-hero font-semibold mb-6 vento-fade-in">
            Timeless Style for Every Day
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto vento-fade-in [animation-delay:200ms]">
            Discover our collection of sustainable, gender-neutral clothing made from the finest organic materials.
          </p>
          <Link to="/shop">
            <Button size="lg" className="vento-button-primary vento-fade-in [animation-delay:400ms]">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-display font-medium mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted essentials that form the foundation of a sustainable wardrobe.
            </p>
          </div>
          
          <div className="vento-grid mb-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="vento-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop">
              <Button variant="outline" className="vento-button-secondary">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-display font-medium">Sustainable by Design</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every piece in our collection is thoughtfully designed with both people and planet in mind. 
                We use only organic, responsibly-sourced materials and work with ethical manufacturers 
                who share our commitment to sustainability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to create timeless clothing that transcends trends, 
                reducing waste and encouraging mindful consumption.
              </p>
              <Link to="/about">
                <Button variant="outline" className="vento-button-secondary">
                  Learn Our Story
                </Button>
              </Link>
            </div>
            <div className="vento-scale-hover">
              <img
                src={aboutImage}
                alt="Sustainable materials"
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Strip */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-display font-medium mb-4">Follow @ventowear</h2>
          <p className="text-muted-foreground mb-8">
            See how our community styles their VentoWear pieces
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="vento-card aspect-square overflow-hidden group cursor-pointer">
                <CardContent className="p-0 h-full">
                  <div className="h-full bg-secondary/40 flex items-center justify-center group-hover:bg-secondary/60 transition-colors">
                    <span className="text-muted-foreground text-sm">@ventowear</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <a
            href="https://instagram.com/ventowear"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="vento-button-secondary">
              Follow on Instagram
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;