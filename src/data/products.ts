import { Product } from "@/components/ui/product-card";
import productTshirt from "@/assets/product-tshirt.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productBag from "@/assets/product-bag.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Essential T-Shirt",
    price: 32,
    image: productTshirt,
    category: "tshirts",
    description: "Our signature organic cotton t-shirt. Soft, breathable, and designed to last. Made from 100% GOTS-certified organic cotton.",
  },
  {
    id: "2",
    name: "Comfort Hoodie",
    price: 68,
    image: productHoodie,
    category: "hoodies",
    description: "A cozy hoodie perfect for any season. Made from sustainable cotton blend with a relaxed fit and minimal design.",
  },
  {
    id: "3",
    name: "Canvas Tote Bag",
    price: 24,
    image: productBag,
    category: "accessories",
    description: "Durable canvas tote bag for everyday use. Made from recycled materials with reinforced handles.",
  },
  {
    id: "4",
    name: "Classic White Tee",
    price: 32,
    image: productTshirt,
    category: "tshirts",
    description: "The perfect white t-shirt. Clean lines, comfortable fit, made from premium organic cotton.",
  },
  {
    id: "5",
    name: "Oversized Hoodie",
    price: 72,
    image: productHoodie,
    category: "hoodies",
    description: "Relaxed-fit hoodie with a modern oversized silhouette. Premium cotton blend for ultimate comfort.",
  },
  {
    id: "6",
    name: "Market Bag",
    price: 28,
    image: productBag,
    category: "accessories",
    description: "Spacious market bag perfect for shopping and daily errands. Sustainable and durable design.",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 3);
};