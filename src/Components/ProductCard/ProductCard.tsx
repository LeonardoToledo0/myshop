import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../data/Products";
import * as S from "./styles";
import { RootReducer } from "../redux/root-reducer";
import { addProduct, removeProduct } from "../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }
  function handleRemovoProductFromCart() {
    dispatch(removeProduct(product));
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProdutTitle>{product.title}</S.ProdutTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCardButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemovoProductFromCart}>
            Remover ao Carrinho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCardButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho <FiShoppingCart />
          </S.AddToCardButton>
        )}
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
