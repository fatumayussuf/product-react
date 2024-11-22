import product from "../product";

export default function Image() {
  return <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />;
}
