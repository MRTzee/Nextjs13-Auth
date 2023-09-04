import ProductView from "@/views/Product";
import { ProductType } from "../../type/product.type";

export default function ProductPage(props: {products: ProductType[]}) {
    const {products} = props
  return (
    <div>
        <ProductView products={products} />
    </div>
  )
}

// dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();
    console.log(response);

    return {
        props: {
            products: response.data,
        }
    }
}


