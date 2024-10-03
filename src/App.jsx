import Carrinho from "./components/Carrinho/Carrinho";
import Header from "./components/Header";
import Products from "./components/Products";
import Provider from "./context/Provider";

function App() {


  return (
    <Provider>
      <Header />
      <Products />
      <Carrinho />
    </Provider>
  )
}

export default App
