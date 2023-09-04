import { useRouter } from "next/router";
import {Roboto} from 'next/font/google'
// lazy load di next js cuma beda pemanggilan
import dynamic from "next/dynamic";

const Navbar = dynamic(()=> import ("../Navbar"))

type AppShellProps = {
    children : React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'],
})
export default function AppShell(props: AppShellProps) {
  const disableNavbar = ["/auth/login", "/auth/register", "/404"];
    const {children} = props;
    const {pathname} = useRouter();
  return (
    <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar/>}
            {children}
    </main>
  )
}
