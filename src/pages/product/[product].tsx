import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/type/product.type";
import DetailProduk from "@/views/DetailProduk";
import { useRouter } from "next/router"
import useSWR from "swr";

export default function DetailProductPage({product}: {product: ProductType}) {

    const {query} = useRouter();
    // CLIENT SIDE RENDERING
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.product}`, fetcher
    //   );

    return (
        <div>
            {/* CLIENT SIDE RENDERING */}
            {/* <DetailProduk product={isLoading ? [] : data.data}/> */}
            {/* SERVER SIDE RENDERING */}
            <DetailProduk product={product}/>
        </div>
    )
}

export async function getServerSideProps({params} : {params: {product:string}}) {
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
    const response = await res.json();
    console.log(response);

    return {
        props: {
            product: response.data,
        }
    }
}

