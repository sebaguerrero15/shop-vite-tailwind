import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import Product from "../components/Product"
import Hero from "../components/Hero"

const Home = () => {
  //Obtener productos de context
  const { products } = useContext(ProductContext);

  //Filtrar solo ropa de hombre y mujer
  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" || product.category === "women's clothing"
    );
  });
  console.log(filteredProducts);
  return(
  <div>
    <Hero />
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>
  )};

export default Home;
