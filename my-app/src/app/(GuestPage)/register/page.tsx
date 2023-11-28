"use client"
import { useSession, signIn } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .email(),
    password: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const Register = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        signIn()
    }
    const ReisterGoogle = () => {
        signIn("google")
    }
    const { data: session } = useSession()

    if (session || session) {
        redirect("/")
    }
    return (
        <div className="w-[22%] mx-auto mt-[80px] border-solid border-2 px-[20px] py-[20px] rounded-xl bg-slate-50">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex justify-center">Đăng kí</div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input autoComplete="off" type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center gap-10">
                        <Button type="submit" className="bg-black text-white rounded-xl hover:bg-black">Đăng kí</Button>
                    </div>
                </form>
            </Form>
            <div className="flex justify-center">
                <button className="flex gap-5 mt-[20px]" onClick={() => ReisterGoogle()}>
                    <div>Đăng nhập bằng Google</div>
                    <div><img width="30" src="/gg.svg" alt="" /></div>
                </button>
            </div>
        </div>
    )
}
export default Register;