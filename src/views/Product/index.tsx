import Link from 'next/link';
import Image from 'next/image';
import styles from './Product.module.scss'
import { ProductType } from "@/type/product.type";
export default function ProductView({products}: {products:ProductType}) {
  return (
    <div className={styles.product}>
    <div className={styles.product__title}>Product</div>
    <div className={styles.product__content}>
        {products.length > 0 ? (
            <>
                {products.map((product: ProductType)=>(
                <Link href={`/product/${product.id}`} key={product.id} className={styles.product__content__item}>
                    <div className={styles.product__content__image}>
                        {/* <img width="320px" src={product.image} alt={product.name} /> */}
                        <Image src={product.image} alt={product.name} width={500} height={500}/>
                    </div>
                    <h4 className={styles.product__content__item__name}>
                        {product.name}
                    </h4>
                    <p className={styles.product__content__item__category}>
                        {product.category}
                    </p>
                    <p className={styles.product__content__item__price}>
                        {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </p>
                </Link>
            ))}
            </>
        ) : (
        <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image}/>
            <div className={styles.product__content__skeleton__name}/>
            <div className={styles.product__content__skeleton__category}/>
            <div className={styles.product__content__skeleton__price}/>
        </div>
        )}
    </div>
</div>
)
}