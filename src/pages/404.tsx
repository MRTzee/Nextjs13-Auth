import styles from '@/styles/404.module.scss'
import Image from 'next/image'

export default function Custom404() {
  return (
    <div className={styles.error}>
        {/* <img src="/404.png" alt="404" className={styles.error__image} /> */}
        <Image src="/404.png" alt="404" width={600} height={600} className={styles.error__image}/>
        <div>Halaman Tidak Ditemukan</div>
    </div>
  )
}
