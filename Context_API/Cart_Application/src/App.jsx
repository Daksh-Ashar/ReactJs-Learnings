import { Home } from "./View/Home";
import { CartProvider } from "./Context/Cart";

function App() {
  return (
    <CartProvider>
          <Home/>
    </CartProvider>
  )
}

export default App
