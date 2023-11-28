"use client"
import Register from "@/app/(GuestPage)/register/page"
import { signOut, useSession } from "next-auth/react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { Badge } from "antd"
type Props = {
    children: React.ReactNode
}
interface Search {
    search: string
}
const GuestLayout = ({ children }: Props) => {
    const { data: session } = useSession()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data.search);
    }
    const dangXuat = () => {
        signOut()
    }
    return <>
        {/* Header */}
        <header className="bg-stone-400 h-[80px] flex">
            <div className="container flex items-center gap-5 justify-around">
                <Link href={"/"}>
                    <img className="w-[100px] h-[57px]" src="/next.svg" alt="" />
                </Link>
                <div className='relative w-[600px] flex items-cente'>
                    <Input placeholder="Tìm kiếm ...." {...register("search")} autoComplete="off" />
                    <button onClick={handleSubmit(onSubmit)} className="
                   h-[40px] w-[20%] bg-black hover:opacity-80 text-white">Search</button>
                </div>
                <div className="flex gap-10">
                    <Badge count={5} size="small" offset={[2, -2]}>
                        <div className="border border-solid rounded-md px-[10px] py-[5px]"><Link href={"#"}>Giỏ hàng</Link></div>
                    </Badge>
                    {!session ? (
                        <div className="flex gap-2">
                            <div><Link href={"/login"}>Đăng nhập</Link></div>
                            <div>/</div>
                            <div><Link href={"/register"}>Đăng kí</Link></div>
                        </div>
                    ) : (
                        <div className="flex gap-5">
                            <div>{session?.user?.name}</div>
                            <button onClick={() => dangXuat()}>Đăng xuất</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
        <main>
            {children}
        </main>
        <footer>
        </footer>
    </>
}

export default GuestLayout