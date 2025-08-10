import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ui/product-card";
import { products } from "@/data/products";

const categories = [
  { value: "all", label: "All Products" },
  { value: "tshirts", label: "T-Shirts" },
  { value: "hoodies", label: "Hoodies" },
  { value: "accessories", label: "Accessories" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display font-medium mb-4">Shop Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of sustainable, timeless pieces designed for modern life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={selectedCategory === category.value ? "vento-button-primary" : "vento-button-secondary"}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="vento-grid">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="vento-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No products found in this category.</p>
            <Button
              variant="outline"
              className="vento-button-secondary"
              onClick={() => setSelectedCategory("all")}
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;