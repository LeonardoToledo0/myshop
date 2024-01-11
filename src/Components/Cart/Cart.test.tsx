import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { products } from "../../data/Products";

const cart = products.slice(0, 2);

describe("Cart > Unit test", () => {
  it("should render an empty cart correctly", () => {
    render(
      <Provider store={store}>
        <Cart showCart={true} setShowCart={jest.fn()} />
      </Provider>
    );

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getAllByTestId("total");
    const cartListElement = screen.getByRole("list");

    // Debugging the rendered elements
    screen.debug(titleElement);
    screen.debug(totalElement);
    screen.debug(cartListElement);

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement[0]).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    render(
      <Provider store={store}>
        <Cart showCart={true} setShowCart={jest.fn()} />
      </Provider>
    );

    const productsItemsElements = screen.getAllByRole("listitem");
    expect(productsItemsElements.length).toBe(2);
  });
});
