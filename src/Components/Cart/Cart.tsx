import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../redux/root-reducer";
import { FaRegTrashCan } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
import * as S from "./styles";
import { removeProduct } from "../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart: React.FC<CartProps> = ({ showCart, setShowCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();
  const total = cart
    .reduce((totalCart, product) => {
      return totalCart + product.price;
    }, 0)
    .toFixed(2);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price.toFixed(2)}
            <br />
            <S.ButtonTrash onClick={() => dispatch(removeProduct(product))}>
              <FaRegTrashCan />
            </S.ButtonTrash>
          </S.CartProductItem>
        ))}
      </S.CartProductList>
      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
      <br />
      <S.ButtonClose onClick={() => setShowCart(!showCart)}>
        <CgCloseR />
      </S.ButtonClose>
    </S.Container>
  );
};
