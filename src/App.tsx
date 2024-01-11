import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductList } from "./Components/ProductList/ProductList";
import { Provider } from "react-redux";
import { store } from "./Components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
