import { z } from "zod";

const maxNameLength = 50
const maxEmailLength = 100
const minPasswordLength = 6
const maxPasswordLength = 64

export const registerFormSchema = z.object({
    firstName: z.string().max(maxNameLength),
    lastName: z.string().max(maxNameLength),
    email: z.string().email().max(maxEmailLength),
    password: z.string().min(minPasswordLength).max(maxPasswordLength),
    confirmPassword: z.string().min(minPasswordLength).max(maxPasswordLength)
})