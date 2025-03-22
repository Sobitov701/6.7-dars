import Product from "./product";

function ProductList({ desserts, loading }) {
  return (
    <div className="desserts">
      <h1 className="disserts-title">disserts</h1>
      {loading && <h2>loading...</h2>}
    </div>
  );
}

export default ProductList;
