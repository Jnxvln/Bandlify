import { NextRequest, NextResponse } from "next/server";
import TUser from "@/lib/types/TUser";
import bcrypt from "bcrypt"

export async function POST (request: NextRequest, response: NextResponse) {
    const formData = await request.formData()

    if (!formData) return new NextResponse({ status: "error", error: "Expected form data"}, { status: 500 })

    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const userPassword = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (firstName?.length === 0 || lastName?.length === 0 || email?.length === 0 || userPassword?.length === 0 || confirmPassword?.length === 0) {
        return NextResponse.json({
            status: "error",
            error: "Missing one or more required fields"
        }, { status: 400 })
    }

    if (confirmPassword !== userPassword) {
        return NextResponse.json({
            status: "error",
            error: "Passwords do not match"
        }, { status: 400 })
    }

    const user: TUser = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: await bcrypt.hash(formData.get('password'), 10),
    }

    console.log('User to register:', user)

    const { password, ...safeUser } = user

    return NextResponse.json({
        status: "success",
        data: {...safeUser}
    }, { status: 200 })
}