"use client";
import { FormEvent, useState } from "react";
import { z } from "zod"
import { registerFormSchema } from "@/lib/zod/registerFormSchema"
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Register () {

    const [loading, setLoading] = useState(false);

    const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        setLoading(true)

        try {
            // Do something
            const formData = new FormData(evt.currentTarget)
            const res = await fetch('/api/register', {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            setLoading(false)

            console.log('RESPONSE FROM REGISTRATION: ')
            console.log(data)

        } catch (error) {
            setLoading(false)
            console.log('ERROR:', error)
        }
    }

    return (
        <section className="p-8">
            <h1 className="text-5xl font-bold text-center">Register</h1>
            <br/>

            <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-5xl m-auto p-3">
                {/* First & Last Name */}
                <div className="flex flex-col m-auto gap-6 w-full md:flex-row">                    
                    <div className="flex flex-col w-full">
                        <Input type={'firstName'} label="First Name" name="firstName" isRequired autoFocus />
                    </div>
                    <div className="flex flex-col w-full">
                        <Input type="text" label="Last Name" name="lastName" isRequired />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col m-auto gap-6 w-full md:flex-row">                    
                    <div className="flex flex-col w-full">
                        <Input type="email" label="E-mail" name="email" isRequired />
                    </div>
                </div>

                {/* Password & Confirm Password */}
                <div className="flex flex-col m-auto gap-6 w-full md:flex-row">                    
                    <div className="flex flex-col w-full">
                        <Input type="password" label="Password" name="password" isRequired />
                    </div>
                    <div className="flex flex-col w-full">
                        <Input type="password" label="Confirm Password" name="confirmPassword" isRequired />
                    </div>
                </div>

                <Button disabled={loading} type="submit" color="primary" radius="sm" className="text-white font-bold">
                    { loading ? 'Loading...' : 'Submit'}
                </Button>
            </form>
        </section>
    )
}