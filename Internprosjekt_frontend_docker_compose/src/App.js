import { useState } from "react";
import Product from "./components/partials/Product";

function App() {
    const [productsData, setProductsData] = useState({
        total: 0,
        products: []
    });

  async function getProductsData() {
        const response = await fetch("https://dummyjson.com/products?limit=10");
    const json = await response.json();
    setProductsData(json);
  }

  function renderProducts(productsData) {
        return productsData?.products?.length
            ? productsData.products.map((product) => {
                  return <Product key={product.id} product={product} />;
      })
            : null;
  }

  return (
    <div>
            <h1>Products</h1>
            <button onClick={getProductsData}>Get products</button>
      {renderProducts(productsData)}
    </div>
  );
}

export default App;
