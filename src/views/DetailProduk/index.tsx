import { ProductType } from '@/type/product.type'
import styles from './DetailProduk.module.scss'
export default function DetailProduk({product}: {product: ProductType}) {
  return (
    <>
                <h1 className={styles.title}>Detail Produk</h1>
                <div className={styles.productDetail}>
                    <div className={styles.productDetail__image}>
                        <img width="320px" src={product.image} alt={product.name} />
                    </div>
                    <h4 className={styles.productDetail__name}>
                        {product.name}
                    </h4>
                    <p className={styles.productDetail__category}>
                        {product.category}
                    </p>
                    <p className={styles.productDetail__price}>
                        {product.price && product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </p>
                </div>
    </>
  )
}
