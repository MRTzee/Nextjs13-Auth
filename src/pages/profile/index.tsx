import { useSession } from "next-auth/react";

export default function profilePage() {
    const {data}: any = useSession();
  return (
    <div>
        <h1>Profile</h1>
        <h2>{data && data.user.fullname}{" "}</h2>
    </div>
  )
}
