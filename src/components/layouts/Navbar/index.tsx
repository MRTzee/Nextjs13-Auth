
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Image from "next/image"
export default function Navbar() {
  const {data}: any = useSession();
  return (
    <div className={styles.navbar}>
      <h3>Navbar</h3>
      <div className={styles.profile}>
      {data?.user?.image && (
        // <img className={styles.avatar} src={data.user.image} alt={data.user.fullname} />
        <Image width={30} height={30} src={data.user.image} alt={data.user.fullname} className={styles.avatar} />
      )}
      {data && data.user.fullname}{" "}
      {data ? (
        <button className={styles.button} onClick={()=> signOut()}>Sign out</button>
        ) : (
        <button className={styles.button} onClick={()=> signIn()}>Sign in</button>
      )}
      </div>
    </div>
  )
}
