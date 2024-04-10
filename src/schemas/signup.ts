import {z} from 'zod'

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,{message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."}),
    username:z.string().min(4)
})