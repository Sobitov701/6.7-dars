import Product from "./Product";

function ProductList({ desserts, loading, addToCart }) {
  return (
    <div className="desserts">
      <h1 className="disserts-title">Desserts</h1>
      {loading && <h2>Loading...</h2>}
      <div>
        {desserts &&
          desserts.map((d) => {
            return <Product key={d.id} d={d} addToCart={addToCart} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
