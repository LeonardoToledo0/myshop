import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 350px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: 0.5s;
`;
export const Title = styled.h1``;
export const CartProductList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CartProductItem = styled.li``;
export const CartTotal = styled.strong``;
export const ButtonClose = styled.span`
  flex: 1;
  font-size: 30px;
  padding: 20px;
  position: fixed;
  height: 50px;
  width: 50px;
  bottom: 20px;
  padding: 10px 20px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const ButtonTrash = styled.span`
  flex: 1;
  font-size: 20px;
`;
