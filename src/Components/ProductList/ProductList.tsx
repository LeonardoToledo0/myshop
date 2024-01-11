import * as S from "./styles";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../data/Products";

export const ProductList: React.FC = () => {
  return (
    <S.Conatainer>
      {products.map((products) => (
        <ProductCard key={products.id} product={products} />
      ))}
    </S.Conatainer>
  );
};
