import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/stores/cartStore";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <Card className={`vento-card group overflow-hidden ${className}`}>
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary/20">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-medium mb-2 group-hover:text-muted-foreground transition-colors">
              {product.name}
            </h3>
            <p className="text-lg font-medium mb-4">${product.price}</p>
            <Button
              onClick={handleAddToCart}
              className="w-full vento-button-secondary"
              size="sm"
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;